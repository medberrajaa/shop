import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const Panier = () => {
    const [panier, setPanier] = useState([])
    const ids = []
    async function data(){
        for(let i = 0; i<ids.length;i++){
            await axios.get(`http://localhost:8081/products/${localStorage.getItem(localStorage.key(i))}`)
                .then(function(response){
                    setPanier(response.data)
                })
            console.log(panier)
        }
    }
    useEffect(()=>{
        data();
    },[])
    return (
        <div>panier</div>
    )
}
