import React, {useState} from "react";
import UserTable from "./tables/UserTable";

const App = () => {
  const userData = [
    { id: 1, name: "Tania", userName: "@taniatee22" },
    { id: 2, name: "Craig", userName: "@craigjennings" },
    { id: 3, name: "Jenny", userName: "@jenniferM" },
    { id: 4, name: "Chad", userName: "@gothchad404" }
  ];


  // useState is a react hook!
  // you can see we are passing the users as props to our UserTable component
  // setUsers will be used to create a new user
  const [users, setUsers] = useState(userData)

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users}/>
        </div>
      </div>
    </div>
  );
};

export default App;
