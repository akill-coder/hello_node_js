var http = require('http');
var file = require('fs');


http.createServer(
    function (req,res){

        file.readFile('./hello_node_js.html', function (err, data){

            res.writeHead(200, {'Content-Type': 'text/html'});
            res.write(data);
            return res.end();

        })
       
    }
).listen(8080);