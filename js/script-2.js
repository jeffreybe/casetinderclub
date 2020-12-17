"use strict";
let voornaamTxt;
let achternaamTxt;
let aantalPersonen;
let zone;
let gekozenZone;


let allesCorrectIngevuld = true;


function controleerVoorwaardenVoornaam() {
    if (voornaamTxt.length < 2) {
        document.getElementById("voornaam_error").innerHTML = "Minstens 2 karakters lang!";
        allesCorrectIngevuld = false

    }

    if (voornaamTxt.search(/[^0-9]+/) == -1) { document.getElementById("voornaam_error").innerHTML = "Geen geldige naam"; } else {
        document.getElementById("voornaam_error").innerHTML = "";
    }
}

function controleerVoorwaardenAchternaam() {
    if (achternaamTxt.length < 2) {
        document.getElementById("achternaam_error").innerHTML = "Minstens 2 karakters lang!";
        allesCorrectIngevuld = false;

    }
    if (achternaamTxt.search(/[^0-9]+/) == -1) { document.getElementById("achternaam_error").innerHTML = "Geen geldige naam" } else {
        document.getElementById("achternaam_error").innerHTML = "";
    }
}


function controleerVoorwaardenAantalPersonen() {

    if (aantalPersonen > 100) {
        document.getElementById("aantal_error").innerHTML = "Uw groep is te groot."
    } else {
        document.getElementById("aantal_error").innerHTML = "";
    }
}

function verstuur() {
    voornaamTxt = document.getElementById("voornaam").value;
    achternaamTxt = document.getElementById("achternaam").value;
    aantalPersonen = document.getElementById("aantal").value;
    zone = document.getElementById("zone").value;
    gekozenZone = document.getElementById("zone").selectedIndex;

    allesCorrectIngevuld = true;


    if (voornaamTxt.length == 0) {
        document.getElementById("voornaam_error").innerHTML = "Gelieve uw voornaam in te vullen.";
        allesCorrectIngevuld = false
    } else {
        controleerVoorwaardenVoornaam()
    }

    if (achternaamTxt.length == 0) {
        document.getElementById("achternaam_error").innerHTML = "Gelieve uw achternaam in te vullen.";
        allesCorrectIngevuld = false

    } else {
        controleerVoorwaardenAchternaam();
    }

    if (aantalPersonen < 1) {
        document.getElementById("aantal_error").innerHTML = "Gelieve een cijfer in te vullen.";
        allesCorrectIngevuld = false
    }

    if (aantalPersonen == 0) {
        document.getElementById("aantal_error").innerHTML = "Gelieve een getal in te voeren";
        allesCorrectIngevuld = false
    } else {
        controleerVoorwaardenAantalPersonen();
    }

    if (gekozenZone == 0) {
        document.getElementById("zone_error").innerHTML = "Gelieve een optie te kiezen.";
        allesCorrectIngevuld = false
    }

    if (allesCorrectIngevuld) {
        document.write("Alles is correct ingevuld.");
        let link = "mailto:" + encodeURIComponent("jeffreyyu95@gmail.com") +
            "?cc=" + encodeURIComponent("kopie@cvo.be") +
            "&subject=" + encodeURIComponent("Formulier validatie") +
            "&body=" +
            "voornaam:" +
            encodeURIComponent(voornaamTxt) +
            encodeURIComponent("\r\n\n") +
            "achternaam:" +
            encodeURIComponent(achternaamTxt) +
            encodeURIComponent("\r\n\n") +
            "aantal:" +
            encodeURIComponent(aantalPersonen) +
            encodeURIComponent("\r\n\n") +
            "zone:" +
            encodeURIComponent(zone) +
            encodeURIComponent("\r\n\n") +
            encodeURIComponent(emailTxt) +
            encodeURIComponent("\r\n\n");
        window.location.href = link;
    }

}