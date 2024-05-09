

let nav = document.querySelector('nav');

nav.style.backgroundColor = 'green';
nav.style.padding = '20px';
nav.style.textAlign = 'center';

let a = document.querySelector('nav a');
 a.style.fontSize = '30px';
 a.style.color = 'white';
 a.style.textDecoration = 'none';



 let div = document.querySelector('div');
 		div.style.backgroundColor = 'green';
 		div.style.height = "300px";
          div.style.width = "400px";
          div.style.border = "2px solid black";
          div.style.margin = "auto";
          div.style.marginTop ="100px";
          div.style.padding ="10px";
          div.style.borderRadius = '20px';

let h1= document.querySelector('h1');

 		h1.style.height = '70px';
 		h1.style.width = '250px';
 		h1.style.margin = '20px';
 		h1.style.padding = '15px';


    function greet(massage) {
    	h1.innerHTML =massage;
    	h1.style.color ='white';
    	h1.style.backgroundColor ='yellow';

    }



    let btn1 = document.querySelector('#btn1');

     btn1.addEventListener('click',function() {
     	 greet('Good morning');
     });

     let btn2 = document.querySelector('#btn2');

     btn2.addEventListener('click',function() {
     	 greet('Good afternoon');
     });

     let btn3 = document.querySelector('#btn3');

     btn3.addEventListener('click',function() {
     	 greet('Good evening');
     });

     let btn4 = document.querySelector('#btn4');

     btn4.addEventListener('click',function() {
     	 greet('Good night');
     });

     let btn5 = document.querySelector('#btn5');

     btn5.addEventListener('click',function() {
     	 greet(' ');
     });






