let number = document.querySelectorAll('.number')

setInterval(function(){
    let seconds = Number(number[3].textContent)
    let minutes = Number(number[2].textContent)
    let hours = Number(number[1].textContent)
    let days = Number(number[0].textContent)
    seconds = seconds - 1

    if(seconds < 0){
        number[3].textContent = 59
        minutes = minutes - 1
        number[2].textContent = minutes
        if(Number(number[2].textContent) < 0){
            number[2].textContent = 59
            hours = hours - 1
            number[1].textContent = hours
            if(Number(number[1].textContent) < 0){
                number[1].textContent = 24
                days = days - 1
                number[0].textContent = days
                if(days < 0){
                    number[0].textContent = 14
                }
            }else {
                number[1].textContent = hours
                number[0].textContent = days
            }
        }else {
            number[2].textContent = minutes
            number[1].textContent = hours
        }
    }else {
        number[3].textContent = seconds
        number[2].textContent = minutes
    };
    save()
}, 1000)