import React, { useContext } from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { AuthContext } from './Contexts/UseAuth';



const Button = styled.button`
  color: green;
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border: 2px solid green;
  border-radius: 3px;
  max-width:30%;
  

  &:hover {
    background-color: green;
    color:white;
    

  }
`;
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
    const {login } = useContext(AuthContext);
    let navigate = useNavigate();
    const [user , setUser] = useState({
        username:"",
        age:"",
        address:"",
        password:""
      });
      const [userd , setUserd] = useState(
        {username:"",
        age:"",
        address:"",
        password:""})
    
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
        let res1 = await fetch(" http://localhost:3004/users" , {
          method:"POST",
          body:JSON.stringify(user),
          headers:{
            "Content-Type" : "application/json"
          }
        })
        let res2 = await res1.json();
        setUserd(res2);
        prompt("User has been registered");
        navigate("/login")
      }
  return (
    <>
    
    <Box>
    <div>UserForm</div>
    {/* <Box>{user}</Box> */}
    <Input name ="username"  onChange={handleChange} type="text" placeholder='Enter the name' />
    <Input name ="age" onChange={handleChange} type="number" placeholder='Enter the age' />
    <Input name ="address"  onChange={handleChange} type="address" placeholder='Enter the address' />
  
    <Input name='password' onChange={handleChange} type="password" placeholder='Enter password'></Input>
    
    
    
    <Button onClick={handleForm} type='submit'>Submit</Button>
    </Box>
   
  </>
  )
}

export default Register