let cuadritos = document.getElementsByClassName('cuadrito')

let borrar = document.getElementById('borrar')

borrar.addEventListener('click', function () {
    for (let i = 0; i < cuadritos.length; i++) {
        cuadritos[i].innerHTML = '';
    }
})

let matriz = [
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
]

function juegoIA(cuadritos) {
    if (cuadritos !== '') {
            for (let index = 0; index < 1000; index++) {
            let numAleatorio = Math.floor(Math.random() * 9)
            if (cuadritos[numAleatorio].textContent === "") {
                setTimeout(() => {
                    cuadritos[numAleatorio].innerHTML = 'O'
                }, 600);
                break
            }
        }
    }
}

for (let index = 0; index < cuadritos.length; index++) {
    cuadritos[index].addEventListener('click', function (evento) {
    let clave = true;
        if (true) {
            if (cuadritos[index].textContent === "") {
                let fila = cuadritos[index].getAttribute('fila')
                let columna = cuadritos[index].getAttribute('columna')
                matriz[fila][columna] = "X"
                cuadritos[index].innerHTML = 'X'
            }
            clave = false;
        }
        juegoIA(cuadritos)
        console.log(matriz);
    })
}