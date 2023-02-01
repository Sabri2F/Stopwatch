var hr= 0;
var min= 0;
var sec= 0;
var count= 0;

var timer = false;

//adding onclick event to every button
document.querySelector('.start').onclick = function(){
    play();
};
document.querySelector('.stop').onclick = function(){
    pause();
};
document.querySelector('.reset').onclick = function(){
    re();
};

//function when clicking start button
function play() {
    if(timer == false){
        timer = true;
        stopwatch();
    }
    // console.log(document.querySelector('.start').innerHTML);
}
//function when clicking stop button
function pause() {
    timer = false;
    // console.log(document.querySelector('.stop').innerHTML);
}
//function when clicking reset button
function re() {
    timer = false;
    hr= 0;
    min= 0;
    sec= 0;
    count= 0;
    document.querySelector('.count').innerHTML= "00";
    document.querySelector('.sec').innerHTML= "00";
    document.querySelector('.min').innerHTML= "00";
    document.querySelector('.hr').innerHTML= "00";
    // console.log(document.querySelector('.reset').innerHTML);
}


//working functionality of stopwatch
function stopwatch(){
    if(timer==true){//codition helps to avoid multiple clicking of start button
    count= count+1;
    if(count == 100){
        sec = sec+1;
        count=0;
    }
    if(sec == 60){
        min = min+1;
        sec=0;
    }
    if(min == 60){
        hr = hr+1;
        min=0;
    }

    //converting the digits to string
    hrStr= hr;
    minStr= min;
    secStr= sec;
    countStr= count;
    
    if(hr < 10){
        hrStr = "0"+hrStr;
    }
    if(min < 10){
        minStr = "0"+minStr;
    }
    if(sec < 10){
        secStr = "0"+secStr;
    }
    if(count < 10){
        countStr = "0"+countStr;
    }

    //displaying the stopwatch time on screen
    document.querySelector('.count').innerHTML= countStr;
    document.querySelector('.sec').innerHTML= secStr;
    document.querySelector('.min').innerHTML= minStr;
    document.querySelector('.hr').innerHTML= hrStr;
    setTimeout("stopwatch()" ,10);//calling stopwatch again after 10milisec
    }
    
}