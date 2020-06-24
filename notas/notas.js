var select = document.getElementById("select");
var tabela1= document.getElementById("tabela1");
var tabela2= document.getElementById("tabela2");



function aparecer(){
    switch(select.value){
        case "selecionar":
        tabela1.classList.add("escondido");
        tabela2.classList.add("escondido");
        break;
        case "1":
        tabela1.classList.remove("escondido");
        tabela2.classList.add("escondido");
        break;
        case "2":
        tabela2.classList.remove("escondido");
        tabela1.classList.add("escondido");
        break;
    }
    }