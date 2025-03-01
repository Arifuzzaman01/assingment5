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
const fullDate = `${newDays} ${month} ${dates} ${year}`
document.getElementById('full-date').innerText = fullDate;


document.getElementById("bg-change").addEventListener("click", function () {
  let randomColor = "#" + Math.floor(Math.random() * 750).toString(16);
  document.body.style.backgroundColor = randomColor;
});
document.getElementById("discover").addEventListener("click", function (event) {
  event.preventDefault();
  window.location.href = "question.html";
});
function cardAccess(btnId, cardTitle) {
  document.getElementById(btnId).addEventListener("click", function (event) {
    event.preventDefault();
    alert("Board Update Successfully");
    const taskAssign = document.getElementById("task-assign").innerText;
    const convertedTask = parseInt(taskAssign) || 0;
    const navCheck = document.getElementById("nav-check").innerText;
    const convertedCheck = parseInt(navCheck);
    document.getElementById("nav-check").innerText = convertedCheck + 1;
    document.getElementById("task-assign").innerText = convertedTask - 1;
    const cardBtn = document.getElementById(btnId);
    cardBtn.disabled = true;
    cardBtn.style.backgroundColor = "gray";
    const title = document.getElementById(cardTitle).innerText;

    // time and Date
    const date = new Date();
    const hours = date.getHours();
    const minute = date.getMinutes();
    const second = date.getSeconds();
    const fullTime = `${hours}:${minute}:${second} `;

    function getFullTime() {
      if (hours >= 12) {
        const obosisto = hours % 12;
        let fullTime = `${obosisto}:${minute}:${second} PM `;
        return fullTime;
      } else {
        let fullTime = `${hours}:${minute}:${second} AM `;
        return fullTime;
      }
    }
    

    // end time and Date

    const history = document.getElementById("history");
    const p = document.createElement("p");

    p.classList.add("bg-gray-100");
    p.classList.add("p-2");
    p.classList.add("m-2");
    p.innerText = ` You have completed the task ${title} ${getFullTime()}
      `;

    history.appendChild(p);
  });
}
document
  .getElementById("history-btn")
  .addEventListener("click", function (event) {
    event.preventDefault();
    document.getElementById("history").innerText = "";
  });

cardAccess("card-1-btn", "card-1-title");
cardAccess("card-2-btn", "card-2-title");
cardAccess("card-3-btn", "card-3-title");
cardAccess("card-4-btn", "card-4-title");
cardAccess("card-5-btn", "card-5-title");
cardAccess("card-6-btn", "card-6-title");
