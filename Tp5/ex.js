function convertir(){
    taux_change = parseFloat(document.getElementById("taux_change").value);
    montant = parseFloat(document.getElementById("montant").value);
    resultat = montant * taux_change;
    document.getElementById("resultat").innerText ='Le montant en dirhams est : ' + resultat.toFixed(2) + ' dirhams';
}