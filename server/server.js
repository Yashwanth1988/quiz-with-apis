const express = require('express');
const path = require('path');
const app = express()
const port = 3000;
const configs = require('./config');

const apis = configs.configJson.apis;
const maps = configs.configJson.maps;

/* 
    must use let - could be a usecase of clousre 
    this won't work as expected if you use var instead of let/const
*/

for(let api of apis){
    app.get(api, (req, res) => {
        res.sendFile(path.join(__dirname, maps[api]))
    })
}

app.get('/', (req,res) =>  {
         res.sendFile(path.join(__dirname, '../index.html'));
     })

app.get('/dist/*.js', (req,res) =>  {
    res.sendFile(path.join(__dirname, '../dist/bundle.js'));
})

app.get('/dist/*.css', (req,res) =>  {
    res.sendFile(path.join(__dirname, '../dist/styles.css'));
})

app.listen(port, () => console.log(`Example app listening on port ${port}`))