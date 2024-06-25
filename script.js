console.log(5);
console.log("привет");
let playerName = "antru665"
console.log("доброе утро, " + playerName);
console.log(playerName + " твои монеты: 10000")
let level = 123
console.log(playerName + ", твой уровень: " + level);
let scoreTitle = document.getElementById("scoreTitle")
let cookie = document.getElementById("cookie")
cookie.style.pointerEvents = 'none'
let score = 0
// время                            
let time = 30
let canPlay = false
let timer = document.getElementById("timer")
let start = document.getElementById("start")
let timerInterval
console.log("start");
cookie.onclick = function () {
    // прибавляется счет
    score = score + 1
    console.log(score);
    scoreTitle.innerHTML = "score: " + score
    cookie.style.transform = "scale(0.95)"
    setTimeout(function () {
        cookie.style.transform = "scale(1)"
    }, 100)
}
start.onclick = function () {
 canPlay = true
 time = 30
 score = 0 
 scoreTitle.innerHTML = "score: " + score
 timer.innerHTML = 'time: '+time
    clearInterval(timerInterval)
    console.log("игра началась");
cookie.style.pointerEvents = 'auto'
    timerInterval = setInterval(function () {
        time = time - 1
        if (time == 0) {
            canPlay = false
            cookie.style.pointerEvents = 'none'
            console.log('game over');
            clearInterval(timerInterval)
        }
        timer.innerHTML = 'time: '+time
    }, 1000)
}
document.onkeydown = function (event) {
    if(canPlay && event.keyCode==32 && time > 0){
        score = score + 1
        canPlay= false
    }
    scoreTitle.innerHTML = "score: " + score
    cookie.style.transform = "scale(0.95)"
    setTimeout(function () {
        cookie.style.transform = "scale(1)"
    }, 100)
}
document.onkeyup = function ()
{
canPlay = true
}// добавить 10 комментариев
