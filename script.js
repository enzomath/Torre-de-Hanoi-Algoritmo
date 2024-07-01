let inserir = document.getElementById("text");
let array = [];
let texto;

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

let PegaDados = () =>{
    array = [];
    let n = document.getElementById("n_aneis").value;
    let origem = document.getElementById("origem").value;
    let destino = document.getElementById("destino").value;
    let auxiliar = document.getElementById("auxiliar").value;
   
    torre(n, origem, auxiliar, destino);
    inserir.innerText = array.toString();
}


let botao = document.getElementById("botao");
botao.addEventListener('click', PegaDados);
