
//Pratos 
let prato; 
let valorPrato;

function selecionarPrato1() { 
    document.getElementById("contra-file").style.borderColor= "#32B72F"; 
    document.getElementById("salmao").style.borderColor= "white"; 
    document.getElementById("risoto").style.borderColor= "white";
    return prato= "Contra-Filé", valorPrato= Number(85.00);
} 

function selecionarPrato2() { 
    document.getElementById("salmao").style.borderColor= "#32B72F"; 
    document.getElementById("contra-file").style.borderColor= "white"; 
    document.getElementById("risoto").style.borderColor= "white";
    return prato= "Salmão",valorPrato= Number(109.00);
} 

function selecionarPrato3() { 
    document.getElementById("risoto").style.borderColor= "#32B72F"; 
    document.getElementById("salmao").style.borderColor= "white"; 
    document.getElementById("contra-file").style.borderColor= "white";
    return prato= "Risoto",valorPrato= Number(68.00);
}  

//PRATOS 


//BEBIDAS 
let bebida; 
let valorBebida;

function selecionarBebida1() { 
    document.getElementById("agua").style.borderColor= "#32B72F"; 
    document.getElementById("suco").style.borderColor= "white"; 
    document.getElementById("refri").style.borderColor= "white";
    bebida= "Água",valorBebida= Number(3.00);
} 

function selecionarBebida2() { 
    document.getElementById("suco").style.borderColor= "#32B72F"; 
    document.getElementById("agua").style.borderColor= "white"; 
    document.getElementById("refri").style.borderColor= "white";
    bebida= "Suco",valorBebida= Number(5.00);
} 

function selecionarBebida3() { 
    document.getElementById("refri").style.borderColor= "#32B72F"; 
    document.getElementById("suco").style.borderColor= "white"; 
    document.getElementById("agua").style.borderColor= "white";
    bebida= "Refrigerante",valorBebida= Number(4.00);
} 
//BEBIDAS


//SOBREMESA  
let valorSobremesa;
let sobremesa;

function selecionarSobremesa1() { 
    document.getElementById("ninho").style.borderColor= "#32B72F"; 
    document.getElementById("profiterolis").style.borderColor= "white"; 
    document.getElementById("torta").style.borderColor= "white";
    sobremesa= "Mousse de Ninho",valorSobremesa= Number(12.99);
} 

function selecionarSobremesa2() { 
    document.getElementById("profiterolis").style.borderColor= "#32B72F"; 
    document.getElementById("ninho").style.borderColor= "white"; 
    document.getElementById("torta").style.borderColor= "white";
    sobremesa= "Profiterólis",valorSobremesa= Number(9.99);;
} 

function selecionarSobremesa3() { 
    document.getElementById("torta").style.borderColor= "#32B72F"; 
    document.getElementById("profiterolis").style.borderColor= "white"; 
    document.getElementById("ninho").style.borderColor= "white";
    sobremesa= "Torta Alemã",valorSobremesa= Number(12.49);
} 
//SOBREMESA

function fecharPedido() { 
    if(prato !== null) {  
        const mensagem= document.querySelector(".rodape > button"); 
        mensagem.innerHTML= `Fechar Pedido`; 
        document.getElementById("pedido").style.backgroundColor= "rgba(50, 183, 47, 1)";
    } else { 
        alert("Selecione o(s) campos faltantes");
    }
} 

let soma=0;

function valorFinal() { 
    document.querySelector(".caixa-pedido").classList.remove("escondido"); 
    document.querySelector(".prato-preco > h3").innerHTML= prato; 
    document.querySelector(".bebida-preco > h3").innerHTML= bebida; 
    document.querySelector(".sobremesa-preco > h3").innerHTML= sobremesa; 
    document.querySelector(".prato-preco > h5").innerHTML= `R$ ${valorPrato}`; 
    document.querySelector(".bebida-preco > h5").innerHTML= `R$ ${valorBebida}`; 
    document.querySelector(".sobremesa-preco > h5").innerHTML= `R$ ${valorSobremesa}`; 
    soma= Number(valorPrato + valorBebida + valorSobremesa);
    document.querySelector(".total-preco > h5").innerHTML= `R$ ${soma}`;
}   

function whatsApp() {  
    let name = prompt("Qual o seu nome?"); 
    let endereco = prompt ("Qual o seu endereço?");
    let mensagem = `Olá, gostaria de fazer o pedido: \n -Prato: ${prato} \n -Bebida: ${bebida} \n -Sobremesa: ${sobremesa} \n -Total: R$ ${soma} \n\n Nome: ${name} \n Endereço: ${endereco}`;
    alert(mensagem);
    window.open("https://wa.me/+5532988334116?text="+ mensagem);
}

function saida() { 
    document.querySelector(".caixa-pedido").classList.add("escondido");
}
