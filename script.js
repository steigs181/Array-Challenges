// Challenge 1:

function alwaysHungry(arr) {
    let foodCounter = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] === "food") {
            console.log ("yummy")
            foodCounter += 1;
        }
    }
    if (foodCounter === 0) {
        console.log ("I'm hungry");
    }
}
alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);

console.log ("----------------------------------------")

// Challenge 2: 

function highPass(arr, cutoff) {
    var filteredArr = [];
    for (var i = 0; i < arr.length; i++) {
        if ( arr[i] > cutoff) {
            filteredArr.push(arr[i]);
        }
    }
    return filteredArr;
}
var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); 

console.log("-----------------------------------------")

// Challenge 3:

function betterThanAverage(arr) {
    var sum = 0;
    for (var i = 0; i <= arr.length; i++) {
        if (i == arr.length) {
            sum = Math.floor(sum / arr.length);
        }
        else {
            sum += arr[i];
        }
    }
    var count = 0
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > sum) {
            count++;
        }
    }
    return count;
}
var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); 

console.log("------------------------------------------------");

// CHallenge 4:

function reverse(arr) {
    var newArr = [];
    for (var i = arr.length-1; i >= 0; i--) {
        newArr.push(arr[i]);
    }
    arr = newArr;
    return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); 

console.log("------------------------------------------");

// Challenge 5: 

function fibonacciArray(n) {
    var fibArr = [0, 1];

    for (var i = 2; i < 10; i++) {
        fibArr.push(fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2]);
    }
    return fibArr;
}
var result = fibonacciArray(10);
console.log(result); 