/**
 *
 * @param array Array compuesto con N arrays
 * @returns Retorna un arreglo ordenado sin repetidos y ordenado ascendentemente
 */
export const combineNArrays = (array) => {
  // Concatena dos arreglos
  let combinedArray = [];
  array.forEach((arr) => {
    combinedArray = combinedArray.concat(arr);
  });
  /*Ordena elementos con función sort() de acuerdo a callback
    donde se le pasa el valor anterior y actual por parámentro
    los compara y pone al menor delante.
    Esto es necesario ya que si no le pasamos esa lógica, toma 
    el valor 10 menor que 2 por ejemplo. */
  const sortArrayAsc = combinedArray?.sort((num1, num2) => num1 - num2);
  // new Set se encarga de eliminar elementos duplicados de array que se le pasa por parametro
  const removeDuplicates = new Set(sortArrayAsc);
  // como new Set devuelve un set de numeros, lo casteamos a array con spread operator.
  return [...removeDuplicates];
};
