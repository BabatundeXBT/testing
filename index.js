let currentDate = new Date();

let weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

let dayOfWeek = currentDate.getUTCDay();

let weekDayName = weekdays[dayOfWeek];

// displaying the current day
document.getElementById("date").textContent = weekDayName;

// displaying the current time
document.getElementById("time").textContent = currentDate.getUTCHours() + ':' + currentDate.getUTCMinutes() + ':' + currentDate.getUTCSeconds();
