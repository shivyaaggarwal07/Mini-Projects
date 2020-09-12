// Array of weekdays
const weekdays=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months =['January','February','March','April','May','June','July','August','September','October','November','December'];

// Getting the system time using date object
function digitalTime()
{
	var date = new Date();
	var day = date.getDay();
	var mon = date.getMonth();
	var daynum = date.getDate();
	var year = date.getFullYear();
	var hrs = date.getHours();
	var mins = date.getMinutes();
	var secs = date.getSeconds();

	// update the value of period using 12-hour clock format
	if(hrs>12)
	{
		hrs= hrs-12;
		document.querySelector('.meridiem').innerHTML = 'PM';
	}
	else
	{
		hrs= hrs-12;
		document.querySelector('.meridiem').innerHTML = 'AM';

	}

	//padding the single digit value with a 0 to get a 2 digit value
	hrs = hrs>=10?0 + hrs:"0" + hrs;
	mins = mins>=10?0 + mins:"0" + mins;
	secs = secs>=10 ?0 + secs: "0" + secs;

	//Reset the values that is refreshing
	document.querySelector('.day').innerHTML=weekdays[day];
	document.querySelector('.month').innerHTML=months[mon];
	document.querySelector('.date').innerHTML=daynum;
	document.querySelector('.year').innerHTML=year;
	document.querySelector('.hours').innerHTML=hrs;
	document.querySelector('.minutes').innerHTML=mins;
	document.querySelector('.seconds').innerHTML=secs;

	//refreshing the clock every 1 sec
	// requestAnimationFrame(digitalTime);
	window.setInterval("digitalTime()",1);
}
//calling the function
digitalTime();
