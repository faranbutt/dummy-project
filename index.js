import express from 'express';

const app = express();

console.log("Faran")
console.log(process.env.NAME);


app.listen(4000,()=>{
    console.log("Server is running on port 3000")
})
