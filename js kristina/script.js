"use strict";
      
        let emailTxt;
        // let firstBase;
        // let secondBase;
        // let thirdBase;
        // let homeBase;
        // let allePakketten;
        let tafelTxt; 
        let tafelNummer;
        
        let allesCorrectIngevuld=true;
        
    
        function controleerVoorwaardenEmail(){
        let regExp=/^[A-Za-z][\.A-Za-z0-9+_-]+@[\.A-Za-z0-9-]+\.[A-Za-z]{2,20}$/;

            if(regExp.test(emailTxt) == false){
                document.getElementById("email_error").innerHTML="Vul a.u.b. een geldig email-adres in!";
                allesCorrectIngevuld = false;
            }
            else{
                document.getElementById("email_error").innerHTML="";
            }   
        }

        

        function verstuur(){

        emailTxt=document.getElementById("email").value;
        // allePakketten=document.getElementByClassName("pakket").checked;
        tafelTxt=document.getElementById("tafel");
        tafelNummer=document.getElementById("tafel").value;

        allesCorrectIngevuld=true;

        //controle email ingevuld
        if(emailTxt.length==0){
            document.getElementById("email_error").innerHTML="Vul in a.u.b.";
            allesCorrectIngevuld = false;
        }
        else{
            controleerVoorwaardenEmail();
        }

        // controle pakket 
        // NOG NA TE ZIEN GEKOZEN PAKKET WORD NIET DEFINED
        // let radio1 = document.getElementById('firstBase').checked;
        // let radio2 = document.getElementById('secondBase').checked;
        // let radio3 = document.getElementById('thirdBase').checked;
        // let radio4 = document.getElementById('homeBase').checked;
        // if((radio1=="") && (radio2=="") && (radio3=="") && (radio4=="")){
        //     document.getElementById("pakket_error").innerHTML="Kies a.u.b. 1";
        //     allesCorrectIngevuld = false;
        // }

        // else{
        //     document.getElementById("pakket_error").innerHTML="";
            
        // }

        // if(allePakketten == 0){
        //     document.getElementById("pakket_error").innerHTML="Kies a.u.b. minstens 1";
        //     allesCorrectIngevuld = false;
        // }
        // else{
        //     document.getElementById("pakket_error").innerHTML="";
            
        // }


        // keuze tafel nummer 
        if(tafelNummer==0){
            document.getElementById("tafel_error").innerHTML="Kies een tafelnummer a.u.b.";
            allesCorrectIngevuld = false;
        }
        else{
            document.getElementById("tafel_error").innerHTML= "";
        }



        if(allesCorrectIngevuld){
            document.write("Bedankt! Jouw plaats is gereserveed!");
            let link = "mailto:" + encodeURIComponent("info@cvo.be")
                + "?cc=" + encodeURIComponent("kopie@cvo.be")
                + "&subject=" + encodeURIComponent("Mijn reservatie")
                + "&body=" 
                + "email:"
                + encodeURIComponent(emailTxt)
                + encodeURIComponent("\r\n\n")
                // + "firstBase"
                // + encodeURIComponent(firstBase)
                // + encodeURIComponent("\r\n\n")
                // + "secondBase"
                // + encodeURIComponent(secondBase)
                // + encodeURIComponent("\r\n\n")
                // + "thirdBase"
                // + encodeURIComponent(thirdBase)
                // + encodeURIComponent("\r\n\n")
                // + "homeBase"
                // + encodeURIComponent(homeBase)
                // + encodeURIComponent("\r\n\n")
                + "tafel";
                + encodeURIComponent(tafelTxt)
                + encodeURIComponent("\r\n\n");
                window.location.href = link;
        }
        }//einde verstuur()