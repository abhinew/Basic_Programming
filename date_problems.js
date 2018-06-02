var givenDate = new Date(2018, 7, 26);
var givenYear = givenDate.getFullYear();
var givenDay = givenDate.getDay();
var givenMonth = givenDate.getMonth();
var givenDayString = givenDate.toLocaleString('en-us', {  weekday: 'long' });


function numberOfDaysInMonth(givenMonth) {
	if(givenMonth%2 != 0){
		return 31
	}
	else {
		return 30
	}
}

var numberOfDays = numberOfDaysInMonth(givenMonth);
//console.log("numberofdays: "+ numberOfDays);

var lastWeekEndDate = new Date(givenYear, givenMonth, numberOfDays); 
var lastWeekStartDate = new Date(givenYear, givenMonth, numberOfDays-6);


function findLastGivenDay() {
	for(i=numberOfDays; i>= numberOfDays-7; i--) {
		var tempDate = new Date(givenYear, givenMonth, i);
		if (tempDate.getDay() == givenDay) {
			return tempDate;
		}
		else {
			continue;
		}
	}
}

var lastDate = findLastGivenDay();

//console.log("last day " + lastDate);

if(givenDate-lastDate == 0) {
	console.log("yes, It is last " + givenDayString);
}
else {
	console.log("no, It is not last " + givenDayString);
}


