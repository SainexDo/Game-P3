let c1 = document.getElementById('cuadrito1');
let c2 = document.getElementById('cuadrito2');
let c3 = document.getElementById('cuadrito3');
let c4 = document.getElementById('cuadrito4');
let c5 = document.getElementById('cuadrito5');
let c6 = document.getElementById('cuadrito6');
let c7 = document.getElementById('cuadrito7');
let c8 = document.getElementById('cuadrito8');
let c9 = document.getElementById('cuadrito9');

let matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

let P1 = true;
let IA = false;


let array = [c1, c2, c3, c4, c5, c6, c7, c8, c9]

function juegoIA(array) {
    index = Math.floor(Math.random() * 9)
    setTimeout(() => {
        array[index].innerHTML = 'O';
        console.log(array[index]);
        
        tt = true;
    }, 1000);
}









let tt = true;

let clave1 = true;

function c1vez() {
    if (clave1 === true) {
        if (tt === true) {
            matriz[0][0] = 'X';
            c1.innerHTML = 'X'
            tt = false;
        } else if (tt == false) {
            matriz[0][0] = "O"
           
            c1.innerHTML = 'O'

            tt = true;
        }

        clave1 = false;
    }
    juegoIA(array) 
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
    juegoIA(array) 
}


let clave3 = true;

function c3vez() {
    Math
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
    juegoIA(array)  
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
    juegoIA(array)  
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
    juegoIA(array)  
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
    juegoIA(array)  
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
    juegoIA(array)  
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
    juegoIA(array)  
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
    juegoIA(array)  
}



let contadorX = 0;
let contadorO = 0;

for (let index = 0; index < matriz.length; index++) {
    if (matriz[0][index] == "X") {
        contadorX++;
    }else if (matriz[0][index] == "O") {
        contadorO++;
    }console.log(contadorX);
}
if (contadorX == 3 || contadorO == 3) {

}else{
    
}

