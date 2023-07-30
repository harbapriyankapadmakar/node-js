const http = require('http');

const server =http.createServer((req,res) => {
    // console.log(req.url,req.method,req.headers);
    const url=req.url;
    if(url==='/home')
    {
            res.setHeader('Content-Type','text/html');
            res.write('<html>');
            res.write('<head><title>my first page</title></head>');
            res.write('<head><h1>Welcome  home</h1></head>');
            res.write('</html>');
            res.end();
    }
     
    else  if(url==='/about')
    {
            res.setHeader('Content-Type','text/html');
        res.write('<html>');
        res.write('<head><title>my first page</title></head>');
        res.write('<head><h1>Welcome to about us page</h1></head>');
        res.write('</html>');
        res.end();
    }
    else if(url==='/node')
    {
        res.setHeader('Content-Type','text/html');
    res.write('<html>');
    res.write('<head><title>my first page</title></head>');
    res.write('<head><h1>Welcome to my node js project</h1></head>');
    res.write('</html>');
    res.end();
    } 
});
server.listen(4000);
