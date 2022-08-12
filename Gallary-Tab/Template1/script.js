// https://github.com/ZazerConer/Templates-For-AppCreator24.
// Video Gallery.

// Select document "tabs".
let tabs = document.querySelectorAll(".tabs h3");
let tabContents = document.querySelectorAll(".tab-content div");
// Click to activate/remove a tab.
tabs.forEach((tab, index) => {
tab.addEventListener("click", () => {
// Remove "active" when clicking on another tab and switching to other content.
tabContents.forEach((content) => {
content.classList.remove("active");
});
tabs.forEach((tab) => {
tab.classList.remove("active");
});
// Current tab (active).
tabContents[index].classList.add("active");
tabs[index].classList.add("active");
});
});

//----------------------------------------------//

// Click the image and show up the container.
function myFunction(vids) {
// Get the expanded video.
var expandVid = document.getElementById("expandedVid");
// Use the same src in the expanded video as the video being clicked on from the grid.
expandVid.src = vids.src;
// Show the container element (hidden with CSS).
expandVid.parentElement.style.display = "block";
}

// Load content.
window.addEventListener("DOMContentLoaded", () => {
// Get element id (Play/Pause button).
const video = document.getElementById("expandedVid"),
PlayIcons = document.getElementById("PlayIcons"),
Play = document.getElementById("Play");
// Auto set Play/Pause button icons.
video.addEventListener("play", () => {
PlayIcons.innerHTML = "pause";
});
video.addEventListener("pause", () => {
PlayIcons.innerHTML = "play_arrow"	;
});
// Click to Play/Pause.
Play.addEventListener("click", () => {
if (video.paused) { video.play(); 
}
else { video.pause(); }
});
// Enable/Disable controls.
video.addEventListener("canplay", () => {
Play.disabled = false;
});
video.addEventListener("waiting", () => {
Play.disabled = true;
});
});
