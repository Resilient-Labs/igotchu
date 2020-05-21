import React from "react";
import LoginForm from './components/LoginForm';
import styled from 'styled-components';

const Title = styled.h1`
 font-size: 50px;
` 
const Container = styled.div `
    margin-top: 6%;
`

function LoginPage() {
   
   return(
    <Container className="login">
        <div className= "container">
            <Title>log-in</Title>
            <LoginForm/>
        </div>
    </Container>
    );
}

export default LoginPage