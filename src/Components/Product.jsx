import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

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
      <>
    <h1>{data.name}</h1>
    <h3>{data.category}</h3>
    <h3>{data.price}</h3>
    <button onClick={handleCart(data)}>BUY</button>
      </>
  )
}

export default Product