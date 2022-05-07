import { increaseSayNo, increaseSayYes, getStartDate } from "./firebaseUtil.js";

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("heartDays");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function () {
    console.log("clicked");
    modal.style.display = "flex";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var yesButton = document.getElementById("yesBtn");

yesButton.onclick = function () {
    increaseSayYes();
}

var noBtn = document.getElementById("noBtn");

noBtn.onclick = function() {
    increaseSayNo();
}

// let startDate = new Date(getStartDate());

// console.log('startDate: ' + startDate);
let currentDate = new Date();

let totalTimes = currentDate.getTime() - getStartDate();

let totalDays = Math.ceil(totalTimes / (1000 * 3600 * 24));

const targetDiv = document.getElementById("textDays");
targetDiv.textContent = totalDays.toString() + " days";

