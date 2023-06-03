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
//objeto utilizado para adicionar novos produtos ao catálogo
let novo_item = {
    nome: "",
    preco: "",
    url_img: "",
    descricao: ""
}
const button_add_open = document.getElementById("button-add-open");//recebe o botão de abertura do modal de cadastro
const button_add_close = document.getElementById("button-add-close");//recebe o botão de fechamento do modal de cadastro
const modal_add = document.getElementById("dialog-add");//recebe o modal de cadastro
const button_add_submit = document.getElementById("button-add-submit");
button_add_submit.addEventListener("click", cadastrar);

//exibe produtos na tela
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

//abre o mdal de cadatro
button_add_open.onclick = function() {
    modal_add.showModal();
}
//fecha o modal de cadastro
button_add_close.onclick = function() {
    modal_add.close();
}

function cadastrar () {
    novo_item.nome = document.getElementById("id-nome");
    novo_item.preco = document.getElementById("id-preco");
    novo_item.descricao = document.getElementById("id-descricao");
    // novo_item.url_img = document.getElementById("id-foto");
    ITENS_LOJA.push(novo_item);
    setTimeout(modal_add.close, 20000);
    // modal_add.close();
    // document.getElementById("itens_section").innerHTML += `
    // <div class="card-produto">
    //     <img src="${novo_item.url_img}" alt="">
    //     <h2>${novo_item.nome}</h2>
    //     <p>Preço: R$${novo_item.preco}</p>
    //     <p>
    //         <strong>Descrição:<br></strong>
    //         ${novo_item.descricao}
    //     </p>
    // </div>`;
}
