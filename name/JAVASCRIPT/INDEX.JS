console.log("hello");
let btn= document.querySelector("button")
let body= document.querySelector("body")
let isDARK=true

btn.addEventListener("click",function(){
    // body.style.backgroundColor="blue"
    if(isDARK){
        body.style.backgroundColor='red'
    }
    else{
        body.style.backgroundColor='green'
    }
    isDARK=!isDARK



})