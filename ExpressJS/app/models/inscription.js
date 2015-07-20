var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// schema
var inscriptionSchema = new Schema({
  nom_enfant: { type: String, required: true },
  prenom_enfant: { type: String, required: true },
  age_enfant: { type: String, required: true },
  nom_responsable: { type: String, required: true },
  prenom_responsable: { type: String, required: true },
  email_responsable: { type: String, required: true },
  telephone_responsable: { type: String, required: true },
});

// create a model using schema
var Inscription = mongoose.model('Inscription', inscriptionSchema);
module.exports = Inscription;

var test = new Inscription({
  nom_enfant : "Nomtest4",
  prenom_enfant : "Prenomtest4",
  age_enfant : "9",
  nom_responsable : "NomtestResponsable1",
  prenom_responsable : "PrenomtestResponsable1",
  email_responsable : "test1@email.fr",
  telephone_responsable : "0601020305"
});

test.save(function(){
  Inscription.find(function(err, inscrits) {
    if (err) return console.error(err);
    console.log(inscrits);
  });
});

