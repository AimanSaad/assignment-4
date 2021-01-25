var pswrd = prompt("enter a password");
var b;
 if ((pswrd.length >= 8) && (pswrd.charAt(0) !== fromCharCode(0, 1, 2, 3)) {
      for (var i = 0; i < pswrd.length-1; i++) {
         if ((fromCharCode(90) >= pswrd.charAt(i) > fromCharCode(64)) || (fromCharCode(122) >= pswrd.charAt(i) > fromCharCode(096))) {
            if (fromCharCode(9) >= pswrd.charAt(i)> fromCharCode(0)) {
               document.write("thank you");
               b = true;
               break;
            }
         }
      }
      
   }
else {
b = false;
document.write("enter a valid password");
}
