"use strict";
let voornaamTxt;
let achternaamTxt;
let aantalPersonen;
let allesCorrectIngevuld = true;


function controleerVoorwaardenVoornaam() {
    if (voornaamTxt.length < 2) {
        document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters lang!";
        allesCorrectIngevuld = false

    } else {
        document.getElementById("voornaam_error").innerHTML = "";
    }
}

function controleerVoorwaardenAchternaam() {
    if (achternaamTxt.length < 2) {
        document.getElementById("achternaam_error").innerHTML = "Minstens 2 karakters lang!";
        allesCorrectIngevuld = false;

    } else {
        document.getElementById("achternaam_error").innerHTML = "";
    }
}


function verstuur() {
    voornaamTxt = document.getElementById("voornaam").value;
    achternaamTxt = document.getElementById("achternaam").value;
   	aantalPersonen = document.getElementById("aantal").value;

    allesCorrectIngevuld = true;
}

// if (voornaamTxt.length == 0) {
//     document.getElementById("voornaam_error").innerHTML = "Gelieve uw voornaam in te vullen.";
//     allesCorrectIngevuld = false
// } else {
//     controleerVoorwaardenVoornaam()
// }

// if (achternaamTxt.length == 0) {
//     document.getElementById("achternaam_error").innerHTML = "Gelieve uw achternaam in te vullen.";
//     allesCorrectIngevuld = false

// } else {
//     controleerVoorwaardenAchternaam();
// }

// if (aantalPersonen < 1) {
// 	document.getElementById("aantal_error").innerHTML = "Gelieve een cijfer in te vullen.";
// 	allesCorrectIngevuld = false
// }

if (aantalPersonen == 0) {
	document.getElementById("aantal_error").innerHTML = "Gelieve een getal in te voeren";
	allesCorrectIngevuld = false
}

else {
	controleerVoorwaardenAantalPersonen();
}


if (allesCorrectIngevuld) {
    console.log("Naam is correct ingevuld.")
}