function rechner(art){
    
    var elem_ergebnis = document.getElementById("ergebnis");
    var elem_zahl1 = document.getElementById("zahl1"); 
    var elem_zahl2 = document.getElementById("zahl2");


    /*Ersetzt alle Zeichen ausser Ziffern und Kommata*/
    elem_zahl1.value = elem_zahl1.value.replace(/[^0-9,]/gi,"");
    elem_zahl2.value = elem_zahl2.value.replace(/[^0-9,]/gi,"");
    
    
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
    
        addListElement();

    

}

function extround(n_stelle) {
    var zahl = document.getElementById("ergebnis");
    var wert = (Math.round(parseFloat(zahl.innerHTML.replace(",",".")) * n_stelle) / n_stelle);
    zahl.innerHTML = wert.toString().replace(".",",");
    addListElement();           
}

function ce(){
    document.getElementById("zahl1").value = "";
    document.getElementById("zahl2").value = "";
    document.getElementById("ergebnis").style.display = "none";
    removeListElements();
}

function addListElement(){

    var parent_div = document.getElementById("div2");
    var sub_div = document.createElement("div");
    var ergebnis_text = document.createElement("span");
    var ergebnis_value = document.getElementById("ergebnis").innerHTML;
    var node = document.createTextNode(ergebnis_value);
    
    sub_div.classList.add("listenfeld");
    sub_div.addEventListener("click", wertUbernahme());
    parent_div.appendChild(sub_div);
    ergebnis_text.appendChild(node);
    sub_div.appendChild(ergebnis_text);
}


function removeListElements(){
    var parent_div = document.getElementById("div2");
    while (parent_div.firstChild) {
        parent_div.removeChild(parent_div.firstChild);
    }
}

function wertUbernahme(){
    var elem_zahl1 = document.getElementById("zahl1"); 
    var ergebnis_value = document.getElementById("ergebnis").innerHTML;
    elem_zahl1 = parseFloat(ergebnis_value);
    
}