import React, { useState } from "react";
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
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import { Loader } from "../../components";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    if (!email.length || !password.length) { 
      toast.error('Select required fields!');
      return;
    }
    setIsLoading(true);
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {        
        const user = userCredential.user;
        toast.success('Welcome!');
        navigate('/')
      })
      .catch((error) => {       
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <>
      {isLoading && <Loader />}
      <StyledAuth>
        <ImgWrapper>
          <img src={login} alt="login" width="200" />
        </ImgWrapper>
        <Card>
          <FormWrapper>
            <FormTitle>Login</FormTitle>

            <StyledForm onSubmit={loginUser}>
              <input
                type="email"
                placeholder="Email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
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
    </>
  );
};

export default Login;
