import React, { Component } from 'react';
 // eslint-disable-next-line 
import axios from 'axios';
import SearchResult from './SearchResult';
import './App.css';

class App extends Component {
  state = {
    searchResults: [],
  }

  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  handleCreate() {
    // ready data for POST here



    // call POST here using axios

    

  }

  getUsers() {
    // call GET here using axios



  }

  deleteUser(e) {
    // call DELETE here using axios



  }

  render() {
    const searchResults = this.state.searchResults.map((user, index, all) => {
      return (
        <SearchResult
          key={index}
          user={user}
          index={index}
          deleteUser={this.deleteUser}
        />
      );
    });
    
    return (
      <div className="App">
        <div className="newUser">
          <table>
            <thead>
              <tr>
                <th>
                  Create a new user!
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="nameInputContainer">
                  <label>Name</label>
                  <input id="nameInput" placeholder="Enter a name..."/>
                </td>
                <td id="emailInputContainer">
                  <label>Email</label>
                  <input id="emailInput" placeholder="Enter an email..."/>
                </td>
                <td id="orgInputContainer">
                  <label>Organization</label>
                  <input id="orgInput" placeholder="Enter an organization..."/>
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <button id="createButton">Create</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="allUsers">
          <h3>
            Users in the Database
          </h3>
          <table id="usersList">
            <thead>
              <tr>
                <th>
                  Name
                </th>
                <th>
                  Email
                </th>
                <th>
                  Organization
                </th>
                <th>
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {searchResults}
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;