
/* let name = "Raju";

 

  /*-----------convert string to array--------------*/

 /*let array = Array.from(name);


 console.log(typeof array);
 console.log(array);*/



 let join = function () {
	return Array.from(arguments).join('');
}

 let result = join('r','a','j','u');
 
 console.log(result);