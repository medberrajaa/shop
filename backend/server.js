require("dotenv").config()

const express = require('express');
const cors = require('cors');
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const productsRouter = require('./routes/productRouter');
const app = express();
const PORT = process.env.PORT || 4000;
const mdb = mongoose.connection;
const { logger } = require('./middleware/logEvents');

app.use(logger);
app.use(bodyParser.json());
app.use('/',express.static(path.join(__dirname,'/public')));
app.use('/products',productsRouter);

mongoose.connect(process.env.MONGODB);
mdb.on('error',(error)=>console.error(error));
mdb.once('open',()=>console.log('connected'));

app.get('^/$|/index(.html)?', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'views', 'index.html'));
});

app.listen(PORT,()=>{
    console.log("listen");
});