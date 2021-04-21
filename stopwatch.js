let minutes = 0;
let seconds = 0;
let centiseconds = 0;
let stoptime = true;

function stopwatchStart(){
	if (stoptime == true) {
        stoptime = false;
        timerCycle();
    }
}

function  stopwatchStop(){
	if (stoptime == false) {
		stoptime = true;
	}
}

function stopwatchReset(){
	minutes = 0;
	seconds = 0;
	centiseconds = 0;
	document.getElementById("stopwatch").innerHTML = "00:00:00"
}

function timerCycle() {
	if(stoptime== false){
		centiseconds = parseInt(centiseconds);
		seconds = parseInt(seconds);
		minutes = parseInt(minutes);
		centiseconds++;
		if (centiseconds == 60) {
			seconds = seconds + 1;
			centiseconds = 0;
		}
		if (seconds == 60) {
			minutes = minutes + 1;
			seconds = 0;
		}
		if (centiseconds < 10) centiseconds = "0" + centiseconds;
		if (seconds < 10) seconds = "0" + seconds;
		if (minutes < 10) minutes = "0" + minutes;

		document.getElementById("stopwatch").innerHTML = minutes + ":" + seconds + ":" + centiseconds;
		setTimeout("timerCycle()", 10);
	}
}
