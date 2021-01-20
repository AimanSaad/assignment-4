var date = new Date();
var now = date.getTime();
var nowmin = now / (60 * 1000);
document.write("Current Date: " + date + "<br> ELapsed milliseconds since January 1,1970: " + now + "<br>Elapsed minutes since January 1, 1970: " + Math.round(nowmin));