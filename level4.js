// Level 4
console.log("Level 4");

let title = "Learning Hard JavaScript"

function toTitleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    })
}

console.log(title.toUpperCase())
console.log(title.toLowerCase())
console.log(toTitleCase(title))


var compare1 = 10.25;
var compare2 = 10.21;
var resultcompare = (compare1 > compare2) ? compare1 + " is bigger than" + compare2 : compare1 + "is smaller than" + compare2;
console.log(resultcompare);

var constantaI = 0;
var intervaltimer = setInterval(repeat, 1000);


function repeat() {
    if (constantaI >= 0 && constantaI <= 10) {
        console.log("constantaI :", constantaI);
        constantaI++;
    } else {
        console.log("constantaI has reached target limit : ", constantaI);
        clearInterval(intervaltimer);
    }

}