import {formatError} from './common.js';
import {diffDates, diffToHtml} from './diffDates.js';

const dateCalcForm = document.getElementById('datecalc');
const dateCalcResult = document.getElementById('datecalc__result');

dateCalcForm.addEventListener('submit', handleCalcDates);

function handleCalcDates(event){
    dateCalcResult.innerHTML = ''; //очищать
    event.preventDefault(); //чтоюы не перезагружалась страница при нажатии на кнопку

    let { firstDate, secondDate } = event.target.elements;
    firstDate = firstDate.value, secondDate = secondDate.value;

    if (firstDate && secondDate) {
        const res = diffDates(firstDate, secondDate);
        dateCalcResult.innerHTML = diffToHtml(res);
        //console.log(diffDates(firstDate, secondDate));
    } else {
        dateCalcResult.innerHTML = formatError('Для рассчета промежутка необходимо заполнить оба поля');              
        
    }
}