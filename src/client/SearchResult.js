// eslint-disable-next-line
import React, { Component } from "react";

class SearchResult extends Component {
  // Complete render method below
  render() {
    const { user } = this.props;
    return (
      <tr className="userComp">
        <td>{user.name}</td>
        <td>{user.email}</td>
        <td>{user.org}</td>
        <td>
          <button
            id="deleteButton"
            data-db-id={this.props.user._id}
            onClick={this.props.deleteUser}
          >
            Delete
          </button>
        </td>
      </tr>
    );
  }
}

export default SearchResult;
