// var todayIsTuesday = true;
// console.log(typeof todayIsTuesday)


// car counter = 0;
// // counter++;
// counter = counter + 2;
// counter += 2;
// // console.log(counter); 

// if (counter > 2) {
//     console.log('Correct answer.');

// }

// var slicesOfPizza = 12;

// if (slicesOfPizza % 3 === 0 && slicesOfPizza % 5 === 0 ) {
//     console.log('there\'s enough for both of you.');

// }

// else if (slicesOfPizza % 3 === 0) {
//     console.log('enough for three.');
// }
// else {
//     console.log('more than enough.')
// }
// var temperature = 50;

// switch (temperature) {
//     case 50:
//         console.log('getting warmer.');
//         break;
//     case 60:
//         console.log('getting closer to spring.');
//         break;
//     case 70:
//         console.log('spring is here.');
//         break;
//     default:
//     console.log('who knows? welcome to indiana.');        
// }
// var favoriteColor = 'powder bleu';
// var message = favoriteColor === 'powder bleu' ? 'my fav color is powder bleu' : 'powder bleu is not my fav';

// console.log(message);

// for (var counter = 0; counter < 5000; counter+= 500) {
//     console.log('hacked.'.repeat(counter));
// }

// var pets = ['dog', 'cat', 'hamster', 'fish', 'bird', 'snake', 'tiger'];

// for (var counter = 0; counter < pets.length; counter++) 

// for (var i = 0; i < 2; i++) {
//     console.log(pets[i]);
// }

// for (var i = 0; i < 20; i++) {
//     document.getElementById('robots').innerHTML += `<img src="http://robohash.org/indy${i}" />`;
// }

// function capitalize(word) {
//     return word.toUpperCase();
// }

// var result = capitalize('almost lunch time.');
// console.log(result);

// function addOne(number) {
//     return number += 1;
// }

// var result = addOne(100);

// console.log(result);

function FizzBuzz(n) {
    var output = '';
    return output;
}


// ----------------Section: Topic A ------------------------------->
// ---------------------------------------------------------------->
//Desc: Columns and rows



// ---------------- End of Section: Topic A ----------------------->



// ----------------Section: Topic A ------------------------------->
// ---------------------------------------------------------------->
//Desc: Surf and Paddle



// ---------------- End of Section: Topic A ----------------------->

var avow = require('avow');

// defining the function, setting up argument
function FizzBuzz (n) {
    var output = '';

    for (var i = 1; i <= n; i++) {
    // tells the loop where to start, how many times to loop, and to go up in number 
        if (i % 3 === 0 && i % 5 === 0) {
            output += 'FizzBuzz';
        }

        else if (i % 5 === 0) {
            output += 'Buzz';
        }
        
       else if (i % 3 === 0) {
            output +='Fizz';
        }

        else {
            output +='.';
        }
    }

//  outside for brackets so it doesn't print loop after the first run, return prints output 
    return output;

}
// calls the function and tells it how many times to run for n
FizzBuzz(15);



avow('FizzBuzz 1 should be .', '.' === FizzBuzz(1), '.', FizzBuzz(1));
avow('FizzBuzz 2 should be ..', '..' === FizzBuzz(2), '..', FizzBuzz(2));
avow('FizzBuzz 3 should be ..Fizz', '..Fizz' === FizzBuzz(3), '..Fizz', FizzBuzz(3));
avow('FizzBuzz 5 should be ..Fizz.Buzz', '..Fizz.Buzz' === FizzBuzz(5), '..Fizz.Buzz', FizzBuzz(5));
avow('FizzBuzz 10 should be ..Fizz.BuzzFizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz' === FizzBuzz(10), '..Fizz.BuzzFizz..FizzBuzz', FizzBuzz(10));
avow('FizzBuzz 15 should be ..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz' === FizzBuzz(15), '..Fizz.BuzzFizz..FizzBuzz.Fizz..FizzBuzz', FizzBuzz(15));
