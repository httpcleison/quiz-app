let perguntas = [
    {
        "pergunta": "Gato em inglês é:",
        "respostas": ["Gat", "Gato", "Cat"],
        "correta": "Cat"
    },
    {
        "pergunta": "Bola em inglês é:",
        "respostas": ["Ball", "Boll", "Cow"],
        "correta": "Ball"
    },
    {
        "pergunta": "Vaca em inglês é:",
        "respostas": ["Cow", "Vaqua", "Butter"],
        "correta": "Cow"
    },
    {
        "pergunta": "Maça em inglês é:",
        "respostas": ["Maça", "Apple", "Like"],
        "correta": "Apple"
    },
    {
        "pergunta": "Rato em inglês é:",
        "respostas": ["Popcorn", "Apple", "Mouse"],
        "correta": "Mouse"
    },

]
let pergunta;
let p = document.querySelectorAll("p");
let pontuacao = 0;
let arr_perguntas = [];

function atualizarElementos(){
    document.querySelector(".pergunta h3").innerText = perguntas[pergunta].pergunta;
    document.querySelector(".opcao1").innerText = perguntas[pergunta].respostas[0];
    document.querySelector(".opcao2").innerText = perguntas[pergunta].respostas[1];
    document.querySelector(".opcao3").innerText = perguntas[pergunta].respostas[2];
}

function escolherPergunta(min, max){
    pergunta = Math.floor(Math.random() * (max - min + 1)) + min;
    atualizarElementos();
}

p.forEach((pp)=>{
    pp.addEventListener("click", ()=>{
        if(pp.innerText == perguntas[pergunta].correta){
            pontuacao += 1;
            document.querySelector(".pontos").innerText = "PONTUAÇÃO: "+pontuacao;
            escolherPergunta(0, 4);
        }else{
            escolherPergunta(0, 4);
        }
    })
})

escolherPergunta(0, 4);