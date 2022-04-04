
//Pratos 
let prato; 

function selecionarPrato1() { 
    document.getElementById("contra-file").style.borderColor= "#32B72F"; 
    document.getElementById("salmao").style.borderColor= "white"; 
    document.getElementById("risoto").style.borderColor= "white";
    prato= "Contra-Filé";
} 

function selecionarPrato2() { 
    document.getElementById("salmao").style.borderColor= "#32B72F"; 
    document.getElementById("contra-file").style.borderColor= "white"; 
    document.getElementById("risoto").style.borderColor= "white";
    prato= "Salmao";
} 

function selecionarPrato3() { 
    document.getElementById("risoto").style.borderColor= "#32B72F"; 
    document.getElementById("salmao").style.borderColor= "white"; 
    document.getElementById("contra-file").style.borderColor= "white";
    prato= "Risoto";
} 
//PRATOS 


//BEBIDAS 
let bebida;

function selecionarBebida1() { 
    document.getElementById("agua").style.borderColor= "#32B72F"; 
    document.getElementById("suco").style.borderColor= "white"; 
    document.getElementById("refri").style.borderColor= "white";
    bebida= "Água";
} 

function selecionarBebida2() { 
    document.getElementById("suco").style.borderColor= "#32B72F"; 
    document.getElementById("agua").style.borderColor= "white"; 
    document.getElementById("refri").style.borderColor= "white";
    bebida= "Suco";
} 

function selecionarBebida3() { 
    document.getElementById("refri").style.borderColor= "#32B72F"; 
    document.getElementById("suco").style.borderColor= "white"; 
    document.getElementById("agua").style.borderColor= "white";
    bebida= "Refrigerante";
} 
//BEBIDAS


//SOBREMESA 
let sobremesa;

function selecionarSobremesa1() { 
    document.getElementById("ninho").style.borderColor= "#32B72F"; 
    document.getElementById("profiterolis").style.borderColor= "white"; 
    document.getElementById("torta").style.borderColor= "white";
    sobremesa= "Mousse de Ninho";
} 

function selecionarSobremesa2() { 
    document.getElementById("profiterolis").style.borderColor= "#32B72F"; 
    document.getElementById("ninho").style.borderColor= "white"; 
    document.getElementById("torta").style.borderColor= "white";
    sobremesa= "Profiterólis";
} 

function selecionarSobremesa3() { 
    document.getElementById("torta").style.borderColor= "#32B72F"; 
    document.getElementById("profiterolis").style.borderColor= "white"; 
    document.getElementById("ninho").style.borderColor= "white";
    sobremesa= "Torta Alemã";
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

function valorFinal() { 
    document.getElementsByTagName("body").style.backgroundColor = " rgba(255, 255, 255, 0.9)";
}
