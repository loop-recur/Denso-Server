require('support/date');
DateFormatter = (function() {
	var date = function() {
		return Date.today().toString("M/dd/yy");
	}
	
	var _getParsedDate = function(date) {
		return date.getHours()+":"+date.getMinutes();
	}
	
	var time = function() {
		var date = new Date();
		try{ var parsed_date = _getParsedDate(date); }catch(e){var parsed_date = date; }
		var real_date = Date.parse(parsed_date);
		if(real_date) return real_date.toString('h:mm tt');
	}
	
	return {date : date, time: time}
})();
