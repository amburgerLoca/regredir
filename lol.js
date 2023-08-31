tempo = 1000;
const idade = 18;
age = 18;
age = age + 1;
var timer = setInterval(chamar,tempo);

//document.getElement só é chamado com tempo
function chamar(){
document.getElementById("mostrar").innerHTML = idade;
document.getElementById("exibir").innerHTML = age;
}