

function empezarAJugar(){
    
    var cant_intentos = 4;
    var acerto = false;
    var respuesta = "Programa Clip";


    var opcion = window.confirm("Hola "+document.getElementById("nombre").value+" vamos a jugar:\n¿Para que programa provincial fue dasarollada la página Todo en 1?. Te damos "+cant_intentos+" intentos.")
    if(opcion == true){    

        while (cant_intentos > 0 && acerto == false){
            var respuestaIngresada = window.prompt("Ingrese su respuesta. Te quedan "+cant_intentos+" intentos.");
            if (respuestaIngresada == respuesta){
                acerto == true;
                cant_intentos == 0;
                window.alert("¡¡¡Excelente Ganaste!!!Gracias por Jugar.");
                break;
            }else{
                cant_intentos = cant_intentos - 1;
                window.alert("No es correcto!Sigue Intentando...");
                if(cant_intentos == 2){
                    window.alert("Te esta costando adivinar. Una pista: Son dos palabras.");
                }
                if(cant_intentos == 1){
                    window.alert("Mmmm Parece que no navegaste por la pagina. Ultima pista: Pro----- C---");
                }
            }
            if(cant_intentos == 0 && acerto==false){
                window.alert("Perdiste!!!Era: "+respuesta+" .Gracias por Jugar.");
                break;
            }
        }
    }
}





