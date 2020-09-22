import express from 'express';
import data from './data'
import figlet from 'figlet';
import chalk from 'chalk';
import {version}  from '../package.json'
const app = express()
app.get("/api/product/:id",(req,res)=>{
    const productId1 = req.params.id;
    const productId = JSON.parse(productId1) //find() as a methode requires not string but JSON object. 
    const product = data.products.find(x => x._id === productId);
    if(product)
        res.send(product);
    else
        res.status(404).send({msg:"PRODUCT NOT FOUND,TRY LATER ."})
});
app.get("/api/products",(req,res)=>{
    res.send(data.products);
});
const port = 3002;
figlet(`E-Pharmachie v${version}`,function(err,data){
    if(err){
        console.log("Something went wrong...");
        console.dir(err);
        return;
    }
    console.log(chalk.red.bold(data) + "\n");
    app.listen(port, () => {
        console.log(
            chalk.green(
                `[${new Date()}] E-Pharmachie v${version} endpoint http://localhost:${port}/api/products.`
      )
    );
})
})
//http://localhost:${port}/api/products