var pswrd = prompt("enter a password");
var letU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var letL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
for (var j = 0; j < 10; j++) {
   if  ((pswrd.length >=8) && (pswrd.charAt(0) !== num[j])) {
      for (var i = 0; i < pswrd.length; i++) {
         if (pswrd.charAt(i) === (letU || letL) && (num)) {
            document.write("thank you");
             var b = true;
             break;
         }
      }
      
   }    
} 
else {
b = false;
document.write("enter a valid password");
}
