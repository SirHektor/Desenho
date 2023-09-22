let canvas = document.getElementById("canvas");
let contexto = canvas.getContext("2d");
let desenhando = false;
let corAtual = "#000000"; // Cor inicial

canvas.addEventListener("mousedown", function(event){
    desenhando = true;
    contexto.beginPath();
    contexto.moveTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
})

canvas.addEventListener("mousemove", function(event){
    if(desenhando) {
        contexto.strokeStyle = corAtual; // Define a cor do traço
        contexto.lineTo(event.clientX - canvas.offsetLeft, event.clientY - canvas.offsetTop);
        contexto.stroke();
    }
})

canvas.addEventListener("mouseup", function(event){
    desenhando = false;
})

// Atualiza a cor atual quando o usuário seleciona uma nova cor
let colorPicker = document.getElementById("colorPicker");
colorPicker.addEventListener("change", function(event){
    corAtual = event.target.value;
});

// Limpa o canvas quando o botão "Limpar" é clicado
let clearButton = document.getElementById("clearButton");
clearButton.addEventListener("click", function(){
    contexto.clearRect(0, 0, canvas.width, canvas.height);
});