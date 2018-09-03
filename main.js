function rechner(art){
    
    var elem_ergebnis = document.getElementById("ergebnis");
    var elem_zahl1 = document.getElementById("zahl1"); 
    var elem_zahl2 = document.getElementById("zahl2");

    if(elem_zahl2.value == "" || elem_zahl1.value == ""){
        elem_ergebnis.style.display = "none";
        return;
    }

    switch(art){
        case 'plus':
            var ergebnis = parseFloat(elem_zahl1.value.replace(",",".")) + parseFloat(elem_zahl2.value.replace(",","."));
        break;
        
        case 'minus':
            var ergebnis = parseFloat(elem_zahl1.value.replace(",",".")) - parseFloat(elem_zahl2.value.replace(",","."));
        break;

        case 'geteilt':
            var ergebnis = parseFloat(elem_zahl1.value.replace(",",".")) / parseFloat(elem_zahl2.value.replace(",","."));
        break;

        case 'mal':
            var ergebnis = parseFloat(elem_zahl1.value.replace(",",".")) * parseFloat(elem_zahl2.value.replace(",","."));
        break;

    }
    
    elem_ergebnis.innerHTML = ergebnis.toString().replace(".",",");
    elem_ergebnis.style.display = "block";

}