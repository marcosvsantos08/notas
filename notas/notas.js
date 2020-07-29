var select = document.getElementById("select");
// let pos= document.getElementsByName('pos');
var pos0= document.getElementById("pos0");
var pos1= document.getElementById("pos1");
var pos2= document.getElementById("pos2");
var pos3= document.getElementById("pos3");
var pos4= document.getElementById("pos4");
var pos5= document.getElementById("pos5");
var pos6= document.getElementById("pos6");
var pos7= document.getElementById("pos7");
var pos8= document.getElementById("pos8");
var pos9= document.getElementById("pos9");
var pos10= document.getElementById("pos10");
var pos11= document.getElementById("pos11");
var pos12= document.getElementById("pos12");
var pos13= document.getElementById("pos13");
var pos14= document.getElementById("pos14");
var pos15= document.getElementById("pos15");
let turma= document.getElementsByName('nome');
let notaUm= document.getElementsByName("nota1");
let notaDois= document.getElementsByName("nota2");
let notaTres= document.getElementsByName("nota3");
let media= document.getElementsByName('media');
let sit= document.getElementsByName('sit');
let mediaMaior= 0;
let a=0;
 function calcular(){
     for(let i=0;i<turma.length;i++){
        console.log("n1: "+media[i].value+ "n2: "+notaDois[i].value+ "n3: "+notaTres[i].value);
        media[i].value = (parseFloat(notaUm[i].value) + parseFloat(notaDois[i].value) + parseFloat(notaTres[i].value))/3;
        media[i].value=parseFloat(media[i].value).toFixed(1);
        if(media[i].value>=7){
            sit[i].value= "Aprovado";
        }else{
            sit[i].value= "Reprovado";
        }
        // if(media[i].value > mediaMaior){
        //     madiaMaior=madia[i].value;
        //     a=i;
        // }
    }
//     window.alert('A maior media da turma é do: ' +turma[a]+"com a media: "+madiaMaior);
  }
// function aparecer(){
// for(let x=0;x==select.value;x++){
//     pos[x].classList.remove("escondido");
// }
// }


function aparecer(){
    switch(select.value){
        case "selecionar":
        pos0.classList.add("escondido");
        break;
        case "1":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.add("escondido");
            pos3.classList.add("escondido");
            pos4.classList.add("escondido");
            pos5.classList.add("escondido");
            pos6.classList.add("escondido");
            pos7.classList.add("escondido");
            pos8.classList.add("escondido");
            pos9.classList.add("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "2":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.add("escondido");
            pos4.classList.add("escondido");
            pos5.classList.add("escondido");
            pos6.classList.add("escondido");
            pos7.classList.add("escondido");
            pos8.classList.add("escondido");
            pos9.classList.add("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "3":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.add("escondido");
            pos5.classList.add("escondido");
            pos6.classList.add("escondido");
            pos7.classList.add("escondido");
            pos8.classList.add("escondido");
            pos9.classList.add("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "4":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.add("escondido");
            pos6.classList.add("escondido");
            pos7.classList.add("escondido");
            pos8.classList.add("escondido");
            pos9.classList.add("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "5":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.add("escondido");
            pos7.classList.add("escondido");
            pos8.classList.add("escondido");
            pos9.classList.add("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "6":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.add("escondido");
            pos8.classList.add("escondido");
            pos9.classList.add("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "7":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.add("escondido");
            pos9.classList.add("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "8":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.remove("escondido");
            pos9.classList.add("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "9":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.remove("escondido");
            pos9.classList.remove("escondido");
            pos10.classList.add("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "10":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.remove("escondido");
            pos9.classList.remove("escondido");
            pos10.classList.remove("escondido");
            pos11.classList.add("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "11":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.remove("escondido");
            pos9.classList.remove("escondido");
            pos10.classList.remove("escondido");
            pos11.classList.remove("escondido");
            pos12.classList.add("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "12":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.remove("escondido");
            pos9.classList.remove("escondido");
            pos10.classList.remove("escondido");
            pos11.classList.remove("escondido");
            pos12.classList.remove("escondido");
            pos13.classList.add("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "13":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.remove("escondido");
            pos9.classList.remove("escondido");
            pos10.classList.remove("escondido");
            pos11.classList.remove("escondido");
            pos12.classList.remove("escondido");
            pos13.classList.remove("escondido");
            pos14.classList.add("escondido");
            pos15.classList.add("escondido");
        break;
        case "14":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.remove("escondido");
            pos9.classList.remove("escondido");
            pos10.classList.remove("escondido");
            pos11.classList.remove("escondido");
            pos12.classList.remove("escondido");
            pos13.classList.remove("escondido");
            pos14.classList.remove("escondido");
            pos15.classList.add("escondido");
        break;
        case "15":
            pos0.classList.remove("escondido");
            pos1.classList.remove("escondido");
            pos2.classList.remove("escondido");
            pos3.classList.remove("escondido");
            pos4.classList.remove("escondido");
            pos5.classList.remove("escondido");
            pos6.classList.remove("escondido");
            pos7.classList.remove("escondido");
            pos8.classList.remove("escondido");
            pos9.classList.remove("escondido");
            pos10.classList.remove("escondido");
            pos11.classList.remove("escondido");
            pos12.classList.remove("escondido");
            pos13.classList.remove("escondido");
            pos14.classList.remove("escondido");
            pos15.classList.remove("escondido");
        break;
    }
    }