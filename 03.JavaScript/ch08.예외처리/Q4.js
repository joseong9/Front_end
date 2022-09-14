const cars =  ['buick skylark 320', 'plymouth satellite', 'amc rebel sst', 'ford torino'];
let model = [];
let com = [];

for (i in cars) {
    let l = cars[i].split(' ');
    com.push(l[0]);
    model.push(cars[i].slice(l[0].length+1));
}
console.log(model, com)