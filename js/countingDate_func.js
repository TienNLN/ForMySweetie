let startDate = new Date("5/7/2022");

let currentDate = new Date();

let times = startDate.getTime() - currentDate.getTime();

console.log(times);

let totalDays = Math.ceil(times / (1000 * 3600 * 24));

console.log(totalDays);

const targetDiv = document.getElementById("textDays");

targetDiv.textContent = totalDays.toString() + " days";