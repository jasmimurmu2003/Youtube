var menuIcon = document.querySelector(".menu-icon");
var sidebar = document.querySelector(".sidebar");
var container = document.querySelector(".container");
menuIcon.onclick = function(){
 sidebar.classList.toggle("small-sidebar");
 container.classList.toggle("large-container");
}

document.addEventListener("DOMContentLoaded", function() {
 const showHideButton = document.getElementById("ShowHide");
 const commentSection = document.getElementById("comment");

 showHideButton.addEventListener("click", function() {
   if (commentSection.style.display === "none" || commentSection.style.display === "") {
     commentSection.style.display = "block"; // Show the comments
   } else {
     commentSection.style.display = "none"; // Hide the comments
   }
 });
});