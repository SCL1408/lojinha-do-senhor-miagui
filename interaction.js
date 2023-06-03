let ITENS_LOJA = [
    {
        nome:"Bola da Copa",
        preco:86.30,
        url_img:"./img/bola_copa.webp",
        descricao:"Bola utilizada na Copa do Mundo, idela para utilizar em campo e colecionar"
    },
    {
        nome:"Carrinho da Hot Wheels",
        preco:5.80,
        url_img:"./img/carro_hotwheels.jpeg",
        descricao:"Carrinho para dar de presentes para crianças ou colecionar"
    },
    {
        nome:"Chinelo",
        preco:19.99,
        url_img:"./img/chinelo.webp",
        descricao:"Chinelo para se utilizar em qualquer lugar"
    },
    {
        nome:"Escorredor de Louça",
        preco:15.20,
        url_img:"./img/escorredor_louca.webp",
        descricao:"Utilizando para ajudar no processo de secagem dos utensilios"
    },
    {
        nome:"Espada Medieval",
        preco:200.18,
        url_img:"./img/espada_medieval.png",
        descricao:"Utilizada em batalhar para neutralizar o inimigo ou como item de decoração"
    },
    {
        nome:"Guitarra",
        preco:1980.99,
        url_img:"./img/guitarra.webp",
        descricao:"Otima para utilizar em bandas de hard rock"
    },
    {
        nome:"Toalha de Banho",
        preco:9.99,
        url_img:"./img/toalha_banho.webp",
        descricao:"Boa para se secar apos o banho"
    },
    {
        nome:"Vinho",
        preco:59.90,
        url_img:"./img/vinho.webp",
        descricao:"Vinho que harmoniza muito bem com carnes vermelhas "
    }
]
let novo_item = {
    nome: "",
    preco: "",
    url_img: "",
    descricao: ""
}
novo_item.nome = window.prompt(`Nome:`);
novo_item.preco = Number(window.prompt(`Preço:`));
novo_item.url_img = window.prompt(`Imagem:`);
novo_item.descricao = window.prompt(`Descrição:`);
ITENS_LOJA.push(novo_item);
for (let i=0; i<ITENS_LOJA.length; i++){
    document.getElementById("itens_section").innerHTML += `
    <div class="card-produto">
        <img src="${ITENS_LOJA[i].url_img}" alt="">
        <h2>${ITENS_LOJA[i].nome}</h2>
        <p>Preço: R$${ITENS_LOJA[i].preco}</p>
        <p>
            <strong>Descrição:<br></strong>
            ${ITENS_LOJA[i].descricao}
        </p>
    </div>`;
}