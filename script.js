const todayDiv = document.getElementById("today")
const timeDiv = document.getElementById("time")

todayDiv.textContent = "나는 날짜"
timeDiv.textContent = "나는 시간"

function getTime(){

    let now = new Date();
    timeDiv.textContent = now;
    let year = now.getFullYear();
    let month = now.getMonth() + 1;
    let date = now.getDate();
    let second = now.getSeconds();

    month = month < 10 ? `0${month}` : month;

    todayDiv.textContent=`${year}년 ${month}월 ${date}일 ${second}초`

}

getTime()
setInterval(getTime,1000)