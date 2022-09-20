/**
 *
 * @param text texto con separadores
 * @param separator separador que dividirá los elementos para formar un array
 * @returns retorna array resultante de separar el text a partir de la secuencia de separadores ingresada
 */
export const transformStringInArrayOfNumbers = (text, separator) => {
  return text.split(separator).filter((num) => !isNaN(+num));
};
