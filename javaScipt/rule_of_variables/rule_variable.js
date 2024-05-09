/*

*/
let a = 10;
let b = 20;
let c = 30;

let d = 40;


 //ausume when we teke a-z variable then ...

/*--we not write a veriable like a, b, c, 
 
 we must be write a veriable like everyone understand by all a

  as a profisanal 

  ---------------------rules for viarable declearation ---------------------------

  1) all variables are case sensitive

  ex:- let name = 'Raju';

     console.log(name) ----->its right

     but

     console.log(Name)-------------> its get error

  ---------------------------------------------------------------------------------

  2)all variable name must be in CamelCase

   ex:-
        let employeename ='john';  ---------> this is exicute but its not a profesional

        that why

        let myEmployeeName ='john'-----------> its best and readable and meaningfull




        3)cahars allowed are a-z, A-Z, $, _ , 0-9

    ex-
       let number = 10;  // valid
       let $number = 10;  // valid
       let _number = 10;  // valid
       let number_1 = 10;  // valid
       let 1number = 10;  // not valid ---1 is not allows variable must not start with a number

     let #name = 'john'; //not valid----
                                         because # is not allowed
*/



// a variable must not be re-declared
  
  // its like an --------id-----------

let name = 'raju';
let Name = 'john';

console.log(name) //its print

but

let name = 'raju';
let name = 'john';

console.log(name)  //its error ---because ---same   variables  are declare 2 times

