
function Resgistre() {
    let login = document.getElementById("Login")
    let cadastro = document.getElementById("Cadastro")

    login.style.transform = "translateX(-100vw)";
    cadastro.style.transform = "translateX(0)"; 
}

function EntrarC() {
    let login = document.getElementById("Login")
    let cadastro = document.getElementById("Cadastro")

    login.style.transform = "translateX(0)";
    cadastro.style.transform = "translateX(100vw)";
}

// funçoes dos olhos da senha

function OlharS(idDoInput, idDoLink){
    const input = document.getElementById(idDoInput);
    const confirma = document.getElementById("senhaCC");
    const icone = document.querySelector(`#${idDoLink} i`);

    if (input.type === 'password') {
        input.type = 'text';
        confirma.type = 'text';
        icone.classList.replace('fa-eye-slash', 'fa-eye');
    } else {
        input.type = 'password';
        confirma.type = 'password';
        icone.classList.replace('fa-eye', 'fa-eye-slash');
    }
}