var id = prompt("enter your email address");
var letU = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var a;
var letL = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var num = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
if (id.indexOf("@") !== -1)  { 
    for (var i = 0; i < 26; i++) {
        for (var j = 0; j < 26; j++) {
            for (var k = 0; k < id.length; k++) {
                if (id.charAt(k) === (letU[i] || letL[j])) {
                    if (id.charAt(indexOf("@")+1) === (letU[i] || letU[j])) {
                    
                       
                            a = true; 
                            break;
                       
                    }
                }    
            }
        }   
     
    }
    
    document.write("valid email id");
} 
else {
a = false;
document.write("invalid email");
}

