import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const Products = () => {
    const [products , setProducts] = useState([]);

    const getproduct= async()=>{
        let res1 = await fetch('http://localhost:3004/products');
        let res2 = await res1.json();
        setProducts([...res2])
        
        console.log(products)
    }

    useEffect(()=>{
        getproduct()
    },[])


  return (<>
  <div>Products</div>
    {/* {products.map((pro)=>{<h1>pro.name</h1>})} */}
    { products.map((prod)=>{<>
   
          <div class="card" style="width: 18rem;">
        <img src="..." class="card-img-top" alt="..."/>
        <div class="card-body">
          <h5 class="card-title">{prod.name}</h5>
          <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">{prod.price}</li>
         
        </ul>
        <div class="card-body">
          
        </div>
      </div>
      </>
    })}
  
  </>
  )
}

export default Products