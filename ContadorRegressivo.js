function iniciar(){
    let segundos = parseInt(document.getElementById("tempo").value);
    if(isNaN(segundos) || segundos<=0){
        alert("Por favor digite um número válido!");
        return;
    }
    document.body.style.backgroundImage = "url('../fotos/cronometro2.gif')"
    const contar = setInterval(function(){
    document.getElementById("contagem").innerHTML = segundos;segundos--;
    if(segundos<0){parar(contar)}},(1000));
}

function parar(contar){
    clearInterval(contar);
    document.getElementById("contagem").innerHTML = ""
    document.body.style.backgroundImage = "url('../fotos/cronometro3-2.gif')"
} 

//Outra opção (não funciona)

/* function iniciar(){
    let segundos = parseInt(document.getElementById("tempo").value);
    if(isNaN(segundos) || segundos<=0){
        alert("Por favor digite um número válido!");
        return;
    }
    const contar = setInterval(diminuir(segundos, contar),(1000));
}

function diminuir(segundos, contar){
    document.getElementById("contagem").innerHTML = segundos;
    segundos--;
    if(segundos<0){
        parar(contar)
    }
}

function parar(contar){
    clearInterval(contar);
    document.getElementById("contagem").innerHTML = "Fim!"
}  */



//Outra opção:

/* function iniciar(){
    let segundos = parseInt(document.getElementById("tempo").value);
    if(isNaN(segundos) || segundos<=0){
        alert("Por favor digite um número válido!");
        return;
    }
    setInterval(function(){document.getElementById("contagem").innerHTML = segundos;
    segundos--; clearInterval(segundos<0)},(1000));
} */