var hours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm ', '8 pm', 'total'];
var locationsArry = [];
// healper function 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
function Location(min, max, avg, name) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.name = name;
    this.total = 0;
    this.totalarr = [];
    locationsArry.push(this);

}
// to render header 
var conataner = document.getElementById('conataner');
var trEliment = document.createElement('tr');
conataner.appendChild(trEliment);
tdEliment = document.createElement('td');
trEliment.appendChild(tdEliment);
tdEliment.textContent = " ";
for (var i = 1; i < hours.length; i++) {
    tdEliment = document.createElement('td');
    trEliment.appendChild(tdEliment);
    tdEliment.textContent = hours[i];
}
// to render objects 
Location.prototype.render = function () {
    var trEliment = document.createElement('tr');
    conataner.appendChild(trEliment);
    tdEliment = document.createElement('td');
    trEliment.appendChild(tdEliment);
    tdEliment.textContent = this.name;
    for (var x = 1; x < hours.length; x++) {
        var tdElimentrand = document.createElement('td');
        trEliment.appendChild(tdElimentrand);
        var random = getRandomInt(this.min, this.max);
        this.total += random;
        // console.log(this.total);
        tdElimentrand.textContent = random;
        this.totalarr.push(random);

    }
    tdElimentrand.textContent = this.total;
    // total row
    console.log(this.totalarr);
};
function Totalfunction() {
    var trTotalEliment = document.createElement('tr');
    var totalrow = 0;
    conataner.appendChild(trTotalEliment);
    tdEliment = document.createElement('td');
    trTotalEliment.appendChild(tdEliment);
    trTotalEliment.textContent = "Toatal";
    // for (var h = 0; h < hours.length; h++) {
    //     for (var o = 0; o < locationsArry.length; o++) {
    //         totalrow += this.totalarr[o];
    //     }
    //     trTotalEliment.textContent = totalrow;
    // }
}
new Location(23, 65, 6.3, 'seatel');
new Location(3, 24, 1.2, 'Tokyo');
new Location(11, 38, 3.7, 'Dubai');
new Location(20, 38, 2.3, 'Paris');
new Location(2, 16, 4.6, 'Lima');
for (var j = 0; j < locationsArry.length; j++) {
    locationsArry[j].render();
}
Totalfunction();