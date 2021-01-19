var str = "The quick brown fox jumps over the lazy dog";
var a = str.split(" ");
var occur = 0;
for (var i = 0; i < a.length; i++) {
if (a[i] === "the" || a[i] === "The") {
       
       ++occur;
       
    
   }
 
}
document.write(occur);