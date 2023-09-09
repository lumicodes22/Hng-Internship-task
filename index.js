document.addEventListener("DOMContentLoaded", function() {
  const currentUTCTimeEl = document.getElementById('currentUTCTime');
  const currentDayOfTheWeekEl = document.getElementById('currentDayOfTheWeek');


  function updateDateandTime() {
      const date = new Date();
      const utcTime = date.getTime();

      //Get the name of the days of the week
      const daysOfTheWeek = [
       'Sunday',
       'Monday',
       'Tuesday',
       'Wednesday',
       'Thursday',
       'Friday',
       'Saturday',
      ];
      const currentDayOfTheWeek = daysOfTheWeek[date.getUTCDay()];

      currentUTCTimeEl.textContent = utcTime;
      currentDayOfTheWeekEl.textContent = currentDayOfTheWeek;
  }

  setInterval(updateDateandTime, 1000);
  updateDateandTime();
});