"use strict";
// SCRIPT FORMULIER
let emailTxt;
let firstBase;
let secondBase;
let thirdBase;
let homeBase;
let allePakketten;
let pakket;
let tafelTxt;
let tafelNummer;
let datum;
let gekozenDatum;
let vandaagDatum;
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
}

function controleerVoorwaardenAchternaam() {
    if (achternaamTxt.length < 2) {
        document.getElementById("achternaam_error").innerHTML = "Minstens 2 karakters lang!";
        allesCorrectIngevuld = false;

    }
}

function controleerVoorwaardenEmail() {
    let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;

    if (regExp.test(emailTxt) === false) {
        document.getElementById("email_error").innerHTML = "Vul a.u.b. een geldig email-adres in!";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("email_error").innerHTML = "";
    }
}

function controleerVoorwaardenAantalPersonen() {

    if (aantalPersonen > 100) {
        document.getElementById("aantal_error").innerHTML = "Uw groep is te groot."
    }

    if (aantalPersonen < 1) {
        document.getElementById("aantal_error").innerHTML = "Geef een geldig getal in."
    } else {
        document.getElementById("aantal_error").innerHTML = "";
    }
}

function controleerVoorwaardenDatum() {
    let gekozenDatum = new Date(datum);
    let vandaagDatum = new Date();
    console.log(gekozenDatum);
    console.log(vandaagDatum);
    if (gekozenDatum > vandaagDatum) {
        document.getElementById("datum_error").innerHTML = "";

    } else {
        document.getElementById("datum_error").innerHTML = "Vul a.u.b. een geldige datum in!";
        console.log("vul geldig datum in");
        allesCorrectIngevuld = false;
    }
}

function verstuur() {

    emailTxt = document.getElementById("email").value;
    allePakketten = document.getElementsByName("pakket");
    tafelTxt = document.getElementById("tafel");
    tafelNummer = document.getElementById("tafel").value;
    datum = document.getElementById("datum").value;
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

    //controle email ingevuld
    if (emailTxt.length == 0) {
        document.getElementById("email_error").innerHTML = "Vul in a.u.b.";
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenEmail();
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
    // controle pakket 

    for (let i = 0, length = allePakketten.length; i < length; i++) {
        if (allePakketten[i].checked) {

            pakket = allePakketten[i].value;
            document.getElementById("pakket_error").innerHTML = "";
            break;
        } else {
            document.getElementById("pakket_error").innerHTML = "Kies a.u.b. 1";

        }

    }

    if (pakket.length == 0)
        allesCorrectIngevuld = false;

    // keuze tafel nummer 
    if (tafelNummer == 0 || tafelNummer > 10 || tafelNummer < 0) {
        document.getElementById("tafel_error").innerHTML = "Kies een geldig tafelnummer a.u.b.";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("tafel_error").innerHTML = "";
    }

    if (gekozenZone == 0) {
        document.getElementById("zone_error").innerHTML = "Gelieve een optie te kiezen.";
        allesCorrectIngevuld = false
    }


    //datum 

    if (datum.length == 0) {
        document.getElementById("datum_error").innerHTML = "Vul in a.u.b.";
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenDatum();

    }

    if (allesCorrectIngevuld) {
        document.write("Bedankt! Jouw plaats is gereserveed!");
        let link = "mailto:" + encodeURIComponent("info@cvo.be") +
            "?cc=" + encodeURIComponent("kopie@cvo.be") +
            "&subject=" + encodeURIComponent("Mijn reservatie") +
            "&body=" +
            "voornaam:" +
            encodeURIComponent(voornaamTxt) +
            encodeURIComponent("\r\n\n") +
            "achternaam:" +
            encodeURIComponent(achternaamTxt) +
            encodeURIComponent("\r\n\n") +
            "email:" +
            encodeURIComponent(emailTxt) +
            encodeURIComponent("\r\n\n") +
            "aantal:" +
            encodeURIComponent(aantalPersonen) +
            encodeURIComponent("\r\n\n") +
            "pakket:" +
            encodeURIComponent(pakket) +
            encodeURIComponent("\r\n\n") +
            "tafel:" +
            encodeURIComponent(tafelTxt) +
            encodeURIComponent("\r\n\n") +
            "zone:" +
            encodeURIComponent(zone) +
            encodeURIComponent("\r\n\n") +
            "datum:" +
            encodeURIComponent(datum) +
            encodeURIComponent("\r\n\n");
        window.location.href = link;
    }
} //einde verstuur();


//MAILCHIMP 

// SCRIPT SLIDESHOW
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}