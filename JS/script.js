let c1 = document.getElementById('cuadrito1')
let c2 = document.getElementById('cuadrito2')
let c3 = document.getElementById('cuadrito3')
let c4 = document.getElementById('cuadrito4')
let c5 = document.getElementById('cuadrito5')
let c6 = document.getElementById('cuadrito6')
let c7 = document.getElementById('cuadrito7')
let c8 = document.getElementById('cuadrito8')
let c9 = document.getElementById('cuadrito9')




let tt = true;



let clave1 = true;

function c1vez() {
if (clave1 === true) {
    if (tt === true) {
        c1.innerHTML = 'X'
        tt = false;
    } else {
        c1.innerHTML = 'O'
        tt = true;
    }
    clave1 = false;
} else {
    console.log(':(');
}
}

console.log(tt);

let clave2 = true;

function c2vez() {
    if (clave2 === true) {
        if (tt === true) {
            c2.innerHTML = 'X'
            tt = false;
        } else {
            c2.innerHTML = 'O'
            tt = true;
        }
        clave2 = false;
    } else {
        console.log(':(');
    }
}

let clave3 = true;

function c3vez() {
    if (clave3 === true) {
        if (tt === true) {
            c3.innerHTML = 'X'
            tt = false;
        } else {
            c3.innerHTML = 'O'
            tt = true;
        }
        clave3 = false;
    } else {
        console.log(':(');
    }
}

let clave4 = true;

function c4vez() {
    if (clave4 === true) {
        if (tt === true) {
            c4.innerHTML = 'X'
            tt = false;
        } else {
            c4.innerHTML = 'O'
            tt = true;
        }
        clave4 = false;
    } else {
        console.log(':(');
    }
}

let clave5 = true;

function c5vez() {
    if (clave5 === true) {
        if (tt === true) {
            c5.innerHTML = 'X'
            tt = false;
        } else {
            c5.innerHTML = 'O'
            tt = true;
        }
        clave5 = false;
    } else {
        console.log(':(');
    }
}

let clave6 = true;

function c6vez() {
    if (clave6 === true) {
        if (tt === true) {
            c6.innerHTML = 'X'
            tt = false;
        } else {
            c6.innerHTML = 'O'
            tt = true;
        }
        clave6 = false;
    } else {
        console.log(':(');
    }
}

let clave7 = true;

function c7vez() {
    if (clave7 === true) {
        if (tt === true) {
            c7.innerHTML = 'X'
            tt = false;
        } else {
            c7.innerHTML = 'O'
            tt = true;
        }
        clave7 = false;
    } else {
        console.log(':(');
    }
}

let clave8 = true;

function c8vez() {
    if (clave8 === true) {
        if (tt === true) {
            c8.innerHTML = 'X'
            tt = false;
        } else {
            c8.innerHTML = 'O'
            tt = true;
        }
        clave8 = false;
    } else {
        console.log(':(');
    }
}

let clave9 = true;

function c9vez() {
    if (clave9 === true) {
        if (tt === true) {
            c9.innerHTML = 'X'
            tt = false;
        } else {
            c9.innerHTML = 'O'
            tt = true;
        }
        clave9 = false;
    } else {
        console.log(':(');
    }
}



// const matriz = [
//     [1, 2, 3]
//     [4, 5, 6]
//     [7, 8, 9]
// ];

// console.log(matriz);

// matriz[0][0] = "X"

// console.log(matriz);

//Aquí lo que se estuvo haciendo es mostrar las coordenadas, de hecho,
//si marco posiciones [1][2] = "O" se marcará una "O" en la posición 7.