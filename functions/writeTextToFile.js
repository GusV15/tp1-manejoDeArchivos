import fs from "fs";

/**
 *
 * @param filePath ubicación de archivo
 * @param text texto a escribir
 * @param flag valida que accion tomar en caso de error
 */
export const writeTextToFile = (filePath, text, flag) => {
  fs.readFile(filePath, "utf-8", (error) => {
    if (error) {
      // Flag false -> muestra error
      if (!flag) {
        throw Error(`Execute writeTextToFile, result -> File does not exist`);
      }
      // Flag true -> crea archivo y escribe text
      fs.writeFile(filePath, text, (error) => {
        if (error) throw Error(`File write error: ${error.message}`);
        console.log(
          `Execute writeTextToFile, result -> File created successfully`
        );
      });
    } else {
      // Escribe text
      fs.writeFile(filePath, text, (error) => {
        if (error)
          throw Error(
            `Execute writeTextToFile, result -> File write error: ${error.message}`
          );
        console.log(
          `Execute writeTextToFile, result -> File created successfully`
        );
      });
    }
  });
};
