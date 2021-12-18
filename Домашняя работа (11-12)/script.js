console.log(`six`);
let obj = {}
obj.method1 = function() {
    return this
}
obj.method2 = function() {
    return this
}
obj.method3 = function() {
    return "метод3"
}
console.log(obj.method1().method2().method3())


console.log(`seven`);
let d1 = [45, 78, 10, 3];
d1[7] = 100;
console.log(d1);
console.log(d1[6]);
console.log(d1[7]);


console.log(`eight`);
let d2 = [45, 78, 10, 3];
let sum = 0;
for(let a in d2) {
    sum += d2[a];
}
console.log(sum);


console.log(`nine`);
let d3 = [45, 78, 10, 3];
d3[7] = 100;
let sum1 = 0;
for(let a in d3) {
    sum1 += d3[a];
}
console.log(sum1);


console.log(`ten`);
let d4 = [45, 78, 10, 3];
function my(a,b) {
    return b-a;
}
console.log(d4.sort(my));


console.log(`twelve`);
function Vector(x, y) {
    this.x = x;
    this.y = y;
}
Vector.prototype.plus = function(vec_2) {
    let x_x1 = this.x + vec_2.x;
    let y_y1 = this.y + vec_2.y;
    return new Vector(x_x1, y_y1);
};
Vector.prototype.minus = function(vec_2) {
    let x_x1 = this.x - vec_2.x;
    let y_y1 = this.y - vec_2.y;
    return new Vector(x_x1, y_y1);
};
Object.defineProperty(Vector.prototype, "length", {
    get: function() {
        return Math.sqrt(this.x * this.x + this.y * this.y);
    }
});
console.log(new Vector(1, 2).plus(new Vector(2, 3)));
console.log(new Vector(1, 2).minus(new Vector(2, 3)));
console.log(new Vector(3, 4).length);


console.log(`thirteen`);
function StretchCell(inner, width, height) {
    this.inner = inner;
    this.width = width;
    this.height = height;
}
function repeat(string, times) {
    let edns = "";
    for (let i = 0; i < times; ++i)
        edns += string;
    return edns;
}
function TextCell(text) {
    this.text = text.split("\n");
}
TextCell.prototype.minWidth = function() {
    return this.text.reduce(function(width, line) { return Math.max(width, line.length); }, 0);
};
TextCell.prototype.minHeight = function() {
    return this.text.length;
};
TextCell.prototype.draw = function(width, height) {
    let edns = [];
    for (let i = 0; i < height; ++i) {
        let line = this.text[i] || "";
        edns.push(line + repeat(" ", width - line.length));
    }
    return edns;
};
StretchCell.prototype.minWidth = function() {
    return Math.max(this.width, this.inner.minWidth());
};
StretchCell.prototype.minHeight = function() {
    return Math.max(this.height, this.inner.minHeight());
};
StretchCell.prototype.draw = function(width, height) {
    return this.inner.draw(width, height);
}
let sc = new StretchCell(new TextCell("abc"), 1, 2);
console.log(sc.minWidth());
console.log(sc.minHeight());
console.log(sc.draw(3, 2));


console.log(`fourteen`);
function logFive (next){
    len=next.length;
    if (len>5){
        len =5;
    }
    for (var i = 0; i < len; i++) {
        console.log(next[i]);
    }
}
function ArSeq(arr){
    logFive(arr)
}
function RangeSeq(from, to){
    let numbers = []
    for (let i = from; i <= to; i++) {
        numbers.push(i)
    }
    logFive(numbers)
}
logFive(new ArSeq([1, 2]));
console.log(`--------------`);
logFive(new RangeSeq(100, 1000));


console.log(`TwentyTwo`)
Number.prototype.isEven=function(){
    return this % 2===0;
};
Number.prototype.isOdd=function(){
    return !this.isEven();
}
console.log((5).isOdd())
console.log('\n');


console.log(`TwentyThree`)
function Chain(value){
    this.value = value,
        this.plus = function(x) {
            this.value += x;
            return this;
        },
        this.minus = function(x) {
            this.value -= x;
            return this;
        },
        this.mult = function(x) {
            this.value *= x;
            return this;
        },
        this.div = function(x) {
            this.value /= x;
            return this;
        }
}
console.log(new Chain(21).plus(11).minus(4).mult(2).div(7).value);


console.log(`TwentyFour`)
function Unit(x, y) {
    this.x = x;
    this.y = y;
}
Unit.prototype.Fighter=function(z) {
    return wgs = [this.x, this.y, z];

};
console.log(new Unit(1, 2).Fighter(15));