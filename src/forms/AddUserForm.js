import React from "react";

const AddUserForm = props => {
  // initial state
  const initialFormState = { id: null, name: "", username: "" };

  // we finna use the hook useState here
  const [user, setUser] = useState(initialFormState);

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  return (
    <form>
      <label>Name</label>
      <input type="text" name="name" value={user.name} onChange={handleInputChange}></input>
      <label>Username</label>
      <input type="text" name="username" value={user.name} onChange={handleInputChange}></input>
      <button>Add New User</button>
    </form>
  );
};

export default AddUserForm;
