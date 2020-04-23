import React, { useState } from "react";
import UserTable from "./tables/UserTable";
import AddUserForm from "./forms/AddUserForm";
import EditUserForm from "./forms/EditUserForm";

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
  const [users, setUsers] = useState(userData);

  // is edit mode turned on?
  const [editing, setEditing] = useState(false);
  const initialFormState = { id: null, name: "", username: "" };

  // current user
  const [currentUser, setCurrentUser] = useState(initialFormState);

  // edit row function
  const editRow = user => {
    setEditing();
    setCurrentUser({ id: user.id, name: user.name, username: user.name });
  };

  // edit user function
  const updateUser = (id, updatedUser) => {
    setEditing(false);
    setUsers(users.map(user => (user.id === id ? updatedUser : user)));
  };

  // add user function
  const addUser = user => {
    user.id = users.length + 1;
    setUsers([...users, user]);
  };

  // delete user function, using filter
  const deleteUser = id => {
    setUsers(users.filter(user => user.id !== id));
  };

  return (
    <div className="container">
      <h1>CRUD App with Hooks</h1>
      <div className="flex-row">
        <div className="flex-large">
          {editing ? (
            <div>
              <h2>Edit user</h2>
              <EditUserForm
                setEditing={setEditing}
                currentUser={currentUser}
                updateUser={updateUser}
              />
            </div>
          ) : (
            <div>
              <h2>Add user</h2>
              <AddUserForm addUser={addUser} />
            </div>
          )}
        </div>
        <div className="flex-large">
          <h2>View users</h2>
          <UserTable users={users} editRow={editRow} deleteUser={deleteUser} />
        </div>
      </div>
    </div>
  );
};

export default App;
