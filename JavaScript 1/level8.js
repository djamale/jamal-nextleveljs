// Level 8
console.log("Level 8");

var title = "jamalu berdikari";

function titleCase(str) {
    return str.replace(/(?:^|\s)\w/g, function (match) {
        return match.toUpperCase();
    })
}

console.log(titleCase(title));