import React from "react";
import login from "../../assets/auth/login.png";
import { Auth, ImgWrapper, FormWrapper, FormTitle, StyledForm, Button } from "./Auth.styled";
const Login = () => {
  return (
    <Auth>
      <ImgWrapper>
        <img src={login} alt="login" width="600"/>
      </ImgWrapper>
      <FormWrapper>
        <FormTitle>Login</FormTitle>
        <StyledForm>
          <input type="email" placeholder="Email" required />
          <input type="password" placeholder="Password" required />
        <Button type="submit">Login</Button>
        </StyledForm>
      </FormWrapper>
    </Auth>
  );
};

export default Login;
