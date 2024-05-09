

 let input = document.querySelector("#inputtext");

 let buttons = document.querySelectorAll("button");

 let btnarray = Array.from(buttons);

  let string =" ";

   
    btnarray.forEach(btn =>{

    
      btn.addEventListener("click",function(event) {

         string += event.target.innerHTML;

         input.value = string;

          if(event.target.innerHTML == 'del'){
            string = string.substring(0, string.length-1);
            input.value = string;

          

          }else {
            string += event.target.innerHTML;
            input.value = string;
          }
      });
         
   });







   /*
    function btn() {
       for (var num = 0; num < btnarray.length; num++) {

        console.log(btnarray[num]);
    };
   };*/

 

   

  




 


 

 

 


