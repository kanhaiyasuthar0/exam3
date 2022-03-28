import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
const ProDiv = styled.div`
    height:300px;
    min-width:400px;
    max-width:500px;
    border:2px solid black;
    border-radius:20px;
    background:url(${({img})=>img});
    background-size: cover
 `
 const Outer = styled.div`
    width:100%;
    display:flex;
    flex-wrap:wrap;
    justify-content:space-evenly;
    div{
        width:100%;
        margin-top:20px;
    }
 `

const Products = () => {
    const [products , setProducts] = useState([]);
    let navigate = useNavigate();
    const getproduct= async()=>{
        let res1 = await fetch('http://localhost:3004/products');
        let res2 = await res1.json();
        let d = [...res2]
        setProducts(d)
        
        console.log(products)
    }

    useEffect(()=>{
        getproduct()
    },[])
    const handleClick = (pro)=>{
        navigate(`/${pro.name}`)
    }


  return (<Outer style={{display:"grid" , gridTempelateColumn:"auto auto auto"}}>
   <div>Products</div>
    {products.map((pro)=>{return <ProDiv img={pro.img}>
    {/* <img style={{width:"300px", maxWidht:"100px", maxHeight:"100px"}} src={pro.img} class="card-img-top" alt="..."/> */}
        <h1>{pro.name}</h1>
        <h3>{pro.category}</h3>
        <h5>{pro.price}</h5>
        <button onClick={()=>handleClick(pro)}>BUY</button>
    </ProDiv>
    })} 
     {/* { products.map((pro)=>{ return */}

          {/* <div class="card" style="width: 18rem;"> */}
              {/* <h1>{pro.name}</h1> */}
        {/* <img src="..." class="card-img-top" alt="..."/> */}
        {/* <div class="card-body">
          <h5 class="card-title">{pro.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{pro.price}</li>
         
        </ul>
        <div class="card-body">
          
        </div>
      </div> */}
     
    {/* })}  */}
  
  </Outer>
  )
}

export default Products