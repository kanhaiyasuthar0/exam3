import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { AuthContext } from './Contexts/UseAuth';

const Home = () => {
    const {isAuth } = useContext(AuthContext);
    let navigate = useNavigate();
    const [userdata , setData] = useState({})
    useEffect(()=>{
        if(!isAuth){
            navigate("/login")
        }else{
            handleForm()
        }
    },[])
    const handleForm =  async ()=>{
        let res1 = await fetch(" http://localhost:3004/users" )
        let res2 = await res1.json();
        // const {username , password} = res2;
        setData({...res2})
       console.log(userdata)
      }
  return (<>
    <div>Home</div>
    <h1>Hello {userdata.username}</h1>
    <h4>Your address is : {userdata.address}</h4>
  </>
  )
}

export default Home