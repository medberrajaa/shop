import axios from 'axios'
import React, { useEffect, useState } from 'react'
require("dotenv").config()

export const Panier = () => {
    const [panier, setPanier] = useState([])
    const ids = []
    async function data(){
        for(let i = 0; i<ids.length;i++){
            await axios.get(`${process.env.PRODUCTSROUTE}/${localStorage.getItem(localStorage.key(i))}`)
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
