import fs from "fs";

/**
 *
 * @param filePath ubicación de archivo a leer
 */
export const readFileAsString = (filePath) => {
  fs.readFile(filePath, "utf-8", (error, data) => {
    if (error) throw Error(`Error en lectura de archivo: ${error.message}`);
    console.log(
      `Execute readFileAsString, result -> File read successfully, contains text: ${data}`
    );
  });
};
