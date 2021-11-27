console.log(`First`);
var city1 = {};
city1["name"] = "ГородN";
city1["population"]=10000000;
console.log('Name:' + city1.name + ' Population:' + city1.population);
console.log('\n');



console.log(`Second`);
var city2 = {name:"ГородM", population: `1e6`};
console.log('Name:' + city2.name + ' Population:' + city2.population);
console.log('\n');



console.log(`Third`);
city1.getName = function (){
    console.log(city1.name)
}
city2.getName = function (){
    console.log(city2.name)
}
city1.getName()
city2.getName()
delete city1.getName
delete city2.getName
console.log('\n');



console.log(`Four`);
function exportStr() {
    return `name=${this.name}\npopulation=${this.population}\n`;
}
city1.exportStr = exportStr;
city2.exportStr = exportStr;
console.log(city1.exportStr());
console.log(city2.exportStr());
console.log('\n');



console.log(`Five`);
function getObj () { return this }
city1.getCity = getObj;
city2.getCity = getObj;
console.log('Name:' + city1.getCity().name + ' Population:' + city1.getCity().population);
console.log('Name:' + city2.getCity().name + ' Population:' + city2.getCity().population);
console.log('\n');