import React from 'react'
import { useForm } from 'react-hook-form';

const RegisterForm1 = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
  const handleRegistration = (data) => console.log(data);

  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input type="text" name="name" {...register('name')} />
        {errors?.name && errors.name.message}
      </div>
      {/* more input fields... */}
      <button>Submit</button>
    </form>
  )
}

export default RegisterForm1
