let startDate = new Date("5/7/2022");
let currentDate = new Date();

let totalTimes = startDate.getTime() - currentDate.getTime();

let totalDays = Math.ceil(totalTimes / (1000 * 3600 * 24));

const targetDiv = document.getElementById("textDays");
targetDiv.textContent = totalDays.toString() + " days";