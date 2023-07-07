
const express = require('express');
const app = express();
var path=require('path');
const port = 3000

var bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true })); 
 app.use(bodyParser.json()); 

 app.use(express.static('resources'));
 app.get("/", (req, res) => {
     res.sendFile(path.join(__dirname, 'resources/etr.html'))
    });


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
