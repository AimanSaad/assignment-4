var num = parseFloat(prompt("enter a number"));
var deci = parseInt(prompt("to how many decimal places you want it to be rounded?"));
var rndnum = num.toFixed(deci);
document.write(rndnum);