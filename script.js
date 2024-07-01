let inserir = document.getElementById("text");
let array = [];
let loop = 0;
let texto;

//algoritmo que resolve a torre para n anéis
let torre = (n, origem, auxiliar, destino) => {
  
    if(n==1){
       texto = " Bloco "+n+" para "+destino;
       array.push(texto);
 
    }else{
        torre(n-1, origem, destino, auxiliar);
        texto = " Bloco "+n+" para "+destino;
        array.push(texto)
        torre(n-1, auxiliar, origem, destino);
     }

}
//

//captura os valores do forms, chama o metodo torre e exibe os movimentos
let PegaDados = () =>{
    array = [];
    inserir.innerHTML = "";
    let n = document.getElementById("n_aneis").value;
    let origem = document.getElementById("origem").value;
    let destino = document.getElementById("destino").value;
    let auxiliar = document.getElementById("auxiliar").value;
   
    torre(n, origem, auxiliar, destino);
  
    //exibir movimentos no html
    while(loop<=array.length-1){
      inserir.innerHTML+=array[i]+"<br/>";
      loop++;
    }
}


let botao = document.getElementById("botao");
botao.addEventListener('click', PegaDados);  
