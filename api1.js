const express=require('express');
const app=express();

app.use(express.json());

const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/createAccount';

app.get('/', (req,res)=>{
  try{
    res.send("<h1>Account Creation</h1>");
  }
  catch(e){
    console.log(error.message);
  }
});

app.post(url,(req,res) => {
  try{
    res.status(200).json({
      "name": "Manuj Singla",
      "email": "manuj0860.be21@chitkara.edu.in",
      "rollNumber": 2110990860,
      "phone": 9805025094 
    });
  }
  catch(e){
    console.log(error.message);
  }
});