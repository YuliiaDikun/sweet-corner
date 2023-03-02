import React, { useState } from "react";
import register from "../../assets/auth/register.png";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/config";
import Card from "../../components/Card/Card";
import {
  StyledAuth,
  ImgWrapper,
  FormWrapper,
  FormTitle,
  StyledForm,
  Button,
  RegisterWrapper,
  StyledLink,
} from "./AuthPages.styled";
import { Loader } from "../../components";
import { useNavigate } from "react-router";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [sPassword, setSPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  const registerUser = (e) => {
    e.preventDefault();
    if (password !== sPassword) {
      toast.error("Passwords do not match.");
      return;
    }
    setIsLoading(true);
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        toast.success("Registration is successful!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      })
      .finally(() => setIsLoading(false));
    e.currentTarger.reset();
  };

  return (
    <>
      {isLoading && <Loader />}
      <StyledAuth>
        <ImgWrapper>
          <img src={register} alt="register" width="300" />
        </ImgWrapper>
        <Card>
          <FormWrapper>
            <FormTitle>Register your account</FormTitle>
            <StyledForm onSubmit={registerUser}>
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
              <input
                type="password"
                placeholder="Confirm Password"
                required
                value={sPassword}
                onChange={(e) => setSPassword(e.target.value)}
              />
              <Button type="submit">Register</Button>
            </StyledForm>
            <RegisterWrapper>
              <p>Already have an account?</p>
              <StyledLink to="/login">Login</StyledLink>
            </RegisterWrapper>
          </FormWrapper>
        </Card>
      </StyledAuth>
    </>
  );
};

export default Register;
