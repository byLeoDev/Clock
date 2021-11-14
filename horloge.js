var heureDiv = document.querySelector('.heure');
var dateDiv = document.querySelector('.date');

var affichageHeure = function() {
var today ,annee, deuxChiffres, listeJours, listeMois, mois, numeroJour, jour, heures, minutes, secondes;

today = new Date;

annee = today.getFullYear();

listeMois = ["Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octrobre", "Novembre", "Décembre"];

mois = listeMois[today.getMonth()];

listeJours = ["Dimanche","Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi"];

jour = listeJours[today.getDay()]

numeroJour = today.getDate();

deuxChiffres = function(valeur){
  if(valeur < 10){
    return valeur = "0" + valeur;
  }
  else {
    return valeur;
  }
}

heures = deuxChiffres(today.getHours());

minutes = deuxChiffres(today.getMinutes());

secondes = deuxChiffres(today.getSeconds());



heureDiv.textContent = heures + ":" + minutes + ":" + secondes;
dateDiv.textContent = jour + "," + numeroJour + " " + mois + " " + annee;

setTimeout(affichageHeure,1000);


}

affichageHeure();
