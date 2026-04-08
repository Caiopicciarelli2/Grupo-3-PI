// verificação login 
function cadastro_verificacao(){
    // entrada 
    let nome = (ipt_nome.value);
    let email = (ipt_email.value);
    let telefone = (ipt_telefone.value);
    let senha = (ipt_senha.value);
    let senha_confirmacao = (ipt_senha_confirmacao.value);
    let form = document.querySelector('form');
    let boolean_email = false;
    
    // código do erro:
    erro_status.innerHTML = ``;
    // código de sucesso
    sucesso.innerHTML = ``;

    // elementos HTML
    let senha_erro = document.querySelector('.info-row-description');
    let content_erro = document.querySelector('.container-aviso');
    let content_sucesso = document.querySelector('.container-sucesso')

    if(email.includes("@") && email.includes(".")){
        boolean_email = true;
    }

    // verificação nome mínimo 3
    if(nome == "" || email == "" || telefone == "" || senha == "" || senha_confirmacao == ""){
        content_erro.style.display = 'flex';
        erro_status.innerHTML = `Preencha os campos corretamentes!`;
    }else if(nome.length <= 3){
        content_erro.style.display = 'flex';
        erro_status.innerHTML = `Seu nome deve ter pelo menos 4 caracteres!`;
    }else if(!boolean_email){
        content_erro.style.display = 'flex';
        erro_status.innerHTML = `Seu email deve conter "@" e "."`;
    }else if(telefone.length < 10){
        content_erro.style.display = 'flex';
        erro_status.innerHTML = `Seu email deve ter no mínimo 11 (Onze) dígitos`;
    }else if(senha.length < 5){
        senha_erro.style.display = 'flex';
    }else if(senha != senha_confirmacao){
        content_erro.style.display = 'flex';
        erro_status.innerHTML = `Suas senhas devem coincidir!`;
    }else{
        content_sucesso.style.display = 'flex';
        sucesso.innerHTML = `Seu login foi um sucesso!<br>
                            Estamos te redirecionando.`;
    }
};

// fechar modais de aviso
let content_erro = document.querySelector('.container-aviso');
let content_sucesso = document.querySelector('.container-sucesso')
let btn_fechar_sucesso = document.getElementById('btn_fechar_sucesso');
let btn_fechar_aviso = document.getElementById('btn_fechar_aviso');

btn_fechar_aviso.addEventListener('click', () =>{
    content_erro.style.display = 'none';
})

btn_fechar_sucesso.addEventListener('click', () =>{
    content_sucesso.style.display = 'none';
})
