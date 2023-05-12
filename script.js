let resultat = document.getElementById("resultat");

function ajouterChiffre(chiffre) {
  resultat.value += chiffre;
}

function ajouterOperateur(operateur) {
  resultat.value += operateur;
}

function effacer() {
  resultat.value = "";
}

function calculer() {
  try {
    resultat.value = eval(resultat.value);
  } catch (error) {
    alert("Erreur !");
  }
}

function reset() {
    var resultat = document.getElementById("resultat").value;
    document.getElementById("resultat").value = resultat.substring(0, resultat.length - 1);
  }
  
