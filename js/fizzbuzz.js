// variable declarations
var avow = require('avow');

// names the function, setting up the equation
function FizzBuzz(n) {
    var output = '';
   
}
// places variables as rules for the function...still confused about i++...is it 1+1+1? 3? so maybe this means i is 1, 1 is less than or equal to n; 3?
    for (var i = 1; i <= n; i++) {

    } 
    // says if 1 can be divisable by three or five the output should read FizzBuzz
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz';
        }
    // if it is divisable by 5 the output should be buzz
        else if (i % 5 === 0) {
            output += 'Buzz';
        }
    // if it is divisable by 3 the output should be fizz     
       else if (i % 3 === 0) {
            output +='Fizz';
        }
// if it is not divisable by either, the output is a period
        else {
        output +='.'; }
        
    

//  the special command that tells it not to loop ?
    return output;
        }


// tests

avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));