import React from 'react';
import { useForm } from "react-hook-form";
// import styled from 'styled-components'
import '../css/SignUpForm.css'

function SignUpForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("form")); 
  
    return (

      <form onSubmit={handleSubmit(onSubmit)}>
      <h3>Sign Up</h3>

      <input name="firstName"  placeholder="First-Name" ref={register({ required: true, maxLength: 20 })} />

      <br/>
      <input name="lastName"  placeholder="Last-Name" ref={register({ pattern: /^[A-Za-z]+$/i })} />
      <br/>
      <input
        name="email"
        ref={register({
          required: "Required",
          placeholder: "Email",
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
            message: "invalid email address"
          }
        })}
      />
        <br/>
        <input type="password" name="password" className="password" placeholder="Password" ref={register({ required: true })} />
        
        {errors.email && errors.email.message}
        <br/>
        <input className="submitbtn" type="submit"/>
    
        
        
      </form>
    );
  }

  export default SignUpForm