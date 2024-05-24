const gato = ['X','O','X','0','X','O','X','O','X']; //traslamos nuestro gato a un array
[
  [O,O,X],
  [O,X,X],
  [X,O,X],
]

let revisarVictoria = (simbolo) => {
  const condicionesVictoria = [[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,4,8],
    [2,4,6],
    [0,3,6],
    [1,4,7],
    [2,5,8]
  ]]; //condiciones de victoria
  let victoria = false;
  for (let i = 0; i < condicionesVictoria.length; i++) {
    for (let j = 0; j < condicionesVictoria[j].length; j++) {
      console.log(condicionesVictoria[i][j]); //0,4,8
      console.log(gato[condicionesVictoria[i][j]]); //gato[0], gato[4], gato[8]
      if(gato[condicionesVictoria[i][j]] == simbolo) {//verificamos si la posicion [i] y [j] son iguales al valor guardado anteriormente
        //si la condicion de arriba de cumple existe un ganador
        victoria = true;
        break;
      }
    }
  }
}

if(gato[0] == 'X' && gato[4] == 'X' && gato[8] == 'X') {
  //alguien ganó
}

revisarVictoria('X');
revisarVictoria('O');
