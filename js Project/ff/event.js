
 let button = document.querySelector("#button");

 /*button.onclick = function click() {
	console.log("first");
};											in this one issue comes

 button.onclick = function click() {
	console.log("second");
};

 button.onclick = function click() {
	console.log("third");
};*/

/*-------------------------------------------------------*/
  button.addEventListener("click",function () {
 	console.clear();
 	console.log("good");
 });


 /*---------------------------------------------------------*/

   let box = document.querySelector("#box")

   box.addEventListener("click", function() {
   	console.log(event.target.innerHTML);
   });





