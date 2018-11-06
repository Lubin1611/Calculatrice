var chiffre1 = Math.floor(Math.random() * 10) +1;
var chiffre2 = Math.floor(Math.random() * 10) +1;
document.getElementById("aleatoire").innerHTML = chiffre1 + " x "  + chiffre2;
var resultatJoueur = 0;
var resultatOrdi = chiffre1 * chiffre2;
var bonsResultats = 0;
var bonsPoints = 0;

function calc() {

    resultatJoueur = document.getElementById('reponses').value;

    if (resultatJoueur == resultatOrdi) {

        document.getElementById("solution").innerHTML = "Bravo, vous avez trouvé la solution !";
        chiffre1 = Math.floor(Math.random() * 10) + 1;
        chiffre2 = Math.floor(Math.random() * 10) + 1;
        resultatOrdi = chiffre1 * chiffre2;
        bonsResultats ++;
        document.getElementById("bon").innerHTML = "Vous avez " + bonsResultats + " bons resultats";
        document.getElementById("aleatoire").innerHTML = chiffre1 + " x " + chiffre2;

        if (bonsResultats == 5) {
            bonsPoints = bonsPoints + 10;
            document.getElementById("recompense").innerHTML = "Bravo, vous avez " + bonsPoints + " points";
            consol.log(bonsResultats);
        }

    } else {

        if (resultatJoueur > resultatOrdi) {
            document.getElementById("solution").innerHTML = "Le résultat est trop grand, recommencez";
        }

        if (resultatJoueur < resultatOrdi) {
            document.getElementById("solution").innerHTML = "Le résultat est trop petit, recommencez";
        }
    }
}



