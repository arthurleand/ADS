function logar(el) {
    var display = document.getElementById(el).style.display;
    var login = document.getElementById('floatingInput').value;
    var senha = document.getElementById('floatingInputSenha').value;

    if(display == "none" && ((login != "aluno" && senha != "aluno") && (login!="prof" && senha != "prof"))) {
        document.getElementById(el).style.display = 'block';
    }else if(login == "aluno" && senha == "aluno"){
        location.href= "../HomeAluno/homeAluno.html";
    }else if(login == "prof" && senha == "prof"){
        location.href= "../HomeProfessor/homeProfessor.html";
    }   
}