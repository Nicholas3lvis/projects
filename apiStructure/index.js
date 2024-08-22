import express from "express";
import bodyParser from "body-parser";
import axios from "axios";

const myServer = express()
const portused = 5400
const API_URL = ' https://secrets-api.appbrewery.com'
const bearerToken = "8dc2498a-58fb-450a-ae7a-bf79ce367392";

const config = {
    headers: { Authorization : `Bearer ${bearerToken}`},
}

myServer.use(express.static('public'))
myServer.use(bodyParser.urlencoded({extended:true}))

myServer.get('/',(req,res)=>{
    res.render('index.ejs', { content : " Waiting for data ..."});
})

myServer.post('/get-secret',async(req,res)=>{
    const searchID = req.body.id;
    try{
        const result = await axios.get(API_URL + "/secrets/"+searchID, config)
        res.render('index.ejs', { content : JSON.stringify(result.data)});
    }catch(error){
        res.render('index.ejs',{ content : JSON.stringify(error.response.data)});
    }
})

myServer.post('/post-secret', async (req,res)=>{
    try{
        const result = await axios.post(API_URL + '/secrets/',req.body,config);
        res.render('index.ejs', { content : JSON.stringify(result.data)});
    }catch(error){
        res.render('index.ejs', { content : JSON.stringify(error.response.data)}); 
    }
});

myServer.post('/put-secret',async (req,res)=>{
    const searchID = req.body.id;
    try{
        const result = await axios.put(
            API_URL+'/secrets/'+searchID,
            req.body,
            config
        );
        res.render('index.ejs', { content : JSON.stringify(result.data)});
    }catch(error){
        res.render('index.ejs', { content : JSON.stringify(error.response.data)})
    }
});

myServer.post('/patch-secret',async (req,res)=>{
    const searchID = req.body.id;
    try{
        const result = await axios.patch(
            API_URL+'/secrets/'+searchID,
            req.body,
            config
        );
        res.render('index.ejs', { content : JSON.stringify(result.data)});
    }catch(error){
        res.render('index.ejs', { content : JSON.stringify(error.response.data)})
    }
});

myServer.post('/delete-secret',async (req,res)=>{
    const searchID = req.body.id;
    try{
        const result = await axios.delete(API_URL+"/secrets/"+searchID,config)
        res.render('index.ejs', { content : JSON.stringify(result.data)});
    }catch(error){
        res.render('index.ejs',{ content : JSON.stringify(error.response.data)});
    }
})
myServer.listen(portused,()=>{
    console.log(`The server is currently running at port ${portused}`)
})