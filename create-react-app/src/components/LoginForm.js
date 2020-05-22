import React from 'react';
// import styled from 'styled-components'
import { useForm } from "react-hook-form";

 
// const LoginBtn = styled.button`
// background-color:rgb(94, 111, 211);
// color: white;
// `


function LoginForm() {
    const { register, handleSubmit, watch, errors } = useForm();
    const onSubmit = data => console.log(data);
  
    console.log(watch("form")); 
  
    return (
  <div>

      <form onSubmit={handleSubmit(onSubmit)}>
      

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
        
        {errors.exampleRequired && <span>This field is required</span>}
        <br/>
     

        <input type="submit"/>
          
        

        
      </form>
  </div>
    );
  }

  export default LoginForm