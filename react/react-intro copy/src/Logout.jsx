import React from 'react';

// input: object
// output: JSX
const Logout = props => {
  console.log('props', props);
  return (
    <button className="logout btn" onClick={props.onLogout}>
      Logout
    </button>
  );
};

export default Logout;
