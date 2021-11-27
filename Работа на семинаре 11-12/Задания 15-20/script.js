console.log(`Fifth`)
function Card(from, to){
    this.from = from;
    this.to = to;
    this.show = function(){
        alert(`from ${this.from} to ${this.to}`);
    }
}
let plc = new Card("Екатеринбург", "Москва");
plc.show();
console.log('\n');


console.log(`sixteen`)
class Human{
    constructor(name, age, height){
        this.name = name,
            this.age = age,
            this.height = height
    }
    getInfo() {
        return `${this.name}, ${this.age}, ${this.height}`;
    }
    get firstname() {
        return `${this.name}`;
    }
}
let humans = [
    new Human("Коля", 23, 180),
    new Human("Даша", 19, 170),
    new Human("Ваня", 18, 192),
    new Human("Петя", 45, 178),
    new Human("Вася", 34, 197),
    new Human("Джони", 40, 168),
    new Human("Катя", 37, 160),
    new Human("Петя", 29, 200),
    new Human("Соня", 21, 172),
    new Human("Женя", 25, 175)
];
for (let human of humans)
    console.log(human.getInfo());
console.log('\n');


console.log(`Seventeen`);
function sortByName(array) {
    return array.sort(function comparator(csf, cfs){ return (csf.name > cfs.name) ? 1 : -1});
}

function sortByHeight(array) {
    return array.sort(function comparator(csf, cfs){return(csf.height < cfs.height) ? 1 : -1});
}
console.log(humans);
console.log(humans[3].getInfo());
console.log(humans[7].firstname);
console.log(sortByHeight(humans));
console.log('\n');


console.log('Eghteen');
let dt1=new Date('January 1, 2045 00:00');
console.log(dt1);
console.log('\n');


console.log(`Nineteen`);
dt2=Math.round(Date.now() / 1000);;
console.log(dt2)
console.log('\n');


console.log(`Twenteen`);
function getDays(iMonth, iYear) {
    return 32 - new Date(iYear, iMonth-1, 32).getDate();
}
console.log(getDays(2,2021))