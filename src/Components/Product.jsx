import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
const InnerDiv = styled.div`
    height:300px;
    min-width:400px;
    max-width:500px;
    border:2px solid black;
    border-radius:20px;
    background:url(${({img})=>img});
    background-size: 100% 100%;

 `

const Product = () => {
    const [data , setData] = useState({})
    let { val } = useParams();
    // console.log(slug)
    const getdata= async (val)=>{
        let res1 = await fetch(`http://localhost:3004/products`);
        let res2 = await res1.json();
       let ans = res2.filter(item=> item.name===val);
       setData(...ans)
        console.log(...ans)
    }
    useEffect(()=>{
        getdata(val)
    },[])
    const handleCart = (data)=>{
        console.log(data)
    }
  return (
      <InnerDiv img={data.img} >
    <h1>{data.name}</h1>
    <h3>{data.category}</h3>
    <h3>{data.price}</h3>
    <button onClick={handleCart(data)}>BUY</button>
      </InnerDiv>
  )
}

export default Product