let inputEL= document.querySelector('input')
let butt = document.querySelectorAll('button')


for(let button of butt){
    button.addEventListener('click', function(e){
   let btntext= e.target.innerText;
//    console.log(teztt);
if(btntext === 'C'){
    inputEL.value ="";
}else if(btntext ==='='){
    try{
        inputEL.value = eval(inputEL.value)

    }
    catch(e){
        inputEL.value ="";
    }
}
   else{
     inputEL.value += btntext;
   }
})
}