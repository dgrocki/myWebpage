//server/server.js
var express = require('express');
var router = require('./routes.js')
var path = require('path');
var bodyParser = require('body-parser');
var app = express();
var mongoose = require('mongoose');
const cors = require('cors')
const PORT = process.env.PORT || 4000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client')));
app.use(bodyParser.json({limit: '50mb'}));
app.use(cors());
app.use(bodyParser.urlencoded({limit: '50mb', extended: false}));
mongoose.connect('mongodb://admin:admin@ds149221.mlab.com:49221/umairdb101');
app.use('/', router);

app.listen(PORT, () => {
    console.log("Server is running on Port: " + PORT);
});

if (process.env.NODE_ENV === 'production') { 
  app.enable('trust proxy'); 
  app.use((req, res, next) => { 
    if (req.secure) next();
    else res.redirect(`https://'${req.headers.host}${req.url}`);
  });
}

module.exports=app;


