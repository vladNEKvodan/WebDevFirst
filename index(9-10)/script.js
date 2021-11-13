console.log(`First`);
let resh="#";
for (let i=1; i<8;i++){
    console.log(resh);
    resh+="#";
}


console.log(`Second`);
for (let i=1; i<101;i++){
    if (i%3==0 && i%5!=0 ){
        console.log(`Fizz`);
    }else if (i%5==0 && i%3!=0 ){
        console.log(`Buzz`);
    }else if (i%5==0 && i%3==0 ){
        console.log(`FizzBuzz`);
    }else{
        console.log(i);
    }
}


console.log(`Third`);
let resh1="# # # #";
let reshs=" # # # #";
ot="";
for (let i=1; i<8;i++){
    if (i%2==1){
        ot=ot+resh1+"\n";
    }
    if (i%2==0){
        ot=ot+reshs+"\n";
    }
}
console.log(ot);


console.log(`four`);
function f1(num1,num2){
    if (num1>num2){
        console.log(`Минимальное: ${num2}`);
    }else{
        console.log(`Минимальное:  ${num1}`);
    }
}
f1(35,222);


console.log(`five`);
countVar = 0;
function countBs(s){
    for (a = 0;a < s.length -1; a++){
        if (s.charAt(a) == "B"){
            countVar ++;
        }
    }
    return countVar;
}
s = "BUBBLEGUM";
console.log(`B in ${s}: ${countBs(s)}`);

countVar = 0;
function countChar(s, B){
    for (a = 0;a < s.length -1; a++){
        if (s.charAt(a) == B){
            countVar ++;
        }
    }
    return countVar;
}
B = "U";
console.log(`${B} in ${s}: ${countChar(s, B)}`);


console.log(`six`);
function range(start,stop,step=1){
    let k=[];
    if (Number(step) > 0) {
        for (var i = start; i <= stop; i+=step) {
            k.push(i);
        }
    }else{
        for (var i = start; i >= stop; i+=step) {
            k.push(i);
        }
    }
    console.log(k);
}
range(1,5);
range(10,5,-2);
function sum(arr){
    let su=0;
    for (v=0; v<arr.length;v++){
        su+=arr[v];
    }
    console.log(`Сумма = ${su}`);
}
sum([10,2,3,4,5])


console.log(`Seven`);
function reverseArray(array_2){
    array = [];
    let j = 0;
    for (let a = array_2.length-1; a > -1; a--){
        array[j] = array_2[a];
        j++;
    }
    return array;
}
console.log(reverseArray([1,2,3,4,5]));
function reverseArrayInPlace(array_2){
    for (let a = 0; a < array_2.length/2; a++){
        let t = array_2[a];
        array_2[a] = array_2[array_2.length - a - 1];
        array_2[array_2.length - a - 1] = t;
    }
    return array_2;
}

console.log(reverseArrayInPlace([1,2,3,4,5,6,7,8,12]));