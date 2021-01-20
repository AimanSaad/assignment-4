var age = prompt("what is your age?");
var date = new Date();
var nowms = date.getTime();
var nowYr = nowms / (1000 * 60 * 60 * 24 * 365); 
var ageyr = Math.round(nowYr + 1970 - age);
document.write("Your age is " + age + "<br> Your birth year is " + ageyr);