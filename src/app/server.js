const express = require('express')
const app = express();
const path = require('path');

app.use(express.static('./dist/foro-angular'));
app.get('/*',function(req,res){
    res.sendFile('index.html', {root: 'dist/foro-angular/'}
    );
});

app.listen(process.env.PORT || 8080);