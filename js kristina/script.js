"use strict";

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

let allesCorrectIngevuld = true;


function controleerVoorwaardenEmail() {
    let regExp = /^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;

    if (regExp.test(emailTxt) === false) {
        document.getElementById("email_error").innerHTML = "Vul a.u.b. een geldig email-adres in!";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("email_error").innerHTML = "";
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
    allesCorrectIngevuld = true;

    //controle email ingevuld
    if (emailTxt.length == 0) {
        document.getElementById("email_error").innerHTML = "Vul in a.u.b.";
        allesCorrectIngevuld = false;
    } else {
        controleerVoorwaardenEmail();
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

if(pakket.length ==0)
            allesCorrectIngevuld = false;
        
    // keuze tafel nummer 
    if (tafelNummer == 0) {
        document.getElementById("tafel_error").innerHTML = "Kies een tafelnummer a.u.b.";
        allesCorrectIngevuld = false;
    } else {
        document.getElementById("tafel_error").innerHTML = "";
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
            "email:" +
            encodeURIComponent(emailTxt) +
            encodeURIComponent("\r\n\n") +
            "pakket:" +
            encodeURIComponent(pakket) +
            encodeURIComponent("\r\n\n") +
            "tafel:" +
            encodeURIComponent(tafelTxt) +
            encodeURIComponent("\r\n\n") +
            "datum:" +
            encodeURIComponent(datum) +
            encodeURIComponent("\r\n\n");
            window.location.href = link;
    }
} //einde verstuur();