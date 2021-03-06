function clicou(){
    document.getElementById("agradecimento").innerHTML = "<b>Obrigado por cliclar.</b>";
    alert("Obrigado por clicar.");
}

function redirecionar(){
window.location.href = "https://google.com.br";
}

function trocar(elemento){
    elemento.innerHTML = "Obrigado por passar o mouse.";
}

function voltar(elemento){
    elemento.innerHTML = "Passe o mouse aqui.";
}