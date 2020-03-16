var hours = ['6 am ', '7 am ', '8 am ', '9 am ', '10 am ', '11 am ', '12 pm ', '1 pm ', '2 pm ', '3 pm ', '4 pm ', '5 pm ', '6 pm ', '7 pm ', '8 pm '];
var locationsArry=[];
function Location(min, max, avg, name) {
    this.min = min;
    this.max = max;
    this.avg = avg;
    this.name = name;
    this.total = 0;
    locationsArry.push(this);

}

Location.prototype.render = function () {
    var ulEliment = document.getElementById('ulEliment');
    var liElementName = document.createElement('h2');
    ulEliment.appendChild(liElementName);
    liElementName.textContent = this.name;
    console.log(this.name);
    for (var i = 0; i < hours.length; i++) {
        var liElement = document.createElement('li');
        ulEliment.appendChild(liElement);
        this.total += getRandomInt(this.min, this.max);
        liElement.textContent = `${hours[i]}: ${getRandomInt(this.min, this.max)} cookies `;
    }
    var liTotal = document.createElement('li');
    ulEliment.appendChild(liTotal);
    liTotal.textContent = ` Total: ${this.total} cookies`;
};

// function render() {     
//        var ulEliment = document.getElementById('ulEliment');
//        var liElementName = document.createElement('h2');
//        ulEliment.appendChild(liElementName);
//        liElementName.textContent=this.name;
//         console.log(this.name);
//     for (var i = 0; i < hours.length; i++) {
//         var liElement = document.createElement('li');
//         ulEliment.appendChild(liElement);
//         this.total += getRandomInt(this.min, this.max);
//         liElement.textContent = `${hours[i]}: ${this.total} cookies `;


//     }
//     var liTotal = document.createElement('li');
//     ulEliment.appendChild(liTotal);
//     liTotal.textContent = ` Total: ${total} cookies`;
// }



// healper function 
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}
 new Location(23, 65, 6.3, 'seatel');
new Location(3, 24, 1.2, 'Tokyo');
 new Location(11, 38, 3.7, 'Dubai');
 new Location(20, 38, 2.3, 'Paris');
 new Location(2, 16, 4.6, 'Lima');
for(var j=0;j<locationsArry.length;j++){
    locationsArry[j].render();
}