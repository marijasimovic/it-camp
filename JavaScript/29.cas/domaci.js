// Domaci zadaci:
// 1. Write a JavaScript program to check whether two numbers are in range 40..60 or in the range 70..100 inclusive.

// 2. Write a JavaScript program to find the larger number from the two given positive integers, the two numbers are in the range 40..60 inclusive.

//2.
function vecibroj(num1, num2) {
  if (num1 >= 40 && num1 <= 60 && num2 >= 40 && num2 <= 60) {
    if (num1 > num2) {
      return num1;
    } else if (num2 > num1) {
      return num2;
    } else if (num1 === num2) {
      return "brjevi su jednaki";
    }
  } else {
    return "brojevi su izmedju 40 i 60";
  }
}

//1.
function proveribr(num1, num2) {
  const br1 = (num1 >= 40 && num1 <= 60) || (num2 >= 40 && num2 <= 60);
  const br2 = (num1 >= 70 && num1 <= 100) || (num2 >= 70 && num2 <= 100);

  if (br1 || br2) {
    return "Brojevi su u datom rangu";
  } else {
    return "Brojevi nisu u rangu";
  }
}
