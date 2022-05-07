import { getStartDate } from "./firebaseUtil.js"

let currentDate = new Date();

let totalTimes = currentDate.getTime() - getStartDate();

let totalDays = Math.ceil(totalTimes / (1000 * 3600 * 24));

console.log(currentDate);

const targetDiv = document.getElementById("textDays");
targetDiv.textContent = totalDays.toString() + " days";