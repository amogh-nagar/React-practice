import React, {useState} from "react";

import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
function App() {
  const [userslist, setuserslist] = useState([]);
  const userlistdatahandler = (uname, uage) => {
    setuserslist((prevState) => [
      ...prevState,
      {name: uname, age: uage, id: Math.random().toString()},
    ]);
  };

  return (
    <>
      <AddUser onadduser={userlistdatahandler} />
      <UserList users={userslist} />
    </>
  );
}

export default App;
