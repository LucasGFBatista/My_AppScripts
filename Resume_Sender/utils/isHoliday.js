function isHoliday() {
  // Determines how many events are happening today.
  var today = new Date();
  var calendars = CalendarApp.getCalendarsByName('Holidays in Brazil');

  // Check if any calendars were found
  if (calendars.length > 0) {

    var events = calendars[0].getEventsForDay(today);

    if (events > 0) {
      return true;
    }

  } else {
    Logger.log('No calendar named "Holidays in Brazil" found.');

  }
}
