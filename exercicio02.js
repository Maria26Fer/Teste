const verify_fibonacci = (value) => {
  let a = 0;
  let b = 1;
  let result = b;
  do {
    result = a + b;
    a = b;
    b = result;
  } while (result < value);

  if (result === value) {
    console.log("Esse numero PERTENCE a sequencia de fibonacci !!!");
  } else {
    console.log("Esse numero NÃO PERTENCE a sequencia de fibonacci !");
  }
};

verify_fibonacci(337);
verify_fibonacci(1597);
verify_fibonacci(1596);
verify_fibonacci(21);
verify_fibonacci(2);
verify_fibonacci(2);
