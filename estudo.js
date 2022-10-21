let tabuada = 3;
let nome = "Jesus";

function escreva(){
    document.write("Tabuada do " + tabuada + "<br>")
    document.write(tabuada + " x 1 = "+(tabuada*1)+"<br>");
    document.write(tabuada + " x 2 = "+(tabuada*2)+"<br>");
    document.write(tabuada + " x 3 = "+(tabuada*3)+"<br>");
    document.write(tabuada + " x 4 = "+(tabuada*4)+"<br>");
    document.write(tabuada + " x 5 = "+(tabuada*5)+"<br>");
    document.write(tabuada + " x 6 = "+(tabuada*6)+"<br>");
    document.write(tabuada + " x 7 = "+(tabuada*7)+"<br>");
    document.write(tabuada + " x 8 = "+(tabuada*8)+"<br>");
    document.write(tabuada + " x 9 = "+(tabuada*9)+"<br>");
    document.write(tabuada + " x 10 = "+(tabuada*10)+"<br><br>");
    document.write("Feito por " + nome);
}

function minhaTabuada(){
    for(let i = 6; i <= 9; i++){
        document.write("Tabuada do " + i + "<br>");
        for(let j = 1; j <= 10; j++){
            document.write(i + " x " + j + " = "+(j*i)+"<br>");
        } 
        document.write("<br>");      
    }
}

function quadrado(){
    for(let i = 16; i <= 20; i++){
        document.write("O quadrado de " + i + " é " + (i*i)+ "<br>");
    }
}
function moeda(atual){
     return atual.toLocaleString('pt-br',{style: 'currency', currency: 'BRL'});
}
function calcula(){
    let c = document.getElementById("valor").value;
    let j = document.getElementById("juros").value;
    if (!Number(c)){
        alert("O valor do capital deve ser numérico.");
        document.getElementById("valor").value = "";
        document.getElementById("valor").focus();
        return
    }
    if (!Number(j)){
        alert("O valor do juros deve ser numérico.");
        document.getElementById("juros").value = "";
        document.getElementById("juros").focus();
        return
    }
    
    let r = c *(1 + (j/100));
    document.write("resultado: " + moeda(r));
}
