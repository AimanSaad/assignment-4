var date = new Date();
var Hrs = date.getHours();
document.write("<br>current date: " + date);
new Date();
var ndate = date.setHours(--Hrs);
document.write("<br>1 hour ago, it was " + date);