import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const CreateUserForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const [users, setUsers] = useState([]);

  // Handle form submission (create user)
  const onSubmit = (data) => {
    setUsers([...users, { id: Date.now(), ...data }]); // Add new user to the list
    reset(); // Reset form fields after submission
  };

  return (
    <div >
      <h1 >Create User: </h1>

      {/* Form */}
      <form onSubmit={handleSubmit(onSubmit)} >
        <div >
          <label>Name</label>
          <input {...register('name', { required: true })}
            placeholder="Enter name"
          />
        </div>
        <div >
          <label >Email</label>
          <input {...register('email', { required: true })}
            placeholder="Enter email"
          />
        </div>
        <button type="submit" > Create User</button>
      </form>

      {/* User List */}
      <h3 >Users</h3>
      <ul >
        {users.map((user) => (
            <li key={user.id} >
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CreateUserForm;
