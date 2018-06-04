function findLastWeekStartDate (givenDate) {
	var givenYear = givenDate.getFullYear();
	var givenDay = givenDate.getDay();
	var givenMonth = givenDate.getMonth();
	var givenDayString = givenDate.toLocaleString('en-us', {  weekday: 'long' });
	//var monthEndDate = findLastDateOfMonth();
	var inputDate = givenDate.getDate();
	var nextMonth;
	if (givenMonth == 11) {
		nextMonth = 0;
	}
	else {
		nextMonth = givenMonth + 1;
	}
	var nextMonthStartDate = new Date(givenYear, nextMonth, 1);
	var epochValue = nextMonthStartDate.getTime() - 86400000;
	var monthEndDate =  new Date(epochValue);
	var monthEndDay = monthEndDate.getDay();
	var numberOfDays = monthEndDate.getDate();
	if (monthEndDay == 0) {
		lastWeekStartDate = monthEndDate;
	} 
	else {
		lastWeekStartDate = new Date(givenYear, givenMonth, numberOfDays - monthEndDay);
	}
	return lastWeekStartDate;
}

var inputDate = new Date(2016, 1, 27);
var lastWeekStartDate = findLastWeekStartDate(inputDate);
if(inputDate >= lastWeekStartDate) {
	console.log("Yes, it falls in last week of the month");
}
else {
	console.log("No, It doesn't fall in last week of the month");
}