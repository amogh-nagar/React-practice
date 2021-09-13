import { Fragment, useState, useEffect, Component } from "react";
import UsersContext from "../context/users-context";
import Users from "./Users";
import UsersContext from "../context/users-context";
const DUMMY_USERS = [
  { id: "u1", name: "Max" },
  { id: "u2", name: "Manuel" },
  { id: "u3", name: "Julie" },
];

class UserFinder extends Component {
  
    static contextType=UsersContext
  
  
    constructor() {
    super();
    this.state = {
      filteredUsers: [],
      searchTerm: "",
    };
  }

  componentDidMount() {
    //Send http request
    this.setState({ filteredUsers: this.context.users });
  }

  componentDidUpdate(prevprops, prevstate) {
    if (prevstate.searchTerm !== this.state.searchTerm) {
      this.setState({
        filteredUsers: this.context.users.filter((u) =>
          u.name.includes(this.state.searchTerm)
        ),
      });
    }
  }

  searchChangeHandler(e) {
    this.setState({ searchTerm: e.target.value });
  }

  render() {
    return (
      <Fragment>
        {/* SO that this keyword works correctly */}
        <input type="search" onChange={this.searchChangeHandler.bind(this)} />
        <Users users={this.state.filteredUsers} />
      </Fragment>
    );
  }
}
export default UserFinder;
