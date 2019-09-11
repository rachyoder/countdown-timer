let countdown = document.querySelector('.countdown');

var timer = setInterval(function() {
    let timeSet = new Date('January 1, 2020 ').getTime();
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
    if (timeDiff <= 0) {
        clearInterval(timer);
    }
}, 1000);