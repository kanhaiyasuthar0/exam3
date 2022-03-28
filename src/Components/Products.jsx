import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

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


  return (<div style={{display:"grid" , gridTempelateColumn:"auto auto auto"}}>
   <div>Products</div>
    {products.map((pro)=>{return <>
        <h1>{pro.name}</h1>
        <h3>{pro.category}</h3>
        <h5>{pro.price}</h5>
        <button onClick={()=>handleClick(pro)}>BUY</button>
    </>
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
  
  </div>
  )
}

export default Products