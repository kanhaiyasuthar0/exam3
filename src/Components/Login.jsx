import React, { useContext, useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AuthContext } from "./Contexts/UseAuth";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import TextField from "@mui/material/TextField";
import SendIcon from "@mui/icons-material/Send";
import Fingerprint from "@mui/icons-material/Fingerprint";
import Button from "@mui/material/Button";
import Alert from "@mui/material/Alert";

// const Button = styled.button`
//   color: green;
//   font-size: 1em;
//   margin: 1em;
//   padding: 0.25em 1em;
//   border: 2px solid green;
//   border-radius: 3px;
//   max-width:30%;

//   &:hover {
//     background-color: green;
//     color:white;

//   }
// `;
const Input = styled.input`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  outline: none;

  &:hover {
    // border:none;
    border-bottom: 1px solid blue;
  }
`;
const Box = styled.div`
  display: flex;
  flex-direction: column;

  margin: auto;
  justify-content: center;
  align-items: center;
  &:hover {
  }
`;
const Select = styled.select`
  min-width: 15vw;
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;

  &:hover {
  }
`;

const Login = ({}) => {
  // const [loading, setLoading] = React.useState(true);
  // const {login , setProgress } = useContext(AuthContext);
  const [alert, setAlert] = useState(false);

  useEffect( () => {
   let id =  setTimeout(() => {
     
      setAlert(false);
    }, 3000);
    return clearTimeout(id)
  }, [alert]);
  // function handleClick() {
  //   setLoading(true);
    
  // }
  const { login, setProgress, setToken } = useContext(AuthContext);
  // console.log(setProgress);
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handlePress = (e)=>{
    console.log(e.code)
    if(e.code==="Enter"){
      handleForm();
    }
    // console.log(e)
  }

  const handleChange = (e) => {
    // if (e.keyCode ==0) {
    //   //  handleForm();
    // }
    console.log(e);
    const { name, value } = e.target;
    // console.log(name,value)
    setUser({ ...user, [name]: value });
    // console.log(user);
  };
  const handleForm = async () => {
    if( user.username==="" || user.password==="" ){
      setAlert(true);
      
      return;
    }
    // console.log(user)
    setProgress(30);
    try {
      let res1 = await fetch(
        "https://masai-api-mocker.herokuapp.com/auth/login",
        {
          method: "POST",
          body: JSON.stringify(user),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      // console.log(res1);

      let res2 = await res1.json();
      // console.log(res2)
      if (!res2.error) {
        login();
        setToken(res2.token)
        setProgress(100);
        navigate(`/user/${user.username}`);
      } else {
        setAlert(true);
        setProgress(100)
      }
    } catch (error) {
      prompt("Please provide the correct details");
    }
    // const {username , password} = res2;

    // if(username == user.username && password== user.password){

    // }else{
    //   prompt("Please provide the correct details")
    // }
  };
  return (
    <>
      {alert ? (
        <Alert variant="filled" severity="error">
          Please Fill all the details correclty
        </Alert>
      ) : null}
      <Box>
        <Box sx={{ margin: "0.5rem", color: "green" }}>
          {" "}
          <VerifiedUserIcon sx={{ color: "green" }}></VerifiedUserIcon> Login
          Form
        </Box>
        <TextField
          name="username"
          type="text"
          onKeyPress={(e)=>handlePress(e)}
          onChange={handleChange}
          // id="standard-basic"
          label="Username"
          variant="standard"
        />
        {/* <Input name ="username"  onChange={handleChange} type="text" placeholder='Enter the username' /> */}

        <TextField
          name="password"
          type="password"
          onKeyPress={(e)=>handlePress(e)}
          onChange={handleChange}
          // id="standard-basic"
          label="Password"
          variant="standard"
        />
        {/* <Input name='password' onChange={handleChange} type="password" placeholder='Enter password'></Input> */}

        <Button
          sx={{ margin: "1.5rem", color: "green" }}
          onClick={handleForm}
          type="submit"
        >
          Login <Fingerprint sx={{ margin: "1rem" }}></Fingerprint>{" "}
        </Button>
      </Box>
    </>
  );
};

export default Login;
