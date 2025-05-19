function checkPrime() {
  const numInput = document.getElementById("number");
  const result = document.getElementById("result");
  const n = parseFloat(numInput.value);

  if (isNaN(n) || n <= 1 || !Number.isInteger(n)) {
    alert("Please enter an integer greater than 1.");
    result.textContent = "";
    numInput.value = "";
    numInput.focus();
    return;
  }

  let isPrime = true;

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      isPrime = false;
      break;
    }
  }

  result.textContent = isPrime
    ? `${n} is a Prime Number.`
    : `${n} is not a Prime Number.`;
}
