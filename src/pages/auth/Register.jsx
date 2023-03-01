import React from 'react';
import register from '../../assets/auth/register.png';

import Card from "../../components/Card/Card";
import {
  Auth,
  ImgWrapper,
  FormWrapper,
  FormTitle,
  StyledForm,
  Button, 
  RegisterWrapper,
  StyledLink,
} from "./Auth.styled";
const Register = () => {
  return (
   <Auth>
      <ImgWrapper>
        <img src={register} alt="register" width="200" />
      </ImgWrapper>
      <Card>
        <FormWrapper>
          <FormTitle>Register your account</FormTitle>
          <StyledForm>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <input type="password" placeholder="Confirm Password" required />
            <Button type="submit">Register</Button>
          </StyledForm>          
          <RegisterWrapper>
            <p>Already have an account?</p>
            <StyledLink to="/login">Login</StyledLink>
          </RegisterWrapper>
        </FormWrapper>
      </Card>
    </Auth>
  )
}

export default Register
