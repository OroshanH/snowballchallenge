var pTekst = document.getElementById("pTekst");
var bildeMann = document.getElementById("bildeMann");
var dotEn = document.getElementById("dot");
var dotTo = document.getElementById("dot2");
var dotTre = document.getElementById("dot3");

var tekstEn = "Grayson Walker <br><br> 72 years old <br><br> War veteran <br><br> Homeless <br><br> After i was done serving my country, no one was here to serve me."
var tekstTo = "Addison Pae <br><br> 32 years old <br><br> Immigrant <br><br> Unemployed <br><br> I was a teacher before i had to flee my country, now i am nothing."
var tekstTre = "Wilson Rig <br><br> 22 years old <br><br> Ex-Drugaddict <br><br> Unemployed <br><br> I have made bad choices in life, but i am trying to do better."
var tekster = [tekstEn,tekstTo,tekstTre]
var bilder = ["./bilder/man1.PNG","./bilder/man2.PNG","./bilder/man3.PNG"];
var indeks = 0;
arrow2.onclick = function (){
    
    indeks= indeks+1;
    
    if(indeks == 3){
        indeks = 0;
    } 
    
    pTekst.innerHTML = tekster[indeks];
    bildeMann.src=bilder[indeks];

}
arrow.onclick=function(){

    indeks= indeks-1;
    
    if(indeks == -1){
        indeks = 2;
    } 
    
    pTekst.innerHTML = tekster[indeks];
    bildeMann.src=bilder[indeks];

}

