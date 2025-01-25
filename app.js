/*Alcance o ambito global (usaremos el mismo nombre de la funcion de la
funcion generar numero secreto*/ 
let nuemeroSecreto = 0;
let intentos = 0;
let listaNumeroSOrteado = [];
let NumeroMaximo = 10;

/*Optimizacion del codigo anterior 02_JS_HTML_LLAMAR_JAVASCRIP*/
function asignarTextoElemento(elemento, texto){
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;

}

/*Crearemos la funcion intento de usario que insertamos en HTML
recuerda que la funcion es un encapsulamiento de una accion y luego llamarla*/
function verificarIntento(){
    //En el input del HTML llamamos a la cajas de texto valorUsuario
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value);

    console.log(intentos);
    if (numeroDeUsuario === nuemeroSecreto){
        //Aqui llamamos una funcion desde otra funcion
        asignarTextoElemento('p',`Acertaste el numero en ${intentos} ${(intentos === 1) ? 'vez' : 'Veces'}`);
        //Boton Nuevo Juego (activarlo):
        document.getElementById('reiniciar').removeAttribute('disabled');


    }else{
        //El usuario no acerto
        if (numeroDeUsuario > nuemeroSecreto){
            asignarTextoElemento('p','EL numero secreto es menor');
        }else{
            asignarTextoElemento('p','EL numero secreto es mayor');
        }

        intentos++;
        limpiarCaja();
    }
    return;
}

function limpiarCaja() {
    //Este es Id de nuestro imput en el HTML
    document.querySelector('#valorUsuario').value = ''; 
}


function generarNumeroSecreto() {
    /*SI el numero generado esta incluido en la lista hacemos una operacion
    sino otra*/
    let numeroGenerado = Math.floor(Math.random()*NumeroMaximo)+1;
    

    console.log(numeroGenerado);
    console.log(listaNumeroSOrteado);
    //Preguntaremos si ya sorteamos todos los numeros
    if(listaNumeroSOrteado.length == NumeroMaximo){
        asignarTextoElemento('p','Ya sortearon todos los numeros posibles')

    }else{

        //Meotodo includes chequea los numeros sorteados y los recorre
        if(listaNumeroSOrteado.includes(numeroGenerado)){
                
                /*Concepto de recursividad (es una funcion que se llama a ella misma
                Checa el numero y se revisa) cada vez que se usa un numero*/
                return generarNumeroSecreto();
        }else{
            /*Cuando el numero generado es jugado
            Deberiamos guardarlo y colocar el elemento al final
            con el elemento push*/
            listaNumeroSOrteado.push(numeroGenerado);
            return numeroGenerado;
        }
    }

}

function condicionesInciales() {
/*Ahora llamaremos a la funcion y los elementos HTML*/
asignarTextoElemento('h1', 'juego del numero secreto');
asignarTextoElemento('p',`Indica un numero del 1 al ${NumeroMaximo}`);
//Generar numero aleatorio
 nuemeroSecreto = generarNumeroSecreto();
//Inicializar el numero de intento
 intentos = 1;
}


function reiniciarJuego(){
    //Limpiar caja
    limpiarCaja();
    condicionesInciales();

   
    //Deshabilitar boton de nuevo juego
    document.querySelector('#reiniciarJuego').setAttribute('disabled', 'true');
}
//Esta funcion son el titulo de Juedo del numero secreto
condicionesInciales();
