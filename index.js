import { combineNArrays } from "./functions/combineNArrays.js";
import { combineTwoArrays } from "./functions/combineTwoArrays.js";
import { readFileAsString } from "./functions/readFileAsString.js";
import { transformArrayOfNumbersToASoloString } from "./functions/transformArrayOfNumbersToASoloString.js";
import { transformStringInArrayOfNumbers } from "./functions/transformStringInArrayOfNumbers.js";
import { writeTextToFile } from "./functions/writeTextToFile.js";

readFileAsString("./data.txt");

writeTextToFile("./data2.txt", "Nuevo Texto", true);

console.log(
  "Execute transformStringInArrayOfNumbers, result ->",
  transformStringInArrayOfNumbers(
    "123 | 456 | 789 | 1bc | 10 | {} | 20 | []",
    "|"
  )
);

console.log(
  "Execute transformArrayOfNumbersToASoloString, result ->",
  transformArrayOfNumbersToASoloString([123, 456, 789, 10], ",")
);

console.log(
  "Execute combineTwoArrays, result ->",
  combineTwoArrays([1, 5, 10], [2, 3, 8, 11])
);

console.log(
  "Execute combineNArrays, result ->",
  combineNArrays([[1, 10], [2, 3, 15, 16], [4], [6, 7, 13]])
);
