
let newtag = document.createElement("h1");

console.log(newtag);

let newtext = document.createTextNode("this is a simple text");

console.log(newtext);



let newcomment = document.createComment("this is a comment");
console.log(newcomment);



/*--------------------for append text in any tag---------------------*/

  newtag.appendChild(newtext);
  console.log(newtag);


 document.getElementById('app').appendChild(newtag);
  console.log(app);

  /*-----------------------insert before-------------------------------------*/

  let tag = document.createElement('h3');
  console.log(tag);

  let text = document.createTextNode("this text append before all content");
 // console.log(text);

  tag.appendChild(text);

 let target = document.getElementById('app');

 target.insertBefore(tag, target.childNodes[0]);



 /*----------------------------adjacent------------------------------------------------*/

  /*-----insertAdjacentElement-----------------------------*/

   let newelement = document.createElement("h1");

   //console.log(newelement);

   let nweparagraph = document.createTextNode('testing the adjacent');

   //console.log(nweparagraph);

   newelement.appendChild(nweparagraph);

   let trgt = document.getElementById('app1');

   //trgt.insertAdjacentElement("beforebegin", newelement);

    trgt.insertAdjacentElement("afterbegin", newelement);




    /*-----insertAdjacentHTML---------------------------------*/


    	let target1 = document.getElementById("app2");

    	let adjhtml = "<h1>insert_Adjacent_HTML</h1>";

    	target1.insertAdjacentHTML("afterend", adjhtml);

    	target1.insertAdjacentHTML("beforeend", adjhtml);



 /*-----insertAdjacentText---------------------------------*/


    	let xyz = document.getElementById('app3');

    	let abc = "insertAdjacentText";

    	//xyz.insertAdjacentText('beforebegin', abc);

        //xyz.insertAdjacentText('afterbegin', abc);

    	//xyz.insertAdjacentText('beforeend', abc);

    	xyz.insertAdjacentText('afterend', abc);
