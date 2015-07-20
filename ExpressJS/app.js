var express = require("express");
var app = express();
var router = express.Router();
var fs = require('fs');
var mongoose = require('mongoose');
var serveur_port = process.env.PORT || 3000;

app.set('view engine', 'ejs');

router.get('/', function(req, res){
  res.render('pages/index');
});

router.get('/test', function(req, res){
  res.render('pages/test');
});

app.use('/', router);
app.use('/test', router);
app.use(express.static(__dirname + '/app/public'));

var kids_db = mongoose.connect('mongodb://localhost:27017/kidscoding');
mongoose.connection.on("error", function(){
  console.log("Erreur de connection à la base de données.")
});
mongoose.connection.on("open", function(){
  console.log("Connection réussie à la base de données.")
});

fs.readdirSync(__dirname + '/app/models').forEach(function (file) {
  if (~file.indexOf('.js')) require(__dirname + '/app/models/' + file);
});

app.listen(serveur_port);
console.log("Serveur lancé à l'adresse http://localhost:" + serveur_port);
