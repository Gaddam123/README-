var a = "tech.at.core"
function myFunction(str) {
    var result = "";
    var freq = {};
    for(let i=0;i<str.length;i++){
       let char = str[i];
       if(freq[char]) {
        freq[char]++;
       } else {
        freq[char] =1
        result = result+char;
       }
    }
    return result;
    }
console.log(myFunction(a));