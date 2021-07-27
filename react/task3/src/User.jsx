import React, { useEffect, useState } from 'react';
import { getFetchData } from './gateway.js';

const User = ({ match }) => {
  const userId = match.params.userId;
  const [userData, setUserData] = useState({
    location: '',
    name: '',
    avatar_url: '',
  });

  useEffect(() => {
    getFetchData(userId).then(({ location, name, avatar_url }) => {
      setUserData({
        ...userData,
        location,
        name,
        avatar_url,
      });
    });
  }, [userId]);

  return (
    <div className="user">
      <img alt="User Avatar" src={userData.avatar_url} className="user__avatar" />
      <div className="user__info">
        <span className="user__name">{userData.name}</span>
        <span className="user__location">{userData.location}</span>
      </div>
    </div>
  );
};

export default User;
