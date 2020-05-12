function mensaje() {
    var x = document.getElementById("numero1").value;
    var y = parseInt(1);
    while(x!=0){
        y = y*x;
        x--;
    }
    document.getElementById("resultado").value = y;
}

