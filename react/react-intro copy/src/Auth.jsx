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

  onLogout = () => {
    this.setState({
      isLoggedIn: false,
    });
  };

  render() {
    if (!this.state.isLogging && !this.state.isLoggedIn) {
      return <Login onLogin={this.onLogin} />;
    }
    if (this.state.isLogging) {
      return <Spinner size={32} />;
    }
    if (this.state.isLoggedIn && !this.state.isLogging) {
      return <Logout onLogout={this.onLogout} />;
    }
    return null;
  }
}

export default Auth;
