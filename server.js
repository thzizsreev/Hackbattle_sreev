const http = require('http');
const express = require('express');
const fs = require('fs');

const hostname = '127.0.0.1';
const port = 3000;
const home = fs.readFileSync('index.html')
const about = fs.readFileSync('./about.html')
const firstaid = fs.readFileSync('./firstaid.html')
const ambulance = fs.readFileSync('./ambulance.html')

const server = http.createServer((req, res)=>{
    console.log(req.url);
    url = req.url;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    if(url == '/'){
        res.end(home);
    }
    else if(url == '/about.html'){
        res.end(about);
    }
    else if(url == '/firstaid.html'){
        res.end(firstaid);
    }
    else if(url == '/ambulance.html'){
        res.end(ambulance);
    }
    else{
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
  });
