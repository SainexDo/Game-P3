let cuadritos = document.getElementsByClassName('cuadritos'); // Llamo a la clase que tienen todas las celdas en HTML
let borrar = document.getElementById('borrar'); // Aqui llamo al boton al que le pondré la funcion de borrar, que lo que hará será refrescar la página
let winner = document.getElementById('winner') // Aquí se llama al espacio de texto que se coloca cuando alguien gana o empata.

let matriz = [
    ['', '', ''],
    ['', '', ''],  // Esto es una matriz, generada para permitir validaciones de gane de una forma más certera más adelante.
    ['', '', ''],
];

let validaComienzo = true; // flag para controlar el inicio de la funcion (creo que es algo innecesaria)
let acabaJuego = false; // flag para controlar si el juego ha terminado

////////////////////////////////////////////////////////////////////////////////////////////////////////////
function juegoIA(cuadritos) {  // Esta es la funcion que controla todo el movimiento de la IA, misma funcion que llamo siempre que yo escrba para que se actiive ddespués de cada movimiento que haga
    if (validaComienzo === true && !acabaJuego) {  // validacion necesaria para controlar l
        for (let index = 0; index < 100; index++) { //hago un for que se encargará de repetir un proceso de busqueda en caso de que no se encuentre una casilla vacía.
            let numAleatorio = Math.floor(Math.random() * 9); // Aquí se hace una función importante de la maquina ya que elige un número random que luego funcionará como posición para que el bot (IA) pueda escribir.
            if (cuadritos[numAleatorio].textContent === "") {  // aquí se valida si el espacio en el que la IA quiere escribir de manera random, está vacío, si no es así, el ciclo del for se vuelve a hacer, hasta encontrar un espacio vacío.
                let fila = cuadritos[numAleatorio].getAttribute('fila'); // Aquí obtengo los atributos desde el html.
                let columna = cuadritos[numAleatorio].getAttribute('columna'); // Aquí obtengo los atributos desde el html.
                matriz[fila][columna] = '👾' //Aquí se escribe en la matriz para que luego las validaciones se puedan realizar correctamente.
                cuadritos[numAleatorio].innerHTML = '👾'; // Esto es lo que escribe a nivel visual dentro de la página
                break; // aquí se para el ciclo for si ya se validó todo bien.
            }
        }console.log(matriz);
        if (ganeIA(matriz)) { // llamo la funcion de la IA
            validaComienzo = false;
            acabaJuego = true; // El juego ha terminado
            winner.innerHTML = 'Gana 👾'
            return;
        }
        if (empate(matriz)) { // Llamo a la función de empate
            acabaJuego = true; // El juego ha terminado
            winner.innerHTML = '¡Han empatado!'
            return;
        }
    }
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
let fr = true; // lo mismo, esto es una flag
if (fr === true) { // validacion de la flag
    for (let index = 0; index < cuadritos.length; index++) { //hago un for para contar los cuadritos
        cuadritos[index].addEventListener('click', function (evento) {
            if (fr && !acabaJuego) {
                if (cuadritos[index].textContent === "") {
                    let fila = cuadritos[index].getAttribute('fila'); // Aquí obtengo los atributos desde el html.
                    let columna = cuadritos[index].getAttribute('columna'); // Aquí obtengo los atributos desde el html.
                    matriz[fila][columna] = '😶‍🌫️'; //Aquí se escribe en la matriz para que luego las validaciones se puedan realizar correctamente.
                    if (cuadritos[index] !== '') { // validación de que el espacio en el qu se vaya a escribir.
                        cuadritos[index].innerHTML = '😶‍🌫️';
                        setTimeout(() => {
                            juegoIA(cuadritos); // aquí llamo a que se haga la función de la IA para que se haga luego de que yo toque.
                        }, 300);
                    }
                }
            }
            if (ganeYo(matriz)) {
                fr = false;
                acabaJuego = true; // El juego ha terminado
                winner.innerHTML = 'Gana 😶‍🌫️'
                return;
            }
            if (empate(matriz) && !acabaJuego) {
                winner.innerHTML = '¡Han empatado!'
                acabaJuego = true; // El juego ha terminado
                return;
            }
        });
    }
}

function ganeYo(matriz) {   //Aquí van todas las validaciones.
    if ((matriz[0][0] === '😶‍🌫️' && matriz[0][1] === '😶‍🌫️' && matriz[0][2] === '😶‍🌫️') || //Fila 1
        (matriz[1][0] === '😶‍🌫️' && matriz[1][1] === '😶‍🌫️' && matriz[1][2] === '😶‍🌫️') || //Fila 2
        (matriz[2][0] === '😶‍🌫️' && matriz[2][1] === '😶‍🌫️' && matriz[2][2] === '😶‍🌫️') || //Fila 3
        (matriz[0][0] === '😶‍🌫️' && matriz[1][1] === '😶‍🌫️' && matriz[2][2] === '😶‍🌫️') || //Diagonal 1
        (matriz[0][2] === '😶‍🌫️' && matriz[1][1] === '😶‍🌫️' && matriz[2][0] === '😶‍🌫️') || //Diagonal 2
        (matriz[0][0] === '😶‍🌫️' && matriz[1][0] === '😶‍🌫️' && matriz[2][0] === '😶‍🌫️') || //Columna 1
        (matriz[0][1] === '😶‍🌫️' && matriz[1][1] === '😶‍🌫️' && matriz[2][1] === '😶‍🌫️') || //Columna 2
        (matriz[0][2] === '😶‍🌫️' && matriz[1][2] === '😶‍🌫️' && matriz[2][2] === '😶‍🌫️')) { //Columna 3
        return true;
    }
    return false;
}

function ganeIA(matriz) {    //Aquí van todas las validaciones, de nuevo.
    if ((matriz[0][0] === '👾' && matriz[0][1] === '👾' && matriz[0][2] === '👾') || //Fila 1
        (matriz[1][0] === '👾' && matriz[1][1] === '👾' && matriz[1][2] === '👾') || //Fila 2
        (matriz[2][0] === '👾' && matriz[2][1] === '👾' && matriz[2][2] === '👾') || //Fila 3
        (matriz[0][0] === '👾' && matriz[1][1] === '👾' && matriz[2][2] === '👾') || //Diagonal 1
        (matriz[0][2] === '👾' && matriz[1][1] === '👾' && matriz[2][0] === '👾') || //Diagonal 2
        (matriz[0][0] === '👾' && matriz[1][0] === '👾' && matriz[2][0] === '👾') || //Columna 1
        (matriz[0][1] === '👾' && matriz[1][1] === '👾' && matriz[2][1] === '👾') || //Columna 2
        (matriz[0][2] === '👾' && matriz[1][2] === '👾' && matriz[2][2] === '👾')) { //Columna 3
        return true;  //Aquí se retornará como verdadera la función si alguna de estas validaciones son correctas.
    }
    return false;    //Aquí se retornará como falsa la función si ninguna de estas validaciones son correctas.
}

function empate(matriz) {  //Funcion que valida un empate
    for (let i = 0; i < matriz.length; i++) {  //Un primer for que recorre la matriz y encuentra la posición 0, 1, 2 de la matriz.
        for (let j = 0; j < matriz[i].length; j++) { // Ya que el primer for ha encontrado esas posiciones, este sguiente for se encargará de buscar dentro de esas posiciones, encontrando la posición 0, 1, y 2 dentro de cada pocisión 0, 1, 2 del anterior for. 
            if (matriz[i][j] === '') { // aquí se busca validar si toda la matriz es igual a vacío, por eso se ocupaba el doble for, para buscar en absolutamente todas las posiciones con presición.
                return false; //Retorna falso para que la validación no se active mientras están vacíos.
            }
        }
    }
    return true; //retorna verdadero para que la función se active, ya que la validación anterior ya no dará un resultado en false, porque se supone que en algún momento se llenarán todas las celdas para así dar un empate.
}

borrar.addEventListener('click', function () {
    location.reload()                      // Esto da la sensación de que todo se borra, ya que refresca la página.
})