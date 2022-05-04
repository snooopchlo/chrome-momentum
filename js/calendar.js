const calendar = document.querySelector("h1#calendar");
const calendarTab = document.querySelector("#calendar-tab");

const daysOfWeekShorten = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
const months = [
  "January",
  "Feburary",
  "March",
  "April",
  "May",
  "June",
  "July",
  "September",
  "October",
  "November",
  "December",
];
function getCalendar() {
  calendar.classList.remove("hidden");
  const newDate = new Date();
  const year = String(newDate.getFullYear());
  const monthNum = newDate.getMonth() + 1;
  const monthStr = months[monthNum];
  const month = String(monthStr.padStart(2, "0"));
  const date = String(newDate.getDate().padStart(2, "0"));
  const dayNum = newDate.getDay() + 1;
  const dayStr = daysOfWeekShorten[dayNum];
  const day = String(dayStr);
  calendar.innerText = `${year}/${month}/${date}/${day}`;
}

calendarTab.addEventListener("click", getCalendar);
