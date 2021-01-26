var ip = prompt("enter an integer");
var aip = ip.split("");
console.log(aip);
var int = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
var unit = ["one", "two", "three", "four", "five", "six", "seven", "eight", "nine", "zero"];
var tens = ["ten", "twenty", "thirty", "forty", "fifty", "sixty", "seventy", "eighty", "ninety"];
var nxt = ["hundered", "thousand"];
if (aip.length === 1) {//if input will be one digit the if loop should run
    for (var i = 0; i < int.length; i++) {//ten times
        if (aip[0] === int[i]) {// checking input against every element of int array

           document.write(uint[i]);
        }
    }
}
else {
    document.write("not found");
}