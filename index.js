let number = 2
if (number < 0) {
    console.log('Error');
}else {
    let fact = 1;
    for (i = 1; i <= number; i++) {
        fact *= i;
    }
    console.log(fact);
}
