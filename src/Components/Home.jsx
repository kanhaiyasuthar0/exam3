import React, { useContext, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { AuthContext } from './Contexts/UseAuth';

const Home = () => {
    const {isAuth, token } = useContext(AuthContext);
    let {userName} = useParams();
    // console.log(userName);
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
        let res1 = await fetch(`https://masai-api-mocker.herokuapp.com/user/${userName}`,{
            method:"GET",
            headers:{ "Authorization": `Bearer ${token}`}
        } )
        let res2 = await res1.json();
        // const {username , password} = res2;
        setData({...res2})
    //    console.log(userdata)
      }
  return (<>
    <div>Home</div>
    <h1>Hello {userdata.username}</h1>
    <h4>Happy Shopping</h4>
  </>
  )
}

export default Home