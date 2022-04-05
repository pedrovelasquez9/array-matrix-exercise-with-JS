const matriz = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
  [13, 14, 15, 16],
];

const matriz2 = [
  [3, 3, 3, 3],
  [5, 6, 7, 8],
  [9, 1121, 11, 12],
  [13, 14, 15, 16],
];

// Caso 1: Sumar todos los valores y retornar el resultado como valor único

let acum = 0;

for (let i = 0; i < matriz.length; i++) {
  console.log(matriz[i]); //Aquí imprimes el ciclo externo
  for (let j = 0; j < matriz[i].length; j++) {
    acum += matriz[i][j]; //Aquí acumulas la sumatoria
    console.log(matriz[i][j]); //Aquí imprimes el ciclo interno
  }
}
console.log(acum); //Imprime el resultado de la sumatoria

// Caso 2: Sumar cada fila de la matriz y retornar una colección con la suma de cada fila

let sumaPorFila = [];

for (let i = 0; i < matriz.length; i++) {
  let innerCounter = 0; //Inicializas el contador en cada iteración del array exterior
  console.log(matriz[i]); //Aquí imprimes el ciclo externo
  for (let j = 0; j < matriz[i].length; j++) {
    innerCounter += matriz[i][j]; //Aquí acumulas la sumatoria
    console.log(matriz[i][j]); //Aquí imprimes el ciclo interno
  }
  sumaPorFila.push(innerCounter); //Agregar el resultado de la sumatoria de cada fila al arreglo vacío
}

console.log(sumaPorFila);

//Caso 3: externalizar el proceso a una función y probar con distintas matrices

const processMatrix = (mat) => {
  let acum = 0;

  for (let i = 0; i < mat.length; i++) {
    console.log(mat[i]); //Aquí imprimes el ciclo externo
    for (let j = 0; j < mat[i].length; j++) {
      acum += mat[i][j]; //Aquí acumulas la sumatoria
      console.log(mat[i][j]); //Aquí imprimes el ciclo interno
    }
  }
  return acum; //retornamos el valor final
};

console.log(processMatrix(matriz));
console.log(processMatrix(matriz2));
