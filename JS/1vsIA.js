let cuadritos = document.getElementsByClassName('cuadritos');
let borrar = document.getElementById('borrar');

let matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
];

let yacithChino = true;
let acabaJuego = false; // Bandera para controlar si el juego ha terminado

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function juegoIA(cuadritos) {
    if (yacithChino === true && !acabaJuego) {
        for (let index = 0; index < 9; index++) {
            let numAleatorio = Math.floor(Math.random() * 9);
            if (cuadritos[numAleatorio].textContent === "") {
                let fila = cuadritos[numAleatorio].getAttribute('fila');
                let columna = cuadritos[numAleatorio].getAttribute('columna');
                matriz[fila][columna] = 'O';
                cuadritos[numAleatorio].innerHTML = 'O';
                break;
            }
        }
        if (ganeIA(matriz)) {
            yacithChino = false;
            acabaJuego = true; // El juego ha terminado
            alert('¡La IA ha ganado!');
            return;
        }
        if (empate(matriz)) {
            alert('¡Es un empate!');
            acabaJuego = true; // El juego ha terminado
            return;
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let fr = true;
if (fr === true) {
    for (let index = 0; index < cuadritos.length; index++) {
        cuadritos[index].addEventListener('click', function (evento) {
            if (fr && !acabaJuego) {
                if (cuadritos[index].textContent === "") {
                    let fila = cuadritos[index].getAttribute('fila');
                    let columna = cuadritos[index].getAttribute('columna');
                    matriz[fila][columna] = "X";
                    cuadritos[index].innerHTML = 'X';
                }
            }
            setTimeout(() => {
                juegoIA(cuadritos);
            }, 300);
            if (ganeYo(matriz)) {
                fr = false;
                acabaJuego = true; // El juego ha terminado
                alert('¡Has ganado!');
                return;
            }
            if (empate(matriz) && !acabaJuego) {
                alert('¡Es un empate!');
                acabaJuego = true; // El juego ha terminado
                return;
            }
        });
    }
}

function ganeYo(matriz) {
    if ((matriz[0][0] === 'X' && matriz[0][1] === 'X' && matriz[0][2] === 'X') ||
        (matriz[1][0] === 'X' && matriz[1][1] === 'X' && matriz[1][2] === 'X') ||
        (matriz[2][0] === 'X' && matriz[2][1] === 'X' && matriz[2][2] === 'X') ||
        (matriz[0][0] === 'X' && matriz[1][1] === 'X' && matriz[2][2] === 'X') ||
        (matriz[0][2] === 'X' && matriz[1][1] === 'X' && matriz[2][0] === 'X') ||
        (matriz[0][0] === 'X' && matriz[1][0] === 'X' && matriz[2][0] === 'X') ||
        (matriz[0][1] === 'X' && matriz[1][1] === 'X' && matriz[2][1] === 'X') ||
        (matriz[0][2] === 'X' && matriz[1][2] === 'X' && matriz[2][2] === 'X')) {
        return true;
    }
    return false;
}

function ganeIA(matriz) {
    if ((matriz[0][0] === 'O' && matriz[0][1] === 'O' && matriz[0][2] === 'O') ||
        (matriz[1][0] === 'O' && matriz[1][1] === 'O' && matriz[1][2] === 'O') ||
        (matriz[2][0] === 'O' && matriz[2][1] === 'O' && matriz[2][2] === 'O') ||
        (matriz[0][0] === 'O' && matriz[1][1] === 'O' && matriz[2][2] === 'O') ||
        (matriz[0][2] === 'O' && matriz[1][1] === 'O' && matriz[2][0] === 'O') ||
        (matriz[0][0] === 'O' && matriz[1][0] === 'O' && matriz[2][0] === 'O') ||
        (matriz[0][1] === 'O' && matriz[1][1] === 'O' && matriz[2][1] === 'O') ||
        (matriz[0][2] === 'O' && matriz[1][2] === 'O' && matriz[2][2] === 'O')) {
        return true;
    }
    return false;
}

function empate(matriz) {
    for (let i = 0; i < matriz.length; i++) {
        for (let j = 0; j < matriz[i].length; j++) {
            if (matriz[i][j] === '') {
                return false;
            }
        }
    }
    return true;
}

borrar.addEventListener('click', function () {
    for (let i = 0; i < cuadritos.length; i++) {
        cuadritos[i].innerHTML = '';
    }
    matriz = [
        ['', '', ''],
        ['', '', ''],
        ['', '', ''],
    ];

    acabaJuego = false;
});