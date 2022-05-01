var let = prompt("What is your name?");
document.getElementById("myName").innerHTML = let;

let date = new Date();
let days = ["Pazar","Pazartesi","Salı","Çarşamba","Perşembe","Cuma","Cumartesi"];

let time = document.querySelector("#myClock")

time.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()} ${days[date.getUTCDay()]}`


