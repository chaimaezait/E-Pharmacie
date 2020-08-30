import express from 'express';
import data from './data'
import figlet from 'figlet';
import chalk from 'chalk';
import {version}  from '../package.json'
const app = express()
app.get("/api/products",(req,res)=>{
    res.send(data.products);
});
const port = 5000;
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