var startTimerButton = document.querySelector('.startTimer');
var pauseTimerButton = document.querySelector('.pauseTimer');
var timerDisplay = document.querySelector('.timer');
var startTime;
var updatedTime;
var difference;
var tInterval;
var savedTime;
var paused = 0;
var running = 0;
var hit = 0;
var miss = 0;
var thisinterval = 1;
var log = "10 Second Whole Intervals: <br>";
var current = 0; // 0 is no data entered for interval, 1 is data entered for interval, 2 is interval has passed so please enter data
var timeflag = 0; // this is a check to see if the interval check has been run for this interval
var length = 10;
var type = 1; // 0 is partial interval recording, 1 is whole interval recording, 2 will be momentary time sampling
var chosentype = 0;
var total = 0;
var totalCorrect = 0;
var intervalPercent=0;

function startTimer(){
  if(!running){
    startTime = new Date().getTime();
    tInterval = setInterval(getShowTime, 1);
// change 1 to 1000 above to run script every second instead of every millisecond. one other change will be needed in the getShowTime() function below for this to work. see comment there.

    paused = 0;
    running = 1;

  }
}
function pauseTimer(){
  if (!difference){
    // if timer never started, don't allow pause button to do anything
  } else if (!paused) {
    clearInterval(tInterval);
    savedTime = difference;
    paused = 1;
    running = 0;

  } else {
// if the timer was already paused, when they click pause again, start the timer again
startTimer();
  }
}
function resetTimer(){
  clearInterval(tInterval);
  savedTime = 0;
  difference = 0;
  paused = 0;
  running = 0;
  timerDisplay.innerHTML = 'Start';
  current = 0;
  hit = 0;
  miss = 0;
  document.getElementById("notyet").innerHTML = miss;
  document.getElementById("correct").innerHTML = hit;
  intervalPercent = totalCorrect / total * 100;
  if (thisinterval == 1)
  {log = log + ". . . "}
else
{
	log = log + "<br>Correct: " + total + "/" + totalCorrect + "<br>Percent correct: " + intervalPercent + "%";
}

  thisinterval = 1;

   if (type == 0)
 {
 log = log + "<br><br>" + length + " Second Partial Intervals:<br>";
 }
  else if (type == 1)
 {
 log = log + "<br><br>" + length + " Second Whole Intervals:<br>";
 }
  else if (type == 2)
 {
 log = log + "<br><br>" + length + " Second Interval Time Sampling:<br>";
 }
}
function getShowTime(){
  updatedTime = new Date().getTime();
  if (savedTime){
    difference = (updatedTime - startTime) + savedTime;
  } else {
    difference =  updatedTime - startTime;
  }
  // var days = Math.floor(difference / (1000 * 60 * 60 * 24));
  var hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((difference % (1000 * 60)) / 1000);
  var milliseconds = Math.floor((difference % (1000 * 60)) / 100);
hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0" + milliseconds : milliseconds;
  timerDisplay.innerHTML = hours + ':' + minutes + ':' + seconds;

  // these next few lines use the background color to illustrate data status
  // first we want to see if our current time is divisible by 10. This let's us know if our interval is coming to a close. If we have our data for the interval the color switches back to light blue, but if we don't have our data the color will switch over to red.
 if (current == 0)
	  {
   body.style.backgroundColor = "#ffddcc";
	  }
	  else if (current == 1)
	  {
 body.style.backgroundColor = "#e6f2ff";
	  }
	  else if (current == 2)
	  {
 body.style.backgroundColor = "#ff6600";
	  }
//fixfix
 if (timeflag)
 { }
else
{
 if (seconds % length === 0)  {
	  if (current  == 0 && thisinterval == 1 && seconds < 1)
	  {
		  current = 0;
	  }
	  else if (current != 1)
	  {
       current = 2;
	  }
	  else
	  {
	  current = 0;
	  }

	  timeflag = 1;
	  setTimeout(flagFlip, 1111);
  }
else{

}
}


}

function flagFlip()
{
	timeflag=0;
}


function plus() // when the + button is pressed
{
log = log + "(" + thisinterval + "+)"; // add the + to the log
hit = hit + 1;	// increment the number of hits
total = total + 1;
totalCorrect = totalCorrect + 1;
document.getElementById("correct").innerHTML = hit;
thisinterval = thisinterval + 1; // increment the interval
if (type == 0){current = 1;}
else if (type == 1) {current = 0}
else if (type == 2) {current = 0}
}

function minus() // same as plus above
{
log = log + "(" + thisinterval + "-)";
miss = miss + 1;
total = total +1;
document.getElementById("notyet").innerHTML = miss;
thisinterval = thisinterval + 1;
if (type == 0){current = 0;}
else if (type == 1) {current = 1}
else if (type == 2) {current = 0}
}

function displayLog()
{
	document.getElementById("logbyintervals").innerHTML = log;
}







function hamburger() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}

function intervalSet(){

 //  pull the interval from the input box
 var box = document.getElementById("myNumber").value;
 length = box;

 resetTimer();

}

function typeSet(){
 // getting the type value of the recording method
 chosentype = document.getElementById("iType").value;
 if (chosentype == 0)
 {
 document.getElementById("topLeft").innerHTML = "Partial";
 type = 0;
 }
  else if (chosentype == 1)
 {
 document.getElementById("topLeft").innerHTML = "Whole";
 type = 1;
 }
  else if (chosentype == 2)
 {
 document.getElementById("topLeft").innerHTML = "Momentary";
 type = 2;
 }

 resetTimer();

}

function refresh() {
	var html = log;
	html = html.replace(/<style([\s\S]*?)<\/style>/gi, '');
html = html.replace(/<script([\s\S]*?)<\/script>/gi, '');
html = html.replace(/<\/div>/ig, '\n');
html = html.replace(/<\/li>/ig, '\n');
html = html.replace(/<li>/ig, '  *  ');
html = html.replace(/<\/ul>/ig, '\n');
html = html.replace(/<\/p>/ig, '\n');
html = html.replace(/<br\s*[\/]?>/gi, "\n");
html = html.replace(/<[^>]+>/ig, '');
		 document.getElementById("logDownload").innerHTML = html;
}


function about(){
  alert("ABA Interval Tool\nversion 0.2\nCopyright © Robert Jones III 2020");
}

function copy() {
	    document.getElementById(id).select();
    document.execCommand('copy');
}
}