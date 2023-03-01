import React from "react";
import login from "../../assets/auth/login.png";
import { FaGoogle } from "react-icons/fa";
import Card from "../../components/Card/Card";
import {
  StyledAuth,
  ImgWrapper,
  FormWrapper,
  FormTitle,
  StyledForm,
  Button,
  StyledSpan,
  RegisterWrapper,
  StyledLink,
} from "./AuthPages.styled";
const Login = () => {
  return (
    <StyledAuth>
      <ImgWrapper>
        <img src={login} alt="login" width="200" />
      </ImgWrapper>
      <Card>
        <FormWrapper>
          <FormTitle>Login</FormTitle>

          <StyledForm>
            <input type="email" placeholder="Email" required />
            <input type="password" placeholder="Password" required />
            <Button type="submit">Login</Button>
          </StyledForm>
          <StyledSpan>-- or --</StyledSpan>
          <Button type="button">
            <FaGoogle /> Login with Google
          </Button>
          <RegisterWrapper>
            <p>Do not have an account?</p>
            <StyledLink to="/register">Register</StyledLink>
          </RegisterWrapper>
        </FormWrapper>
      </Card>
    </StyledAuth>
  );
};

export default Login;
