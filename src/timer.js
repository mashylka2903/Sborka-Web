const timerForm = document.getElementById('timercount'),
      timerResult = document.getElementById('timer__result'),
      buttonStart = document.getElementById('start'),
      buttonStop = document.getElementById('stop');

let num = document.getElementById('timerNumber');


buttonStart.addEventListener("click", handleTimer);


function handleTimer(event){
    timerResult.innerHTML="";
    event.preventDefault();

    num = parseInt(num.value) * 60;


const timer = setInterval(function () {
    let seconds = num %60; // Получаем секунды
    let minutes = num/60 %60; // Получаем минуты
    let hour = num/60/60 %60; // Получаем час
    
    if (num <= 0) {
        clearInterval(timer);        
        let audio = new Audio('../Fireball.mp3');
        audio.play();
    } else { 
        let strTimer = `
        ${Math.trunc(hour)} час(ов) : ${Math.trunc(minutes)} минут(ы) : ${Math.trunc(seconds)} секунд(ы)`;
        timerResult.innerHTML = strTimer;
    }
    --num;
    
}, 1000);

buttonStop.addEventListener("click", function(event) {
    event.preventDefault();
    clearInterval(timer);
});

}