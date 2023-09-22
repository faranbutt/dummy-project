import express from 'express';

const app = express();

console.log("Faran")
console.log(process.env.NAME);


app.get("/",(req,res)=>{
    res.json({"message":"GET REQUEST FULLFILLED"})
})

app.listen(4000,()=>{
    console.log("Server is running on port 3000")
})

export default app;