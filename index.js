const secretNumber = randomInt()

function randomInt(){
    return Math.floor(Math.random() * 100) + 1
}

function getUserGuess(){
    const stringValue = document.getElementById("user-input").value
    return parseInt(stringValue, 10)
}


document.addEventListener('keyup', function (event) {
    if (event.key === 'Enter') {
        
        if (secretNumber === getUserGuess()){
            setMessage('CORRECT!!!')
        }

         else if (secretNumber > getUserGuess()) {
            setMessage('Number too low!')
        }

         else if (secretNumber < getUserGuess()) {
            setMessage('Number too high!')
        }
        
        document.getElementById('user-input').value = ''
    }
})

function setMessage(msg){
    document.getElementById("message").innerText = msg
}