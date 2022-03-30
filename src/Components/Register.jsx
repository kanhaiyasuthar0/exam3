import React, { useContext, useEffect } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from './Contexts/UseAuth';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import Alert from '@mui/material/Alert';
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
  outline:none;

  &:hover {
    // border:none;
    border-bottom:1px solid blue;
    
  }
`;
const Box = styled.div`
  display:flex;
  flex-direction:column;
 
  margin:auto;
  justify-content:center;   
  align-items:center;
  &:hover {
    

  }
`;
const Select = styled.select`
    min-width:15vw;  
    color: green;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid green;
    border-radius: 3px;


  &:hover {
    

  }
`;

const Register = () => {
    const {login , setProgress } = useContext(AuthContext);
    const [alert , setAlert] = useState(false)
    let navigate = useNavigate();
    
    useEffect(()=>{
      console.log("1212");
        let id =   setTimeout(() => {
         
            setAlert(false)
          }, 3000);
          // return clearTimeout(id)
      
    },[alert])
    const [user , setUser] = useState({
        name:"",
        email:"",
        username:"",
        password:"",
        mobile:"",
        description:""
      });
      const [userd , setUserd] = useState(
        {name:"",
        email:"",
        username:"",
        password:"",
      mobile:"",
      description:""})
    
      const handleChange = (e)=>{
        
        const {name , value } = e.target;
        
        setUser(
          {...user,
          [name] : value
        }
        )
        // console.log(user)
      }
      const handleForm =  async ()=>{
        console.log(user);
        if(user.name==="" || user.username==="" || user.password==="" || user.mobile==="" || user.email==="" || user.description==="" ){
          setAlert(true);
          
         return;
        }
        try {
          setProgress(30)
          // console.log(user);
          let res1 = await fetch("https://masai-api-mocker.herokuapp.com/auth/register" , {
            method:"POST",
            body:JSON.stringify(user),
            headers:{
              "Content-Type" : "application/json"
            }
          })
          let res2 = await res1.json();
          console.log(res2);
          setUserd(res2);
          setProgress(100)
          // prompt("User has been registered");
          navigate("/login")
        } catch (error) {
          console.log(error)
        }
      }
  return (
    <>
   {alert ? <Alert variant="filled" severity="error">
 Please Fill all the details correclty
</Alert> : null} 
    <Box>
    <Box > <AppRegistrationIcon sx={{ color:"green" }}></AppRegistrationIcon> User Registration</Box>
    {/* <Box>{user}</Box> */}

    {/* <Input name ="username"  onChange={handleChange} type="text" placeholder='Enter the name' /> */}
    <TextField name ="name" type="text" onChange={handleChange}  label="Name" variant="standard" />

    <TextField name ="email" type="email" onChange={handleChange}  label="Email" variant="standard" />
    {/* <Input name ="email" onChange={handleChange} type="email" placeholder='Enter the email' /> */}
    
    <TextField name ="username" type="text" onChange={handleChange}  label="username" variant="standard" />
    {/* <Input name ="username"  onChange={handleChange} type="text" placeholder='Enter the username' /> */}
    <TextField name ="mobile" type="text" onChange={handleChange}  label="Mobile No" variant="standard" />
    {/* <Input name ="mobile"  onChange={handleChange} type="text" placeholder='Enter the mobile' /> */}
    <TextField name ="description" type="text" onChange={handleChange}  label="Description" variant="standard" />
    {/* <Input name ="description"  onChange={handleChange} type="text" placeholder='Enter the description' /> */}
    <TextField name ="password" type="password" onChange={handleChange}  label="Password" variant="standard" />
    {/* <Input name='password' onChange={handleChange} type="password" placeholder='Enter password'></Input> */}
    
    
    
    <Button variant="outlined" color="success"  sx={{ margin: '1.5rem' , color:"green" }} onClick={handleForm} type='submit'>Submit <HowToRegIcon></HowToRegIcon> </Button>
    </Box>
   
  </>
  )
}

export default Register