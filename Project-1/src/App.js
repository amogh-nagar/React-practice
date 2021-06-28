import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [userslist, setuserslist] = useState([]);
  const userlistdatahandler = (uname, uage) => {
    setuserslist((prevState) => [
      ...prevState,
      {name: uname, age: uage, id: Math.floor(Math.random * 100).toString()},
    ]);
  };

  return (
    <div>
      <AddUser onadduser={userlistdatahandler} />
      <UserList users={userslist} />
    </div>
  );
}

export default App;
