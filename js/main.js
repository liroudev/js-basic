function soma(n1,n2){
    return n1 + n2;
}

alert(soma(5,10));

function validaIdade(idade){
    var validar;
    if(idade >=18){
        validar = true;
    }else {
        validar = false;
    }
    return validar;
}

var idade = prompt("Informe a sua idade");
alert(validaIdade(idade));


// var d = new Date();
// alert(d.toDateString());
// alert(d.getHours());
// alert(d.getMonth()+1);


// for(count = 1; count <= 5; count++){
//     alert(count);
// }


// var count = 0;

// while (count < 5){
//     console.log(count);
//     count++;
// }



// var idade = prompt("Qual sua idade ?");

// if(idade >= 18){
//     alert("Maior de idade!");
// }else {
//     alert("Menor de idade! Quer procurar besteira né ?!");
// }





// var frutas = [{nome:"Maça",cor:"vermelha"},{nome:"Uva",cor:"Roxa"}];
// console.log(frutas);
// console.log(frutas[0]);
// console.log(frutas[1].nome);


// var fruta = {nome:"maçã", cor:"vermelha"};
// console.log(fruta);



// var lista = ["maçã","pêra","laranja"];

// console.log(lista[1]);
// lista.push("uva");
// console.log(lista);
// console.log("Quantidade de elementos: " + lista.length);
// lista.pop();
// console.log(lista);
// console.log("Quantidade de elementos: " + lista.length);
// console.log(lista.reverse());
// console.log(lista.toString());
// console.log(lista.join(" | "));



// var nome ='Filipe André';
// var n1 = 15;
// var n2 = 20;
// var frase = "japão é o melhor time do mundo";
// //alert("Bem Vindo " + nome + " você tem " + idade + " anos") ;



// console.log(nome);
// console.log(n1);
// console.log(n2);
// console.log(n1 * n2);
// console.log(frase);
// console.log(frase.toLocaleUpperCase());
// console.log(frase.replace("japão","Brasil"));

