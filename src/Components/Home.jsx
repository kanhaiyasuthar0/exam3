import React, { useContext, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Contexts/UseAuth';

const Home = () => {
    const {isAuth } = useContext(AuthContext);
    let navigate = useNavigate();
    
    useEffect(()=>{
        if(!isAuth){
            navigate("/login")
        }
    },[])
  return (
    <div>Home</div>
  )
}

export default Home