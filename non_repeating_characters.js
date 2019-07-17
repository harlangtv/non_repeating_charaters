// goal: Find the first non-repeating character in string.
// example: 'abcadbc' // d
// example: 'bloomberg' // l

function checkChar(string) {
    // set up initial for loop to check each character in the string
    for(var i = 0; i <= string.length; i++) {       //"a"
       var currentChar = i;
       var currentCount = 1;
       // set two varibales including currentCount to see how many of the characters there are in the string on the first check.
        for(var j = i+1; j <= string.length; j++) {
          // set up second for loop to check remainder of string to see if there are any matching characters
            if(string[j] === string[i]){
                currentCount++;
                // if there are increment currentCount and move onto the next character(i) in the string
            }
            else{
                //do nothing
            }
        }
        // As soon as the first none repeating character is found, return currentChar
        if(currentCount == 1)
            return currentChar;
    }
}
