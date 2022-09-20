/**
 *
 * @param {*} arrayNum1 Primer arreglo a combinar
 * @param {*} arrayNum2 Segundo arreglo a combinar
 * @returns Retorna un arreglo ordenado sin repetidos y ordenado ascendentemente
 */
export const combineTwoArrays = (arrayNum1, arrayNum2) => {
  // Concatena dos arreglos
  const concatArrays = arrayNum1.concat(arrayNum2);
  /*Ordena elementos con función sort() de acuerdo a callback
    donde se le pasa el valor anterior y actual por parámentro
    los compara y pone al menor delante.
    Esto es necesario ya que si no le pasamos esa lógica, toma 
    el valor 10 menor que 2 por ejemplo. */
  const sortArrayAsc = concatArrays?.sort((num1, num2) => num1 - num2);
  // new Set se encarga de eliminar elementos duplicados de array que se le pasa por parametro
  const removeDuplicates = new Set(sortArrayAsc);
  // como new Set devuelve un set de numeros, lo casteamos a array con spread operator.
  return [...removeDuplicates];
};
