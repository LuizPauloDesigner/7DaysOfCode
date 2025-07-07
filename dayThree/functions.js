// Inicia o jogo com uma mensagem de boas-vindas
alert("Olá! Bem-vindo(a) ao guia de carreira em programação. Responda as perguntas para traçar seu destino!");

// Pergunta 1: Escolha da área
const area = prompt("Você quer seguir para a área de Front-End ou Back-End? Digite 'Front-End' ou 'Back-End'.");

// Variável para armazenar a linguagem/framework escolhido
let linguagem = ""; 

// Estrutura condicional para os próximos passos baseada na primeira escolha
if (area.toLowerCase() === "front-end") {
    // Pergunta 2 (Caminho Front-End)
    linguagem = prompt("Que legal! Em Front-End, você prefere aprender React ou Vue?");

} else if (area.toLowerCase() === "back-end") {
    // Pergunta 2 (Caminho Back-End)
    linguagem = prompt("Excelente! Em Back-End, você gostaria de aprender C# ou Java?");

} else {
    // Mensagem de erro se a primeira resposta não for válida
    alert("Área inválida! Por favor, recarregue a página e tente novamente.");
}

// Se uma linguagem foi escolhida, o jogo continua
if (linguagem) {
    // Pergunta 3: Especialização ou Fullstack
    const especializacao = prompt(`Você quer seguir se especializando em ${linguagem} (digite 1) ou seguir se desenvolvendo para se tornar Fullstack (digite 2)?`);

    if (especializacao == '1') {
        alert(`Parabéns! Continue se especializando em ${linguagem} para se destacar. É uma ótima tecnologia!`);
    } else if (especializacao == '2') {
        alert(`Excelente escolha! Dominar tanto Front-End quanto Back-End te tornará um(a) profissional Fullstack muito requisitado(a).`);
    } else {
        alert("Opção de especialização inválida!");
    }

    // Pergunta 4: Lista de tecnologias (usando um loop 'while')
    let maisTecnologias = "ok";
    while (maisTecnologias.toLowerCase() === "ok") {
        // A pergunta é feita dentro do loop para se repetir
        const tecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Se sim, digite o nome.");
        
        // Exibe uma mensagem personalizada para a tecnologia inserida
        alert(`${tecnologia} é realmente uma tecnologia muito interessante! Bons estudos.`);
        
        // Pergunta se o usuário quer continuar adicionando tecnologias.
        // A resposta aqui determinará se o loop continua ou não.
        maisTecnologias = prompt("Gostaria de adicionar outra tecnologia? Digite 'ok' para continuar.");
    }
}

// Mensagem final
alert("Jornada de escolhas finalizada! Lembre-se que o aprendizado é contínuo. Boa sorte na sua carreira de sucesso!");