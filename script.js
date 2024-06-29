
let cards = document.querySelector(".rodape");
let slot = document.querySelector(".slotcard");

let jogaCard = (slotcard) => {
    
    //ja tem card selecionado
    if(document.querySelector(".chose")){
        let cardSelecionado = document.querySelector(".chose");
        cardSelecionado.classList.remove("chose");
        cardSelecionado.classList.add("verificarResposta") 
        document.querySelector(".central").innerHTML = cardSelecionado.outerHTML;
        console.log(document.querySelector(cardSelecionado));
        //daqui em diante verifica se resposta está correta ou não


        return
    }  
    //nao tem card selecionado
    console.log("Selecione um card");
}



//ao clicar em cards ou rodapé
let move = (ev) => {

    //clicou no rodapé mas não clicou em card, se tiver card já selecionado ele deseleciona
    if (ev.target == cards){
        console.log("clicou no rodape");
        
        if(document.querySelector(".chose")){
            let cardAnterior = document.querySelector(".chose");
            cardAnterior.classList.remove("chose");
            cliqueiCard(1);
        }  
        return
    }
    
    //clicou no card que ja havia sido selecionado ele deseleciona
    if(ev.target.classList.contains("chose")){
        ev.target.classList.remove("chose");
        cliqueiCard(1);
        return
    }
    
    //clicou em um card, ja tendo selecionado outro -> deseleciona o card anterior e seleciona o clicado
    if(document.querySelector(".chose")){
        let cardAnterior = document.querySelector(".chose");
        cardAnterior.classList.remove("chose");
        ev.target.classList.add("chose");
        return
    }
    
    //clicou em card,não tendo nenhum card selecionado,seleciona o card clicado
    ev.target.classList.add("chose");
    cliqueiCard(0);
    
   
}

function cliqueiCard(n){
    switch(n){
        case 0:
            document.querySelector(".slotcard").style.border = "15px dashed white";
            break;
        case 1:
            document.querySelector(".slotcard").style.border = "0px";
        break;
        default:

    }


}


cards.addEventListener("click", move);
slot.addEventListener("click", jogaCard);