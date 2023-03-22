var daysItem=document.querySelector("#days");
var hoursItem=document.querySelector("#hours");
var minutesItem=document.querySelector("#minutes");
var secondsItem=document.querySelector("#seconds");
 function countDown() {
var ramadanDate=new Date("24 march 2023");
var currentDate=new Date();
var diff=ramadanDate.getTime()-currentDate.getTime();

var days=Math.floor(diff/1000/60/60/24);
var hours=Math.floor(diff/1000/60/60)%24;
var minutes=Math.floor(diff/1000/60)%60;
var seconds=Math.floor(diff/1000)%60;
daysItem.innerHTML=days;
hoursItem.innerHTML=hours;
minutesItem.innerHTML=minutes;
secondsItem.innerHTML=seconds;
 }
 countDown()

 setInterval(countDown,1000)

 