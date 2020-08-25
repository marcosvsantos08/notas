var select = document.getElementById("select");
let pos= document.getElementsByName('pos');
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
            sit[i].style.background='green'
        }else{
            sit[i].value= "Reprovado";
            sit[i].style.background='red'
        }
        if(media[i].value > mediaMaior){
            mediaMaior=media[i].value;
            a=i;
        }
    }
     window.alert('A maior media da turma é do: ' +turma[a].value+" com a media: "+mediaMaior);
  }
function aparecer(){
for(let x=0;x<select.value;x++){
    pos[x].classList.remove("escondido");
    
}
for(let y=14;y>=select.value;y--){
    pos[y].classList.add("escondido");
}
}


