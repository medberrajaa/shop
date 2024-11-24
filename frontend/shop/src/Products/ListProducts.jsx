import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function ListProducts () {
    const navigate = useNavigate();


    const [products,setProducts] = useState([]);
    async function getProducts(){
        await axios.get("http://localhost:8081/products").then(function(response){
            setProducts(response.data);
        })
    }
    useEffect(()=>{
        getProducts();
    },[]);
    return (
    <div>
        <table border={2}>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Description</th>
                    <th>Price</th>
                    <th>Buy</th>
                </tr>
            </thead>
            <tbody>
                {products.map((product,key)=>(
                    <tr key={key}>
                        <td>{product.name}</td>
                        <td>{product.description}</td>
                        <td>{product.price}</td>
                        <td><button onClick={()=>(navigate('/product/get/'+product._id))}>Buy</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
    </div>
    )
}
