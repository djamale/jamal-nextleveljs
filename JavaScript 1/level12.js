// Level 12
console.log("Level 12");

var constantaI = 0;
var intervaltime = setInterval(repeat, 2000);

function repeat() {
    if (constantaI >= 0 && constantaI <= 5) {
        console.log("constantaI :", constantaI);
        constantaI++;

    } else {
        console.log("constantaI has reached target limit : ", constantaI);
        clearInterval(intervaltime);

    }  
}


