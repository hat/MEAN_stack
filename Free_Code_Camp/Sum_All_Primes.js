function isPrime(num) {
  for (var i = num - 1; i > 1; i--) {
    if (num % i === 0)
      return false;
  }
  return true;
}


function sumPrimes(num) {
  var total = 0;
  for (var i = 2; i <= num; i++) {
    if (isPrime(i)) {
      total += i;
      console.log(total);
    }
  }
  return total;
}

sumPrimes(10);
