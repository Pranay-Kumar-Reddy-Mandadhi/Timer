let minTag=document.getElementById('min');
let secTag=document.getElementById('sec');
let msecTag=document.getElementById('m-sec');


let Startbtn=document.getElementById('start-btn');
let Stopbtn=document.getElementById('stop-btn');
let resetbtn=document.getElementById('reset-btn');


minTag.textContent="15";
secTag.textContent="00";
msecTag.textContent="00";

let milliseconds=1000;
let seconds=59;
let minutes=14;


let flag=true;

 function timer()
 {
    milliseconds=milliseconds-10;
    if(milliseconds==0)
    {
        seconds=seconds-1;
        milliseconds=1000;
        if(seconds==0)
        {
            minutes=minutes-1;
            seconds=60;
        }
    }
    minTag.textContent=concat(minutes);
    secTag.textContent=concat(seconds);
    msecTag.textContent=concat(milliseconds);
 }

 function concat(time)
 {
    if(time<=9)
    {
        return "0";
    }
    else{
        return time;
    }
 }

let interval=null;
 Startbtn.addEventListener('click',function()
{
    if(flag){
    interval=setInterval(timer,10);
    flag=false;
    }
});

Stopbtn.addEventListener('click',function()
{
  if(!flag)
  {
    clearInterval(interval);
    flag=true;
  }
});

resetbtn.addEventListener('click',function()
{
    clearInterval(interval);
    flag=true;
    minTag.textContent="15";
    secTag.textContent="00";
    msecTag.textContent="00";

    milliseconds=1000;
    seconds=0;
    minutes=15;

})
