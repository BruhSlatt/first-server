const http = require('http');

const server = http.createServer(function(request, response){
    response.writeHead(200, {"content-type":"text/html"});
    response.write("<!DOCTYPE html>");
    response.write("<html>");
    response.write("<head>");
    response.write("<title>First Server</title>");
    response.write("</head>");
    response.write("<body>");
    response.write("HELLLO VERRO!!!");
    response.write("</body>");
    response.write("</html>");
    response.end();
});


server.listen(3000);
console.log("I see you've made it this far, cangratzzz")