import React from 'react';
import Pagination from './Pagination.jsx';
import User from './User.jsx';

// state
// pageNumber
//

class UsersList extends React.Component {
  state = {
    currentPage: 1,
  };

  goNext = () => {
    this.setState({
      currentPage: this.state.currentPage + 1,
    });
  };

  goPrev = () => {
    this.setState({
      currentPage: this.state.currentPage - 1,
    });
  };

  render() {
    const users = this.props.users;

    const usersPerPage = 3;
    const { currentPage } = this.state;

    // input: usersPage, currentPage
    // output: users[]

    const startIndex = (currentPage - 1) * usersPerPage;
    const endIndex = startIndex + usersPerPage;
    const usersToDisplay = users.slice(startIndex, endIndex);

    return (
      <div>
        <Pagination
          goPrev={this.goPrev}
          goNext={this.goNext}
          currentPage={currentPage}
          totalItems={users.length}
          itemsPerPage={usersPerPage}
        />
        <ul className="users">
          {usersToDisplay.map(({ id, name, age }) => (
            <User key={id} name={name} age={age} />
          ))}
        </ul>
      </div>
    );
  }
}

export default UsersList;
