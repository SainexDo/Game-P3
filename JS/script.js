let c1 = document.getElementById('cuadrito1')
let c2 = document.getElementById('cuadrito2')
let c3 = document.getElementById('cuadrito3')
let c4 = document.getElementById('cuadrito4')
let c5 = document.getElementById('cuadrito5')
let c6 = document.getElementById('cuadrito6')
let c7 = document.getElementById('cuadrito7')
let c8 = document.getElementById('cuadrito8')
let c9 = document.getElementById('cuadrito9')


let matriz = [
    [c1, c2, c3],
    [c4, c5, c6],
    [c7, c8, c9],
] 

////////////////////////////////////////////////////////////////////////////////////////////






let tt = true;


let clave1 = true;

function c1vez() {
    if (clave1 === true) {
        if (tt === true) {
            matriz[0][0] = "X";
            c1.innerHTML = 'X'
            tt = false;
        } else if (tt == false) {
            matriz[0][0] = "O"
            c1.innerHTML = 'O'
            tt = true;
        }
        clave1 = false;
    }
   
    if (primeraFila(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (primeraDiagonal(matriz)) {  // Aquí es donde se llama la funcion que contiene el for y contadores
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    // dando una alerta de que se ha ganado.
    }
    if (primeraColumna(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                empatar = false;
    }
}


let clave2 = true;

function c2vez() {
    if (clave2 === true) {
        if (tt === true) {
            matriz[0][1] = "X"
            c2.innerHTML = 'X'
            tt = false;
        } else {
            matriz[0][1] = "O"
            c2.innerHTML = 'O'
            tt = true;
        }
        clave2 = false;
    }
    if (primeraFila(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (segundaColumna(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
}



let clave3 = true;

function c3vez() {
    if (clave3 === true) {
        if (tt === true) {
            matriz[0][2] = "X"
            c3.innerHTML = 'X'
            tt = false;
        } else if (tt == false) {
            matriz[0][2] = "O"
            c3.innerHTML = 'O'
            tt = true;
        }
        clave3 = false;
    }
    if (primeraFila(matriz)) { 
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    
    }
    if (terceraColumna(matriz)) { 
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    
    }
    if (segundaDiagonal(matriz)) { 
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    
    }
}





let clave4 = true;

function c4vez() {
    if (clave4 === true) {
        if (tt === true) {
            matriz[1][0] = "X"
            c4.innerHTML = 'X'
            tt = false;
        } else if (tt == false) {
            matriz[1][0] = "O"
            c4.innerHTML = 'O'
            tt = true;
                            empatar = false;
        }
        clave4 = false;
    }
    if (segundaFila(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (primeraColumna(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
}
    


let clave5 = true;

function c5vez() {
    if (clave5 === true) {
        if (tt === true) {
            matriz[1][1] = "X"
            c5.innerHTML = 'X'
            tt = false;
        } else  {
            matriz[1][1] = 'O'
            c5.innerHTML = 'O'
            tt = true;
        }
        clave5 = false;
    }
    if (segundaFila(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (segundaColumna(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (primeraDiagonal(matriz)) {  // Aquí es donde se llama la funcion que contiene el for y contadores
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    // dando una alerta de que se ha ganado.
    }
    if (segundaDiagonal(matriz)) { 
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    
    }
}

let clave6 = true;

function c6vez() {
    if (clave6 === true) {
        if (tt === true) {
            matriz[1][2] = "X"
            c6.innerHTML = 'X'
            tt = false;
        } else if (tt == false) {
            matriz[1][2] = "O"
            c6.innerHTML = 'O'
            tt = true;
        }
        clave6 = false;
    }
    if (segundaFila(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (terceraColumna(matriz)) { 
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    
    }
}

let clave7 = true;

function c7vez() {
    if (clave7 === true) {
        if (tt === true) {
            matriz[2][0] = "X"
            c7.innerHTML = 'X'
            tt = false;
        } else if (tt == false) {
            matriz[2][0] = "O"
            c7.innerHTML = 'O'
            tt = true;
        }
        clave7 = false;
    }
    if (terceraFila(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (primeraColumna(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
        tt = null;
    }
    if (segundaDiagonal(matriz)) { 
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;  
    }
}

let clave8 = true;

function c8vez() {
    if (clave8 === true) {
        if (tt === true) {
            matriz[2][1] = "X"
            c8.innerHTML = 'X'
            tt = false;
        } else if (tt == false) {
            matriz[2][1] = "O"
            c8.innerHTML = 'O'
            tt = true;
        }
        clave8 = false;
    }
    if (segundaColumna(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (terceraFila(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
}

let clave9 = true;

function c9vez() {
    if (clave9 === true) {
        if (tt === true) {
            matriz[2][2] = "X"
            c9.innerHTML = 'X'
            tt = false;
        } else if (tt == false) {
            matriz[2][2] = "O"
            c9.innerHTML = 'O'
            tt = true;
        }
        clave9 = false;
    }
    if (terceraFila(matriz)) {
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;
    }
    if (terceraColumna(matriz)) { 
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    
    }
    if (primeraDiagonal(matriz)) {  // Aquí es donde se llama la funcion que contiene el for y contadores
        alert("HAS GANADO !!")
                tt = null;
                                empatar = false;    // dando una alerta de que se ha ganado.
    }
    if (empate(matriz)) {  // Aquí es donde se llama la funcion que contiene el for y contadores
        alert("Has empatado")
    }
}

function primeraFila(matriz) {
    let contadorX = 0; //Declaro un contador que cuente las 'X'
    let contadorO = 0; //Declaro un contador que cuente las 'O'

    for (let index = 0; index < matriz.length; index++) { //Hago un for que recorra la posición [0] del array
        if (matriz[0][index] == "X") {  // viendo si hay una 'X' o una 'O' y sumándole un numero a su respectivo
            contadorX++;       // contador.
        }else if (matriz[0][index] == "O") {
            contadorO++;
        }
    }
    if (contadorX == 3 || contadorO == 3) {  // se valida si la fila se ha llenado de 'X' o de 'O', si esto
        return true;              // es así, se vuelve true, y si no, se queda en false.
    }else{ 
        return false                         //esto servirá, al menos en este unico caso, para dar una alerta de que
    }                                    // se ha ganado en donde se vuelve a poner la funcion. 
}


function segundaFila(matriz) {
    let contadorX_Fila2 = 0; //Declaro un contador que cuente las 'X'
    let contadorO_Fila2 = 0; //Declaro un contador que cuente las 'O'

    for (let i2 = 0; i2 < matriz.length; i2++) { //Hago un for que recorra la posición [0] del array
        if (matriz[1][i2] == "X") {  // viendo si hay una 'X' o una 'O' y sumándole un numero a su respectivo
            contadorX_Fila2++;       // contador.
        }else if (matriz[1][i2] == "O") {
            contadorO_Fila2++;
        }
    }
    if (contadorX_Fila2 == 3 || contadorO_Fila2 == 3) {  // se valida si la fila se ha llenado de 'X' o de 'O', si esto
        return true;              // es así, se vuelve true, y si no, se queda en false.
    }else{     
        return false                     //esto servirá, al menos en este unico caso, para dar una alerta de que
    }                                    // se ha ganado en donde se vuelve a poner la funcion. 
}

function terceraFila(matriz) {
    let contadorX_Fila3 = 0; //Declaro un contador que cuente las 'X'
    let contadorO_Fila3 = 0; //Declaro un contador que cuente las 'O'

    for (let fi3 = 0; fi3 < matriz.length; fi3++) { //Hago un for que recorra la posición [0] del array
        if (matriz[2][fi3] == "X") {  // viendo si hay una 'X' o una 'O' y sumándole un numero a su respectivo
            contadorX_Fila3++;       // contador.
        }else if (matriz[2][fi3] == "O") {
            contadorO_Fila3++;
        }
    }
    if (contadorX_Fila3 == 3 || contadorO_Fila3 == 3) {  // se valida si la fila se ha llenado de 'X' o de 'O', si esto
        return true;              // es así, se vuelve true, y si no, se queda en false.
    }else{     
        return false                     //esto servirá, al menos en este unico caso, para dar una alerta de que
    }                                    // se ha ganado en donde se vuelve a poner la funcion. 
}


function primeraDiagonal(matriz) {
    let contadorX_Diagonal1 = 0; //Declaro un contador que cuente las 'X'
    let contadorO_Diagonal1 = 0; //Declaro un contador que cuente las 'O'

    for (let di1 = 0; di1 < matriz.length; di1++) { //Hago un for que recorra la posición [0] del array
        if (matriz[0][0][di1] == 'X' && matriz[1][1][di1] == 'X' && matriz[2][2][di1] == 'X') {
            contadorX_Diagonal1 = 'Ganar';     // contador.
        }else if (matriz[0][0][di1] == 'O' && matriz[1][1][di1] == 'O' && matriz[2][2][di1] == 'O') {
            contadorO_Diagonal1 = 'Ganar';
        }
    }
    if (contadorX_Diagonal1 == 'Ganar' || contadorO_Diagonal1 == 'Ganar') {
        return true;
    }else{     
        return false
    }
}


function segundaDiagonal(matriz) {
    let contadorX_Diagonal2 = 0;
    let contadorO_Diagonal2 = 0;

    for (let di1 = 0; di1 < matriz.length; di1++) {
        if (matriz[2][0][di1] == 'X' && matriz[1][1][di1] == 'X' && matriz[0][2][di1] == 'X') {
            contadorX_Diagonal2 = 'Ganar';
        }else if (matriz[2][0][di1] == 'O' && matriz[1][1][di1] == 'O' && matriz[0][2][di1] == 'O') {
            contadorO_Diagonal2 = 'Ganar';
        }
    }
    if (contadorX_Diagonal2 == 'Ganar' || contadorO_Diagonal2 == 'Ganar') {
        return true;
    }else{     
        return false
    }
}


function primeraColumna(matriz) {
    let contadorX_Columna1 = ''; 
    let contadorO_Columna1 = ''; 

    for (let co1 = 0; co1 < matriz.length; co1++) {
        if (matriz[0][0][co1] == 'X' && matriz[1][0][co1] == 'X' && matriz[2][0][co1] == "X") {
            contadorX_Columna1 = 'Ganar';
        }else if (matriz[0][0][co1] == 'O' && matriz[1][0][co1] == 'O' && matriz[2][0][co1] == "O") {
            contadorO_Columna1 = 'Ganar';
        }
    }
    if (contadorX_Columna1 == 'Ganar' || contadorO_Columna1 == 'Ganar') {
        return true;
    }else{     
        return false
    }
}


function segundaColumna(matriz) {
    let contadorX_Columna2 = ''; //Declaro un contador que cuente las 'X'
    let contadorO_Columna2 = ''; //Declaro un contador que cuente las 'O'

    for (let co2 = 0; co2 < matriz.length; co2++) { //Hago un for que recorra la posición [0] del array
        if (matriz[0][1][co2] == 'X' && matriz[1][1][co2] == 'X' && matriz[2][1][co2] == "X") {  // viendo si hay una 'X' o una 'O' y sumándole un numero a su respectivo
            contadorX_Columna2 = 'Ganar';     // contador.
        }else if (matriz[0][1][co2] == 'O' && matriz[1][1][co2] == 'O' && matriz[2][1][co2] == "O") {
            contadorO_Columna2 = 'Ganar';
        }
    }
    if (contadorX_Columna2 == 'Ganar' || contadorO_Columna2 == 'Ganar') {  // se valida si la fila se ha llenado de 'X' o de 'O', si esto
        return true;              // es así, se vuelve true, y si no, se queda en false.
    }else{     
        return false                     //esto servirá, al menos en este unico caso, para dar una alerta de que
    }                                    // se ha ganado en donde se vuelve a poner la funcion. 
}

function terceraColumna(matriz) {
    let contadorX_Columna3 = ''; 
    let contadorO_Columna3 = ''; 

    for (let co1 = 0; co1 < matriz.length; co1++) {
        if (matriz[0][2][co1] == 'X' && matriz[1][2][co1] == 'X' && matriz[2][2][co1] == "X") {
            contadorX_Columna3 = 'Ganar';
        }else if (matriz[0][2][co1] == 'O' && matriz[1][2][co1] == 'O' && matriz[2][2][co1] == "O") {
            contadorO_Columna3 = 'Ganar';
        }
    }
    if (contadorX_Columna3 == 'Ganar' || contadorO_Columna3 == 'Ganar') {
        return true;
    }else{     
        return false
    }
}

let empatar = true;
function empate(matriz) {
    if (empatar == true) {
        for (let i = 0; i < matriz.length; i++) {
            if (matriz[0][0][i] != '' && matriz[0][1][i] != '' && matriz[0][2][i] != '' && matriz[1][0][i] != '' && matriz[1][1][i] != '' && matriz[1][2][i] != '' && matriz[2][0][i] != '' && matriz[2][1][i] != '' && matriz[2][2][i] != '') {
            }
            return true;
        }
    }
}





let juegoDefault = document.getElementById('juegoDefault')
let juegoNeon = document.getElementById('juegoNeon')
let modalCalavera = document.getElementById('modalCalavera')
let camb = document.getElementById('camb')

modalCalavera.addEventListener('click', function tere() {
    juegoDefault.setAttribute(juegoDefault.style.backgroundColor = 'black', 'black')
})
modalCalavera.addEventListener('click', function tere() {
    juegoDefault.setAttribute(juegoDefault.style.color = 'red', 'red')
})




// const matri = [
//     [1, 2, 3]
//     [4, 5, 6]
//     [7, 8, 9]
// ];


// matriz[0][0] = "X"



//Aquí lo que se estuvo haciendo es mostrar las coordenadas, de hecho,
//si marco posiciones [1][2] = "O" se marcará una "O" en la posición 7.