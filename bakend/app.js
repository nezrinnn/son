const express =require('express');
const app = express();
const fs=require('fs')
const employees=fs.readFileSync('./data.json');
const users =JSON.parse(employees)
console.log('users')
app.get('/', (req,res)=>{
res.send('Hello');
})
app.get('/transaction',(req,res)=>{
res.send('you');
})
app.get('/user',(req,res)=>{
    res.send(users)
})

app.listen(3000, function() {
console.log('example');
});
