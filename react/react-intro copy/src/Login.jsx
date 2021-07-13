import React from 'react';

// input: object
// output: JSX
const Login = props => {
  console.log('props', props);
  return (
    <button className="login btn" onClick={props.onLogin}>
      Login
    </button>
  );
};

export default Login;
