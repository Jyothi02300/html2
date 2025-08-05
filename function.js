//functions

function fun1(){//function name without parameters
    console.log("hello")
    //console.log(a +b)
}

fun1();//function call
fun1();
fun1();
fun1();
//with parameters passing
function f1(a, b){
    console.log(a + b)
    //console.log(a +b)
}
//f1(4,7);
f1(5,8);

function f2(c,g){
    return c*g
}
console.log(f2(4,6));//

function f5(d,i){
    return d-i;
}
console.log(f5(4,8));

//arrow functions
const g1=(a,b) =>{
    return a * b
}
console.log(g1(2,5))// multippication of two numbers output:10
//square the number

let g5=(s)=>{

    return s*s
}
console.log(g5(6))//output 36
// multiplying with another number
var g2=(t) =>{
    return t*5
}
console.log(g2(10));//output:50

var g3=(n,m)=>{return n * m}
console.log(`return value:${g3(5,7)}`)//using template concept

//foreach method
let names = ["jyothi","jhansi","bindu","sravanthi"];

names.forEach(function (name) {
    console.log("Hello," + name + "!")
});

let nums =[2, 4, 6, 8];

nums.forEach(function(n) {
    console.log(n + "squared is" + (n * n));
    
});

///map
let arr = [1, 2, 3, 4, 5];

let newarr =arr.map((val) => {
    return val * 2;
});

console.log(newarr);

let celsiusTemps = [0, 10, 20, 30];

let fahrenheitTemps = celsiusTemps.map((celsius) => {
    return (celsius * 9/5) +32;
});

console.log(fahrenheitTemps);

let arr1 = [1, 2, 3, 4, 5, 6,];

let newArr = arr.filter((val) => {
    return val % 2 === 0;
});

console.log(newArr);

let marks = [35, 67, 89, 22, 50, 18, 90];

let passedStudents = marks.filter((mark) => {
    return mark >= 40;
});
console.log(passedStudents);

let numbers = [1, 2, 3, 4, 5];

let total = numbers.reduce((prev, curr) => {
    return prev + curr;
}, 0);

console.log(total);


let num= [2, 3, 4];

let product = nums.reduce((acc, val) => {
    return acc * val;
}, 1);
console.log(product);

function add(a, b) {
  return a + b;
}

