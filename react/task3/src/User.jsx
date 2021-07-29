import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  const [userData, setUserData] = useState(null);
  const { userId } = useParams();

  useEffect(() => {
    const baseUrl = 'https://api.github.com/users';
    fetch(`${baseUrl}/${userId}`)
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        throw new Error();
      })
      .then(({ avatar_url, name, location }) => {
        setUserData({
          userName: name,
          userLocation: location,
          userAvatar: avatar_url,
        });
      });
  }, [userId]);

  if (!userData) {
    return null;
  }

  const { userAvatar, userName, userLocation } = userData;

  return (
    <div className="user">
      <img alt="User Avatar" src={userAvatar} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userName}</span>
        <span className="user__location">{userLocation}</span>
      </div>
    </div>
  );
};

export default User;
