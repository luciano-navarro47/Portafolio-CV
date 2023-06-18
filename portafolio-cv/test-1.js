//1)
//Hacer un programa que recibe 3 números
//Imprimir por pantalla cual es el más grande
//Cual el del medio
//Y cuál el más chico

function mayorToMinor(...nums) {
  let sortedMayorToMinorNums = nums.sort((a, b) => b - a);
  console.log("N° mayor: ", sortedMayorToMinorNums[0]);
  console.log("N° mediano: ", sortedMayorToMinorNums[1]);
  console.log("N° menor: ", sortedMayorToMinorNums[2]);
}
// mayorToMinor(11, 50, 9)

//2)
//Hacer un programa que recibe 4 parámetros
//Comprobar si son números
//Si lo son, decir cuales son palíndromos(capicúa)
//Imprimirlos de menor a mayor

function isPalindrome(...args) {
  let numbersArgs = args.filter((arg) => typeof arg === "number");
  let palindromeNumsToBeSorted = [];
  for (let i = 0; i < numbersArgs.length; i++) {
    let reversedNum = Number(
      numbersArgs[i].toString().split("").reverse().join("")
    );
    if (reversedNum === numbersArgs[i]) {
      palindromeNumsToBeSorted.push(reversedNum);
    }
  }
  palindromeNumsToBeSorted.sort((a, b) => a - b);
  console.log("Results: ", palindromeNumsToBeSorted);
}
// isPalindrome(89898, 232, "abc", 33);

//3)
//Hacer un programa que reciba N numeros
//Sumar por un lado los pares
//Por otro lado sumar los impares.
//Decir si el promedio de pares o impares... (falta enunciado)

function sumNumsParOrImpar(...nums) {
  let totalPar = 0;
  let totalImpar = 0;
  for (let i = 0; i < nums.length; i++) {
    nums[i] % 2 === 0 ? (totalPar += nums[i]) : (totalImpar += nums[i]);
  }
  console.log("TOTAL PAR: ", totalPar);
  console.log("TOTAL IMPAR: ", totalImpar);
}
// sumNumsParOrImpar(11, 4, 5, 8);
