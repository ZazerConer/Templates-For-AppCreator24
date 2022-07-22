// https://github.com/ZazerConer/Templates-For-App-Creator-24.
// Radio/Music-Player (M-Player).

window.addEventListener("DOMContentLoaded", () => {
// Player Init.
// Playlist - change to your own!
let playlist = [
{name: "<b>Title-Song</b><p>Artist-Name</p>", src: "Audio.mp3"},
{name: "<b>--</b><p>--</p>", src: "--"},
{name: "<b>--</b><p>--</p>", src: "--"},
{name: "<b>--</b><p>--</p>", src: "--"},
{name: "<b>--</b><p>--</p>", src: "--"},
{name: "<b>--</b><p>--</p>", src: "--"},
{name: "<b>--</b><p>--</p>", src: "--"},
{name: "<b>--</p><p>--</b>", src: "--"},
{name: "<b>--</p><p>--</b>", src: "--"},
{name: "<b>--</b><p>--</p>", src: "--"},
{name: "<b>--</b><p>--</p>", src: "--"},
{name: "<b>--</b><p>--</p>", src: "--"},
];

// Audio player & get html controls.
const audio = document.getElementById("myPlay"),
Play = document.getElementById("Play"),
PlayIco = document.getElementById("PlayIco"),
Now = document.getElementById("Now"),
List = document.getElementById("List");

// Build playlist.
for (let i in playlist) {
let row = document.createElement("div");
row.className = "Row";
row.innerHTML = playlist[i]["name"];
row.addEventListener("click", () => { 
adoPlay(i); 
});
playlist[i]["row"] = row;
List.appendChild(row);
}

var adoNow = 0, // Current audio.
adoStart = false, // Auto start next audio.

// Play selected audio.
adoPlay = (idx, nostart) => {
adoNow = idx;
adoStart = nostart ? false : true;
audio.src = playlist[idx]["src"];
for (let i in playlist) {
if (i == idx) { playlist[i]["row"].classList.add("now"); 
}
else { playlist[i]["row"].classList.remove("now"); }
}
};

// Auto start when sufficiently buffered.
audio.addEventListener("canplay", () => { if (adoStart) {
audio.play();
adoStart = false;
}
});

// Autoplay next audio in the playlist.
audio.addEventListener("ended", () => {
adoNow++;
if (adoNow >= playlist.length) { adoNow = 0; 
}
adoPlay(adoNow);
});

// Init set first audio.
adoPlay(0, true);

// Play/Pause button.
// Auto set Play/Pause icon.
audio.addEventListener("play", () => {
PlayIco.innerHTML = "⏸︎";
});
audio.addEventListener("pause", () => {
PlayIco.innerHTML = "▶️";
});

// Click to Play/Pause.
Play.addEventListener("click", () => {
if (audio.paused) { audio.play(); 
}
else { audio.pause(); }
});

// Enable/Disable controls.
audio.addEventListener("canplay", () => {
Play.disabled = false;
});
audio.addEventListener("waiting", () => {
Play.disabled = true;
});
});
