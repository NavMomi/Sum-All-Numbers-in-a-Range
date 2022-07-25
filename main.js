
//We'll pass you an array of two numbers. Return the sum of those two numbers and all numbers between them.

function sumAll(arr) {
    if (arr[0] > arr[1]) {
        let temp = arr[0];
        arr[0] = arr[1];
        arr[1] = temp;
  }
    // result here for sum all the rang and store it.
    let result = 0;
    for (let i = arr[0]; i <= arr[1]; i++) {
        result = result + i;
    }
    console.log(result);
}

sumAll([1, 4]);
