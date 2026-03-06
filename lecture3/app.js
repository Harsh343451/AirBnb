const http = require('http');
// function requestListner(req,res){
//     console.log(req);
// }
//  http.createServer(requestListner);

const server=http.createServer(function (req,res){
    console.log(req);
});
const port=3000;
server.listen(port,() =>{
    console.log(http.Server.name + " is listening on port " + port);
});
