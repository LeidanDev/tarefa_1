let botao = document.querySelector("#botaoEnviar");
let comentario = document.querySelector("#comentario");
let erro = document.querySelector("#mensagemErro")


function enviar () {
    botao.addEventListener('click',()=>{
        let validarConteudo = comentario.value.length;
        if (validarConteudo == ''){
            alert("Valor inválido para ser enviado!")
            comentario.style.borderColor= "red";

        } else {
            comentario.value ='';
            alert('Dados enviados com sucesso!')
        }

    });
}

enviar()