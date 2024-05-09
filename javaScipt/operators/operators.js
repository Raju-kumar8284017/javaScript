/*
  js operators
*/

/*
    1) assignment operators   :  =

    2) Arithmetic Operators : +  -  *  /  % 

    3) short hand math operators : +=  -=   *=  /= 

    4) Conditional Operators : <     >    <=    >=   !==

    5) Unary Operators :  ++    --

    6) logical operators : &&  ||  ^

    7) ternary operators : ?:

    8) equality operators : ==   ===


*/

// Assignment Operators : =

let test = 10;

console.log(test);

//Arithmetic Operators : +  -  *  /  % 

let num1 = 10;
let num2 = 21;
console.log(`sum : ${num1 + num2}`);
console.log(`sum : ${num1 - num2}`);
console.log(`sum : ${num1 * num2}`);
console.log(`sum : ${num1 / num2}`);

//  for %

if(num1 % 2 ===0){
	console.log(`${num1} is an even`);
}
  else{
  	console.log(`${num1} is an odd`)
  }

  if (num2 % 2 ===0){
  	console.log(`${num2} is an even`);
  }
  else
  	  console.log(`${num2} is an odd`)


//short hand math operators : +=  -=   *=  /= 

  	let one = 10;
  	let two = 30;
  	let add = 10;
  	add = add + (one + two);
  	console.log(add);        //output is 50


  	let a = 10;
  	let b = 30;
  	let sum = 10;
  	sum = sum + (a + b);
  	sum +=  (a + b);
  	console.log(sum); // output is 90


//Conditional Operators : <     >    <=    >=   !==

  	let mark = 75;

  	if (mark <= 30) {
  		console.log(`you fail `);
  	}
 else {
 	console.log(`you pass`);
 }


// Unary Operators :  ++    --

 let x = 10;
 x = x+1
 x +=  1
 x++ ;
 console.log(x)