// Find the sum
var Num1, Num2;
 Num1 = 5
 Num2 = 6
let Sum = Num1 + Num2
console.log(Sum)

//switch up your operators
let Sub = Num1 - Num2
console.log(Sub)

// Find the average

//var A, B, C, D, E, F, G, H, I, J, K;
var [A, B, C, D, E, F, G, H, I, J, K] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
Sum1 = A + B + C + D + E
Avg1 = Sum1/5
console.log(Avg1)
Sum2 = F + G + H + I + J
Avg2 = Sum2/5
console.log(Avg2)
Sum = Sum1 + Sum2  
Avg = Sum / 10
console.log(Avg)



//Average of given numbers

function arrayAverage(arr){
    var sum = 0;
    for(var i in arr) {
        sum += arr[i];
    }
    var numbersCnt = arr.length;
    return (sum / numbersCnt);
}
var arr = new Array(4, 10, 22, -30, 55);
var avg = arrayAverage(arr);
console.log(avg)

var arr = new Array(68, 7, -22, 9, 100);
var avg = arrayAverage(arr);
console.log(avg)

