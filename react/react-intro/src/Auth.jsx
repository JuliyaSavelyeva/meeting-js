import React from 'react';
import Login from './Login.jsx';
import Logout from './Logout.jsx';
import Spinner from './Spinner.jsx';

// 1. show login by default
// 2. show spinner for 2 seconds after login click
// 3. show logout
// 4. show login after logout click

class Auth extends React.Component {
  state = {
    isLoggedIn: false,
    isLogging: false,
  };

  onLogin = () => {
    this.setState({
      isLogging: true,
    });

    setTimeout(() => {
      this.setState({
        isLoggedIn: true,
        isLogging: false,
      });
    }, 2000);
  };

  onLogout = () => {};

  render() {
    return (
      <>
        <Login onLogin={this.onLogin} />
        <Logout onLogout={this.onLogout} />
        {/* <Spinner size={20} /> */}
      </>
    );
  }
}

export default Auth;
