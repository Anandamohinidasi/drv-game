const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(__dirname + '/dist/derivco'));

app.get('/*', function(req,res) {
    
res.sendFile(path.join(__dirname+'/dist/derivco/index.html'));
});

app.listen(process.env.PORT || 8080 , function () {
    console.log('Server listening sucessfully at ', process.env.PORT || 8080);
});