import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
require("dotenv").config()
export const GetProduct = () => {
    const [product,setProduct] = useState([]);
    const {id} = useParams();
    useEffect(()=>{
        axios.get(process.env.PRODUCTSROUTE +"/"+ id).then(function(response){
            setProduct(response.data);            
        });
    },[])
    function handleCart(){
        localStorage.setItem(product.name,id)
    }
    return (
        <>
            <div>{product.name}</div>
            <div><button onClick={handleCart}>Ajouter au panier</button></div>
        </>
    )
}
