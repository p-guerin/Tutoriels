var express = require("express");
var app = express();
var router = express.Router();
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

app.listen(serveur_port);
console.log("Serveur lancé à l'adresse http://localhost:" + serveur_port);