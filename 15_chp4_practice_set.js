// que 1. what will print in javsacript
//    console.log("har\"".length)
let str = "har\"";
console.log(str.length)

// que 2. explore the includes , starts with , ends with function of a string
// includes , starts with , ends with -----> gives output in true or false

// includes function
const sentence = 'The quick brown fox jumps over the lazy dog.';
const word = 'fox';
console.log(sentence.includes(word))
console.log(`The word "${word}" ${sentence.includes(word) ? 'is' : 'is not'} in the sentence`);

// starts with
const str11 = 'Saturday night plans';
console.log(str11.startsWith('Sat'));
console.log(str11.startsWith('Sat', 3));

// ends with
const str1 = 'Cats are the best!';
console.log(str1.length)
console.log(str1.endsWith('best!'));
console.log(str1.endsWith('best', 17));

const str2 = 'Is this a question?';
console.log(str2.endsWith('question'));

//  que 3. write a program to convert a string into lower case
//    already done in previous file



//  que 4. extract the amount out of string     *******imp que******
//       " please give rs 1000"
let strinp = "Please give Rs 1000"
let amount = Number.parseInt(strinp.slice(15))
console.log(amount)
console.log(typeof (amount))


// QUE 5. TRY TO CHANGE FOURTH CAHARCTER OF STRING
let boss = "kumariaya" 
// you cannot change the existing string
//  but here is the another approach in which you can replace it
console.log(boss.replace("kuma","kumn"))