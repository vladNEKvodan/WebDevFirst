console.log('First');
let gorod = {};
gorod.name = "ГородN";
gorod.population = "10.000.000";
console.log('Name: ' + gorod.name + ', Population: ' + gorod.population);
console.log('\n');



console.log('Second');
let gorad = {name: "ГородM", population: '1e6'};
console.log('Name: ' + gorad.name + ', Population: ' + gorad.population);
console.log('\n');



console.log('Third');
function getName() {
    return this.name;
}
gorod.getName = getName;
gorad.getName = getName;
console.log(gorod.getName());
console.log(gorad.getName());
console.log('\n');



console.log('Four');
function exportStr() {
    return `name=${this.name}\npopulation=${this.population}\n`;
}
gorod.exportStr = exportStr;
gorad.exportStr = exportStr;
console.log(gorod.exportStr());
console.log(gorad.exportStr());
console.log('\n');



console.log('Five');
function getObj () { return this }
gorod.getCity = getObj;
gorad.getCity = getObj;
console.log('Name: ' + gorod.getCity().name + ', Population: ' + gorod.getCity().population);
console.log('Name: ' + gorad.getCity().name + ', Population: ' + gorad.getCity().population);