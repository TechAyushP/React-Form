import React from 'react'
import { useForm } from 'react-hook-form'

const RegisterForm = () => {
    const {register,handleSubmit}=useForm();
    const handleRegistration=(data)=>{
        console.log(data)
    }
  return (
    <form onSubmit={handleSubmit(handleRegistration)}>
      <div>
        <label>Name</label>
        <input name="name" {...register('name' , {required: "NAme"})}  />
      </div>
      <div>
        <label>Email</label>
        <input type="email" name="email" {...register('email' , {required: true})} />
      </div>
      <div>
        <label>Password</label>
        <input type="password" name="password" {...register('password' , {required: true})} />
      </div>
      <button>Submit</button>
    </form>
  )
}

export default RegisterForm
