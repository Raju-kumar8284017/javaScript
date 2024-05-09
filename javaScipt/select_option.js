let nav = document.querySelector('nav');

nav.style.backgroundColor = 'green';
nav.style.padding = '20px';
nav.style.textAlign = 'center';

let a = document.querySelector('nav a');
 a.style.fontSize = '30px';
 a.style.color = 'white';
 a.style.textDecoration = 'none';



 

/*select.addEventListener('change',function(){
	let val = select.value;

	let display = document.querySelector('#msg');

	display.innerHTML = val;

})*/


let select = document.querySelector('#form_select');

 let input = document.querySelector('#form1')

 

 let input2 = document.querySelector('#form2')
 let input3 = document.querySelector('#form3')
 let input4 = document.querySelector('#form4')
 let input5 = document.querySelector('#form5')
 let input6 = document.querySelector('#form6')
 let input7 = document.querySelector('#form7')
 let input0 = document.querySelector('#form0')
 



select.addEventListener('change',function(){
	let val = select.value;

    let display = document.querySelector('#msg');

    if (val == 1) {
    	display.innerHTML = input.innerHTML;
    }else if ( val == 2){
    	display.innerHTML =  input2.innerHTML;
    }else if (val == 3){
    	display.innerHTML = input3.innerHTML;
    }else if (val == 4) {
    	display.innerHTML = input4.innerHTML;
    }else if (val == 5) {
    	display.innerHTML = input5.innerHTML;
    }else if (val == 6) {
    	display.innerHTML = input6.innerHTML;
    }else if (val == 0 ) {
    	display.innerHTML = ' ';
    }else{
    	display.style.display = 'none';
    }
});
