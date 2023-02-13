let myTextarea = document.querySelectorAll("textarea");
let myBtn = document.querySelector("button");


// myBtn.addEventListener("click", myCode());


function myCode(){
    let myNewLine = myTextarea[0].value.split("،");
    // trim array elements
    let arrayOne = myNewLine.map((e) => e.trim());
    //  the function under test #####
    // if(myTextarea[0].value ===""){
    //     alert("الحقل فاضي!");
    //     event.preventDefault();
    // }else{
        
    // }
    for(let ele1 of arrayOne){
        if(ele1.match(/"الأبعاد"w+/)){
            console.log(ele1);
        }else{
            console.log("bad");
        }
    }


    if(myNewLine.length >= 3){
         let firstElement = arrayOne.shift();
         let lastElement = arrayOne.pop();
         arrayOne.sort((a, b) => b.length - a.length);
         console.log(arrayOne);
        //  copy Text to clipboard
         var copyText = firstElement + "، "+ arrayOne.join("، ") + "، " + lastElement;
         navigator.clipboard.writeText(copyText);
        //  get Result in New Array
         let printResult = arrayOne;
         printResult.unshift(firstElement);
         printResult.push(lastElement);
        //  Delete previous textarea Value
         myTextarea[1].value = "";
        //  print Result in Textarea
         for(let ele of printResult){
            myTextarea[1].value +=`• ${ele}\n`;
         }
        // myBtn.style.backgroundColor = "#cdebcb";
    }else{
        let firstElement = arrayOne.shift();
         arrayOne.sort((a, b) => b.length - a.length);
        //  copy Text to clipboard
         var copyText = firstElement + "، " + arrayOne.join("، ");
         navigator.clipboard.writeText(copyText);
        //  Delete previous textarea Value
         myTextarea[1].value = "";
        //  print Result in Textarea
        let printResult = arrayOne;
        printResult.unshift(firstElement);
        // myTextarea[1].value = arrayOne.join("\n");
        for(let ele of printResult){
            myTextarea[1].value +=`• ${ele}\n`;
        }
    }
}