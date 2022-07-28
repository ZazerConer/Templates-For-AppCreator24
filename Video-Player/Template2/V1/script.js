// https://github.com/ZazerConer/Templates-For-AppCreator24.
// Video Player with Playlist (V1).

window.addEventListener("DOMContentLoaded", () => {

// Playlist.
// Change to your own! ("<b>" bold | "\xa0" space).
let playlist = [
{name: "<p>Title</p>", src: "video.mp4"},
{name: "<p>--</p>", src: "--"},
{name: "<p>--</p>", src: "--"},
{name: "<p>--</p>", src: "--"},
{name: "<p>--</p>", src: "--"},
{name: "<p>--</p>", src: "--"},
{name: "<p>--</p>", src: "--"},
{name: "<p>--</p>", src: "--"},
{name: "<p>--</p>", src: "--"},
{name: "<p>--</p>", src: "--"},
];

// Player init.
const video = document.getElementById("myPlay"),
vNow = document.getElementById("vNow"),
vList = document.getElementById("vList"),
vPlay = document.getElementById("vPlay");

// Create playlist.
for (let i in playlist) {
let row = document.createElement("div");
row.className = "vRow";
row.innerHTML = playlist[i]["name"];
row.addEventListener("click", () => { vidPlay(i); });
playlist[i]["row"] = row;
vList.appendChild(row);
}

var vidNow = 0, // Current video.
vidStart = false, // Auto start next video.

// Play selected video.
vidPlay = (idx, nostart) => {
vidNow = idx;
vidStart = nostart ? false : true;
video.src = playlist[idx]["src"];
for (let i in playlist) {
if (i == idx) { playlist[i]["row"].classList.add("now"); }
else { playlist[i]["row"].classList.remove("now"); }
}
};

// Auto start when sufficiently buffered.
video.addEventListener("canplay", () => { if (vidStart) {
video.play();
vidStart = false;
}});

// Autoplay next video in the playlist.
video.addEventListener("ended", () => {
vidNow++;
if (vidNow >= playlist.length) { vidNow = 0; }
vidPlay(vidNow);
});

// Init set first video.
vidPlay(0, true);

// Click to Play/Pause.
vPlay.addEventListener("click", () => {
if (video.paused) { video.play(); 
}
else { video.pause(); }
});

// Enable/Disable controls.
video.addEventListener("canplay", () => {
vPlay.disabled = false;
});
video.addEventListener("waiting", () => {
vPlay.disabled = true;
});
});
