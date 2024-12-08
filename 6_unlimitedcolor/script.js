const start=document.getElementById('start');
const stop=document.getElementById('stop');

const randomcolor=function(){
    const hex='0123456789ABCDEF';
    let color='#';
    for(let i=0;i<6;i++){
        color+=hex[Math.floor(Math.random()*16)]
    }
    return color;
}

function changebgcolor(){
    document.body.style.backgroundColor=randomcolor();
}
let intervalId;
const startchangingcolor=function(){
    if(!intervalId){

        intervalId=setInterval(changebgcolor,1000);
    }
}

const stopchangingcolor=function(){
  clearInterval(intervalId);
  intervalId=null;
}

start.addEventListener('click',startchangingcolor);
stop.addEventListener('click',stopchangingcolor);