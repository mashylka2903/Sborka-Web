const pageDateCalculator = document.getElementById('Date_Calculator'),
      pageTimer = document.getElementById('Timer'),
      btnDateCalculator = document.getElementById('datecalc_btn'),
      btnTimer = document.getElementById('timer-btn');

btnDateCalculator.addEventListener('click', function(){
    pageDateCalculator.hidden = false;
    pageTimer.hidden = true;
});

btnTimer.addEventListener('click', function(){
    pageTimer.hidden = false;
    pageDateCalculator.hidden = true;
});
