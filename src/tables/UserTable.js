import React from "react";

const UserTable = props => {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>User Name</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        {props.users.length > 0 ? (
          props.users.map(user => (
            <tr key={user.id}>
              <td>{user.name} </td>
              <td>{user.userName}</td>

              <td>
                <button className="button muted-button">Edit </button>
                <button className="button muted-button">Delete</button>
              </td>
            </tr>
          ))
        ) : (
          <tr>
            <td colSpan={3}>No Users</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default UserTable;
