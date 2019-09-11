/* function printNumbers(from, to) {
    let current = from;

    let timerId = setInterval(function() {
        countdown.textContent = current;
        if (current === to) {
            clearInterval(timerId);
        }
        current++;
    }, 1000);
}

printNumbers(5, 10); */

// let timeNowString = timeNow.toString();
// countdown.textContent = timeNowString;

let countdown = document.querySelector('.countdown');

setInterval(function() {
    let timeSet = new Date('January 1, 2020').getTime();
    let timeNow = new Date(Date.now()).getTime();

    let timeDiff = timeSet - timeNow;
    //Conversions
    let seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);
    let minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
    let hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let days = Math.floor(timeDiff / (1000 * 60 * 60 * 24));

    function doubleDigit(number) {
        if (number < 10) {
            return '0' + number;
        } else {
            return number;
        }
    }
    seconds = doubleDigit(seconds);
    minutes = doubleDigit(minutes);
    hours = doubleDigit(hours);
    days = doubleDigit(days);

    countdown.textContent = days + ':' + hours + ':' + minutes + ':' + seconds;
}, 1000);


