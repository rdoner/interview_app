import React, { Component } from "react";
// eslint-disable-next-line
import axios from "axios";
import SearchResult from "./SearchResult";
import "./App.css";

class App extends Component {
  state = {
    searchResults: [
      {
        name: "ryan",
        email: "rdoner@email",
        org: "techtonic",
        _id: "123"
      },
      {
        name: "matt",
        email: "matt@email",
        org: "avant",
        _id: "124"
      }
    ]
  };

  constructor(props) {
    super(props);
    this.handleCreate = this.handleCreate.bind(this);
  }

  componentDidMount() {
    this.getUsers();
  }

  handleCreate() {
    // ready data for POST here
    const user = {
      name: document.getElementById("nameInput").value,
      email: document.getElementById("emailInput").value,
      org: document.getElementById("orgInput").value
    };
    // console.log("user", user);

    // call POST here using axios
    axios.post("/", user).then(res => {
      
      // res.send('hi')
      console.log(res);

      this.setState({
        searchResults: [
          ...this.state.searchResults,
          {
            name: "added user",
            email: "added email",
            org: "added org",
            _id: "6"
          }
        ]
      });
    })
    .catch(err => {
      console.log('hi there')
      console.log(err);
    })
  }

  getUsers() {
    // call GET here using axios
    axios.get("/").then(res => {
      console.log(res);
      this.setState({
        searchResults: [
          {
            name: "new user",
            email: "new email",
            org: "new org",
            _id: "5"
          }
        ]
      });
    });
  }

  deleteUser(e) {
    // call DELETE here using axios
    const userid = e.target.getAttribute("data-db-id");
    axios.delete(`/${userid}`);

    // console.log(e.target.getAttribute("data-db-id"), "user deleted");
  }

  render() {
    const searchResults = this.state.searchResults.map((user, index, all) => {
      return <SearchResult key={index} user={user} index={index} deleteUser={this.deleteUser} />;
    });

    return (
      <div className="App">
        <div className="newUser">
          <table>
            <thead>
              <tr>
                <th>Create a new user!</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td id="nameInputContainer">
                  <label>Name</label>
                  <input id="nameInput" placeholder="Enter a name..." />
                </td>
                <td id="emailInputContainer">
                  <label>Email</label>
                  <input id="emailInput" placeholder="Enter an email..." />
                </td>
                <td id="orgInputContainer">
                  <label>Organization</label>
                  <input id="orgInput" placeholder="Enter an organization..." />
                </td>
              </tr>
              <tr>
                <td colSpan="3">
                  <button id="createButton" onClick={this.handleCreate}>
                    Create
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="allUsers">
          <h3>Users in the Database</h3>
          <table id="usersList">
            <thead>
              <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Organization</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>{searchResults}</tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default App;
