require('dotenv').config();
const express = require("express");
const route = express.Router();
const Product = require('../models/products');

route.get('/',async(req,res)=>{
    try {
        const products = await Product.find();
        res.status(200).json(products)
    } catch (error) {
        
        res.status(500).send({ message : error.message });
    }
});

route.get('/:id',async(req,res)=>{
    const id = req.params.id
    try {
        const products = await Product.findOne({_id:id});
        if(products.length === 0) res.status(404).json({message : "product not found"});
        res.status(200).json(products);
    } catch (error) {
        res.status(500).send({ message : "DOESNT EXIST" });
    }
});

route.post('/',async(req,res)=>{
    const products = await Product.find({
        name:req.body.name,
    });
    if(products.length == 0){
        const newProduct = new Product(req.body);
        try {
            await newProduct.save();
            res.status(201).send({ message: "product created" });
        } catch (error) {
            res.status(500).send({ message : error });
        }
    }else{
        res.status(500).send({ message : "already exists" });
    }
});

route.put('/:id',async(req,res)=>{
    const id = req.params.id;
    const product = await Product.findOne({ __id : id});
    try{
        if(product.length === 0){
            res.status(404).send({ message : "not found" });
        }else{
            const result = await Product.updateOne({ __id : id,$set : req.body });
            if(result.modifiedCount === 1){
                res.status(200).send({ message : "modification successfull" });
            }else{
                res.send({ message : "not modified" });
            }
        }
    }catch(e){
        res.status(500).send({ message : e.message});
    }
});

route.delete('/:id',async(req,res)=>{
    const id = req.params.id;
    try {
        const result = await Product.deleteOne({ _id: id });
        if (result.deletedCount === 1) {
            res.status(200).send({ message: 'Data deleted successfully' });
        } else {
            res.status(404).send({ message: 'Data not found' });
        }
    } catch (error) {
        res.status(500).send({ message : error.message });
    }
});

module.exports = route;