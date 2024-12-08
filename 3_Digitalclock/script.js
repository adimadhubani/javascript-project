const clock=document.querySelector('.clock');
 
setInterval(function(){
    let date=new Date();
    // console.log(date);
    // console.log(date.toLocaleTimeString());
    clock.innerHTML=date.toLocaleTimeString();
    // clock.innerHTML=date.toLocaleDateString();
},1000);