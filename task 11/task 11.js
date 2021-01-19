var ip = prompt("enter a number");
var sum = 0;
var sip = ip.split("");
for (var i = 0; i < sip.length; i++) {
   sum = sum + parseInt(sip[i]);
     var mean = sum / (i + 1);
}
document.write("<br> Input "+ ip + " Output " + mean );