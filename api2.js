const express=require('express');
const app=express();

const url = 'https://customer-analytics-34146.my.salesforce-sites.com/services/apexrest/buyStocks';

app.get('/', (req,res)=>{
  try{
    res.send("<h1>API 2</h1>");
  }
  catch(e){
    console.log(error.message);
  }
});

app.post(url,(req,res)=>{
  try{
    res.status(200)({
	"company": "Bajaj Finserv",
	"currentPrice": 6547.95 ,
	"accountNumber": BFHL0018633,
	"githubRepoLink" : " https://github.com/"
	});
  }
  catch(e){
    console.log(error.message);
  }
});
