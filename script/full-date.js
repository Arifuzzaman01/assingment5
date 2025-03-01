const date = new Date();
const getMonth = date.getDate();
const dates = date.getDate();
const days = ["Sun", "Mon", "Tues", "Wed", "Thurs", "Fri", "Sat"];
const newDays = days[date.getDay()];

const getMonths = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

const month = getMonths[date.getMonth()];
const year = date.getFullYear();

const hours = date.getHours();
const minute = date.getMinutes();
const second = date.getSeconds();
const fullTime = `${hours}:${minute}:${second} `;


const fullDate = `${newDays} ${month} ${dates} ${year}`
document.getElementById('full-date').innerText = fullDate;

function getFullTime() {
  if (hours >= 12) {
    const obosisto = hours % 12;
    let fullTime = `${obosisto}:${minute}:${second} PM `;
    return fullTime;
  } else {
    let fullTime = `${hours}:${minute}:${second} AM `
    return fullTime;
  }
  
}
const time = getFullTime()

