import { increaseSayNo, increaseSayYes } from "./firebaseUtil.js";

var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("heartDays");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
// btn.onclick = function () {
//     console.log("clicked");
//     modal.style.display = "flex";
// } em iu chọn xong ròi nên comment hoi

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

var yesButton = document.getElementById("yesBtn");

yesButton.onclick = function () {
    increaseSayYes();
    modal.style.display = "none";
}

var noBtn = document.getElementById("noBtn");

noBtn.onclick = function () {
    increaseSayNo();
    alert("Chả iu tui 🥺🥺");
    alert("Chả thương tui 🥺🥺");
    modal.style.display = "none";
}