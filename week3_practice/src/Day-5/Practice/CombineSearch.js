import React from 'react'
import { useState, useEffect } from 'react'


function MultiInput() {
const[products,setProducts] = useState([]);
const[error,setError] = useState("");
const[loading,setLoading] = useState(true);
const[search,setSearch] = useState("");

useEffect(()=>{
    const productInfo = async() => {
        try{
            const res = await fetch("https://fakestoreapi.com/products");

            if(!res.ok){
                throw new Error("Unable to fetch the products")
            }
            const data = await res.json();
            setProducts(data);

        }catch(err){
            setError(err.message);
        }finally{
            setLoading(false);
        }
    }

    productInfo();
},[]);

const productfilter = products.filter(product=>(
    product.title.toLowerCase().includes(search.toLowerCase()) ||
    product.category.toLowerCase().includes(search.toLowerCase())
))

  return (
    <div>
        <h4>Task 2: Fetch API with multi value search and filter</h4>
        {loading && <p>Loading.....</p>}
        {error && <p>Error:{error}</p>}
        <br/>
        <input
        type='text'
        value={search}
        onChange={(e)=>setSearch(e.target.value)}
        placeholder='Enter product title or category'
        />
        <br/>
        {productfilter.length===0?(
            <p>No products found</p>
        ):(
        <ul>
            {productfilter.map(product=>(
                <li key={product.id}>
                    <p>{product.title}</p>
                </li>
            ))}
        </ul>)}
        
    </div>
  )
}

export default MultiInput;
