var nombre = prompt("Nombre : ");
var edad = parseInt(prompt("Edad : "));

if(edad < 16){
    document.write("te llamamos.... USTED NO TIENES EDAD PARA TRABAJAR ");
}

else if(edad >= 19 && edad <= 50){
    var salario = parseInt(prompt("Salario : " ));
    var extra = parseInt(extra);

    extra = salario*0.05;
    salario = extra+salario;
    document.write("Su salario es ",salario);
 
}else if(edad >=51 && edad <=60){
    var salario = parseInt(prompt("Salario : " ));
    var extra2 = parseInt(extra2);

    extra2 = salario*0.10;
    salario = extra2+salario;
    document.write("Su salario es ",salario);

}else if(edad > 60 ){
    var salario = parseInt(prompt("Salario : " ));
    var extra3 = parseInt(extra3);

    extra3 = salario*0.15;
    salario = extra3+salario;
    document.write("Su salario es ",salario);

}
