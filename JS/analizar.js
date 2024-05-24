let cuadritos = document.getElementsByClassName('cuadrito')

let matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let array = [c1, c2, c3, c4, c5, c6, c7, c8, c9];

let turnoJugador = true;

function hacerMovimiento(index, jugador) {
    if (matriz[Math.floor(index / 3)][index % 3] === '') {
        matriz[Math.floor(index / 3)][index % 3] = jugador;
        array[index].innerHTML = jugador;
        return true;
    }
    return false;
}
function juegoIA() {
    let indicesDisponibles = array.map((_, index) => index).filter(index => matriz[Math.floor(index / 3)][index % 3] === '');
    if (indicesDisponibles.length > 0) {
        let index = indicesDisponibles[Math.floor(Math.random() * indicesDisponibles.length)];
        hacerMovimiento(index, 'O');
    }
}
function checkGanador() {
    // Verificar filas
    for (let i = 0; i < 3; i++) {
        if (
            matriz[i][0] !== '' && matriz[i][0] === matriz[i][1] && matriz[i][0] === matriz[i][2]
        ) {
            return matriz[i][0];
        }
    }
    // Verificar columnas
    for (let i = 0; i < 3; i++) {
        if (matriz[0][i] !== '' && matriz[0][i] === matriz[1][i] && matriz[0][i] === matriz[2][i]
        ) {
            return matriz[0][i];
        }
    }
    // Verificar diagonales
    if (matriz[0][0] !== '' && matriz[0][0] === matriz[1][1] && matriz[0][0] === matriz[2][2]) {
        return matriz[0][0];
    }
    if (matriz[0][2] !== '' && matriz[0][2] === matriz[1][1] && matriz[0][2] === matriz[2][0]) {
        return matriz[0][2];
    }
    return '';
}

array.forEach((element, index) => {
    element.addEventListener('click', () => {
        if (turnoJugador && hacerMovimiento(index, 'X')) {
            turnoJugador = false;
            if (checkGanador() === '') {
                juegoIA();
                turnoJugador = true;
                checkGanador();
            }
        }
    });
});



function juegoIA(cuadritos, matriz) {
    while (valid == true) {
        let numAleatorio = Math.floor(Math.random() * 9)
        if (cuadritos[numAleatorio].innerHTML !== 'X' && cuadritos[numAleatorio].innerHTML !== 'O' && cuadritos[numAleatorio].innerHTML === '') {
            cuadritos[numAleatorio].innerHTML = 'O'
            
        }
        break
    }
}