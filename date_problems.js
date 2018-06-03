var givenDate = new Date(2018, 1, 27);
var givenYear = givenDate.getFullYear();
var givenDay = givenDate.getDay();
var givenMonth = givenDate.getMonth();
var givenDayString = givenDate.toLocaleString('en-us', {  weekday: 'long' });
var monthEndDate = findLastDateOfMonth();
var inputDate = givenDate.getDate();

function findLastDateOfMonth() {
	var nextMonth;
	if (givenMonth == 11) {
		nextMonth = 0;
	}
	else {
		nextMonth = givenMonth + 1;
	}
	var nextMonthStartDate = new Date(givenYear, nextMonth, 1);
	var epochValue = nextMonthStartDate.getTime() - 86400000;
	monthEndDate =  new Date(epochValue);
	return monthEndDate;
}



if(inputDate > 20)
{
	var lastWeekStartDate = new Date(givenYear, givenMonth, monthEndDate.getDate() - 7);
	if (inputDate >= lastWeekStartDate.getDate()) {
		console.log("Yes, It is last " + givenDayString);
	}
	else {
		console.log("No, It is not last " + givenDayString);
	}
}
else {
	console.log("No It is not last " + givenDayString);
}
