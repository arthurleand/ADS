function logar(){
    if(login == 'aluno' && senha == 'aluno'){
        alert('sucecesso');
    }else{
        alert('usuario ou senha incorrecto');
    }
}

function Mudarestado(el) {
    var display = document.getElementById(el).style.display;
    var login = document.getElementById('floatingInput').value;
    var senha = document.getElementById('floatingInputSenha').value;

    if(display == "none" && login != "aluno" && senha != "aluno") {
        document.getElementById(el).style.display = 'block';
    }else if(login == "aluno" && senha == "aluno"){
        alert("Sucesso");
        location.href= "../HomeAluno/homeAluno.html";
    }   
}