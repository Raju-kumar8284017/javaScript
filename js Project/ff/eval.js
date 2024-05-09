
/*let text = 10 + 10;

console.log(text);   //its work....*/



/*let text = "10 + 10";

console.log(text); */ // its not work because its in coute ,,,it means its not a number its string


/*----------that why we use-------- Eval--------it convert string to number-----------*/

  /*let text = "10 + 10";

  let result = eval(text);

  console.log(result);*/ 



/*------example---------------------*/

  let input = document.querySelector("#input");

  let button = document.querySelector("#button");

  let h2 = document.querySelector("#h2");



    button.addEventListener("click", function (e) {

    	let result = eval(input.value);
    	console.log(result);
    	h2.innerHTML = result;
    });