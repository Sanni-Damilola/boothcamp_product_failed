import React from "react";
import { Link, useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import { accessContest } from "../Global/GlobalContext";

const SignIn = () => {
  const [email, setEmail] = React.useState("");

  const context = React.useContext(accessContest);

  const navigate = useNavigate();
  const signIn = async (e: any) => {
    e.preventDefault();
    await axios
      .post("https://bootcamp-47qt.onrender.com/api/login", { email })
      .then((res) => {
        window.localStorage.setItem("userData", JSON.stringify(res.data.data));
        navigate("/p");
        context?.setData(res.data.data);
      })
      .catch((err) => {
        alert("User Not Found");
      });
  };

  return (
    <Container>
      <Wrapper onSubmit={signIn}>
        <h4>sign in.</h4>
        <Input
          required
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          type={"email"}
          placeholder="sannidamilola@example.com"
        />{" "}
        <br />
        <Button type="submit">Signin</Button>
        <SignUP>
          <p>dont have an account ?</p>{" "}
          <Link style={{ textDecoration: "none" }} to={"/"}>
            <b>Sign Up</b>
          </Link>
        </SignUP>
      </Wrapper>
    </Container>
  );
};

export default SignIn;

const Password = styled.div`
  display: flex;
  border: 4px solid rgb(48, 48, 61);
  justify-content: center;
  align-items: center;
  width: 320px;
  border-radius: 12px;
  justify-content: space-between;

  @media screen and (max-width: 500px) {
    width: 250px;
  }
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 6px;
  color: rgb(209, 209, 210);
`;

const Wrapper = styled.form`
  border: 4px solid rgb(48, 48, 61);
  box-shadow: rgb(48, 48, 61) 0px 3px 8px;
  flex-direction: column;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  padding-bottom: 40px;

  @media screen and (max-width: 500px) {
    box-shadow: none;
    border: 0;
  }
  h4 {
    color: white;
    font-size: 35px;
    text-transform: capitalize;
  }
`;

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: rgb(24, 24, 32);
`;

const Input = styled.input`
  outline: none;
  width: 300px;
  border-radius: 12px;
  background-color: transparent;
  height: 40px;
  padding-left: 20px;
  border: 4px solid rgb(48, 48, 61);
  color: white;

  @media screen and (max-width: 500px) {
    width: 228px;
  }

  ::placeholder {
    font-weight: 400;
    color: rgb(209, 209, 210);
    font-size: 13px;
  }
`;

const SignUP = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  @media screen and (max-width: 500px) {
    flex-wrap: wrap;
    width: 200px;
  }

  p {
    color: rgb(209, 209, 210);
    font-weight: 500;
    margin-right: 6px;
  }
  transition: all 360ms;
  b {
    color: white;
    cursor: pointer;
    :hover {
      color: rgb(209, 209, 210);
    }
  }
`;
const Button = styled.button`
  background-color: #eb72bb;
  border: 0;
  width: 320px;
  border-radius: 12px;
  height: 40px;
  color: white;
  font-weight: 500;
  @media screen and (max-width: 500px) {
    width: 250px;
  }
  font-size: 16px;
  cursor: pointer;
  transition: all 360ms;

  :hover {
    transform: scale(0.9);
  }
`;
