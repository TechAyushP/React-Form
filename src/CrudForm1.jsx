import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CrudForm1 = () => {
  const { register, handleSubmit, reset, setValue } = useForm();
  const [users, setUsers] = useState([]);
  const [editingUserId, setEditingUserId] = useState(null);

  // Create or Update user
  const onSubmit = (data) => {
    console.log(data,'fbdkf')
    if (editingUserId === null) {
      // Create
      setUsers([...users, { id: Date.now(), ...data }]);
    } else {
      // Update
      const updatedUsers = users.map((user) =>
        user.id === editingUserId ? { id: editingUserId, ...data } : user
      );
      setUsers(updatedUsers);
      setEditingUserId(null); // Reset editing state
    }
    reset(); // Reset form fields
  };

  // Edit user
  const editUser = (userId) => {
    const user = users.find((user) => user.id === userId);
    setValue('name', user.name);
    setValue('email', user.email);
    setEditingUserId(userId); // Set user to edit
  };

  // Delete user
  const deleteUser = (userId) => {
    setUsers(users.filter((user) => user.id !== userId));
  };

  return (
    <div >
      <h2 >User Management</h2>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} >
        <div >
          <label >Name</label>
          <input {...register('name', { required: true })} placeholder="Enter name"/>
        </div>
        <div >
          <label >Email</label>
          <input {...register('email', { required: true })}placeholder="Enter email" />  </div>
        <button type="submit" >{editingUserId === null ? 'Add User' : 'Update User'} </button>
      </form>

      {/* User List */}
      <h3 >Users</h3>
      <ul >
        {users.map((user) => (
          <li key={user.id} >
            <span>{user.name} - {user.email}</span>
            <button
              onClick={() => editUser(user.id)}
            >
              Edit
            </button>
            <button
              onClick={() => deleteUser(user.id)}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CrudForm1;
