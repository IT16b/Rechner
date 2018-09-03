function plus(){

    var elem_ergebnis = document.getElementById("ergebnis");
    var elem_zahl1 = document.getElementById("zahl1"); 
    var elem_zahl2 = document.getElementById("zahl2");
    
    if(elem_zahl2.value == "" || elem_zahl1.value == ""){
        elem_ergebnis.style.display = "none";
        return;
    }

    var ergebnis = parseFloat(elem_zahl1.value.replace(",",".")) + parseFloat(elem_zahl2.value.replace(",","."))
    elem_ergebnis.innerHTML = ergebnis.toString().replace(".",",");
    elem_ergebnis.style.display = "block";

}

function minus(){

    var elem_ergebnis = document.getElementById("ergebnis");
    var elem_zahl1 = document.getElementById("zahl1"); 
    var elem_zahl2 = document.getElementById("zahl2");

    if(elem_zahl2.value == "" || elem_zahl1.value == ""){
        elem_ergebnis.style.display = "none";
        return;
    }

    var ergebnis = parseFloat(elem_zahl1.value.replace(",",".")) - parseFloat(elem_zahl2.value.replace(",","."))
    elem_ergebnis.innerHTML = ergebnis.toString().replace(".",",");
    elem_ergebnis.style.display = "block";

}