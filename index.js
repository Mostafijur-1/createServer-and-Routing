const http = require('http');
const fs = require('fs');
const server = http.createServer((req, res) => {

    const routeHandler =(pathL, statusCode)=> {
        fs.readFile(pathL, (err,data)=> {
            if (err) console.log(err);
            else{
            res.writeHead(statusCode, {'Content-Type': 'text/html'});
            res.write(data);
            res.end();
            }
            
 
        });
    };
  
  
    if (req.url=== "/"){routeHandler("./home.html",200);} 

    else if (req.url=== "/about"){routeHandler("./about.html",200);} 
    else if (req.url=== "/contact"){ routeHandler("./contact.html",200);}
    else{ routeHandler("./error.html",404);}

});


server.listen(8080);

console.log('Server running at http://localhost:8080/');