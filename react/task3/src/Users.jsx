import React from 'react';
import { Link, Route } from 'react-router-dom';
import User from './User.jsx';

const Users = () => {
  return (
    <div className="page__content">
      <h1>Users</h1>
      <ul className="navigation">
        <li className="navigation__item">
          <Link to="/users/github">Github</Link>
        </li>
        <li className="navigation__item">
          <Link to="/users/facebook">Facebook</Link>
        </li>
      </ul>
      <Route exact path="/users">
        <span>Select a user please</span>
      </Route>
      <Route path="/users/:userId" component={User} />
    </div>
  );
};

export default Users;
