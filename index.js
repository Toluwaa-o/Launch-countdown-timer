let number = document.querySelectorAll('.number')

// let countDownDate = new Date('Feb 12, 2023 23:00:00').getTime();

// let x = setInterval(function() {
//     let now = new Date().getTime();
//     let distance = countDownDate - now;

//     let days = Math.floor(distance/ (1000 * 60 * 60 * 24));

//     let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60 * 24));

//     let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

//     let seconds = Math.floor((distance % (1000 * 60))/1000);

//     numbers[0].textContent = days
//     numbers[1].textContent = hours
//     numbers[2].textContent = minutes
//     numbers[3].textContent = seconds
// }, 1000)


setInterval(function(){
    let seconds = Number(localStorage.getItem('seconds'))
    seconds = seconds-1
    number[3].textContent = seconds
    let minutes = Number(localStorage.getItem('minutes'))
    number[2].textContent = minutes
    let hours = Number(localStorage.getItem('hours'))
    number[1].textContent = hours
    localStorage.setItem('days', `${number[0].textContent}`)
    let days = Number(localStorage.getItem('days'))
    number[0].textContent = days


    if(seconds < 0){
        number[3].textContent = 59
        minutes = minutes - 1
        number[2].textContent = minutes
    }if(Number(number[2].textContent) < 0){
        number[2].textContent = 59
        hours = hours - 1
        number[1].textContent = hours
    }if(Number(number[1].textContent) < 0){
        number[1].textContent = 59
        days = days - 1
        number[0].textContent = days
    }

    localStorage.setItem('seconds', `${number[3].textContent}`)
    localStorage.setItem('minutes', `${number[2].textContent}`)
    localStorage.setItem('hours', `${number[1].textContent}`)
}, 1000)