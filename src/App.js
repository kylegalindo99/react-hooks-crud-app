import React, {useState} from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from './forms/AddUserForm'

const App = () => {
  const userData = [
    { id: 1, name: "Tania", username: "@taniatee22" },
    { id: 2, name: "Craig", username: "@craigjennings" },
    { id: 3, name: "Jenny", username: "@jenniferM" },
    { id: 4, name: "Chad", username: "@gothchad404" }
  ];

  // useState is a react hook!
  // you can see we are passing the users as props to our UserTable component
  // setUsers will be used to create a new user in our addUser function below
  const [users, setUsers] = useState(userData)


  // add user function
  const addUser = user => {
    user.id = users.length +1
    setUsers([...users, user])
  }

  // delete user function, using filter
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id))
  }

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add User</h2>
          <AddUserForm addUser={addUser}/>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} deleteUser={deleteUser}/>
        </div>
      </div>
    </div>
  );
};

export default App;
