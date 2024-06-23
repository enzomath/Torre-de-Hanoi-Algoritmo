let torre = (n, origem, auxiliar, destino) => {
  
    if(n==1){
        console.log("Bloco "+n+" para "+destino);
    }else{
        torre(n-1, origem, destino, auxiliar);
        console.log("Bloco "+n+" para "+destino);
        torre(n-1, auxiliar, origem, destino);
     }

}

torre(2, "A", "B", "C");