/**
  * Templates for AppCreator24 @ ZazerConer's GitHub
  * Build your app easily.
  * JS code.
  * Do not remove or change the JS code below 
  * unless you know what you are doing.
**/

window.addEventListener("DOMContentLoaded", () => {

	// Hide loading content.
	const loader = document.getElementById("loading"),
		topContent = document.getElementById("top-navigation"),
		botContent = document.getElementById("bottom-navigation"),
		secContent = document.getElementById("container-content");
	setTimeout(() => {
		loader.style.visibility = "hidden";
		loader.style.opacity = "0";
		loader.style.zIndex = "0";
		topContent.style.visibility = "visible";
		botContent.style.visibility = "visible";
		secContent.style.visibility = "visible";
	}, 3000);

	const btnMenu = document.getElementById("btn-menu"),
		menu = document.getElementById("container-menu"),
		content = document.getElementById("container-content"),
		btnSection = document.querySelectorAll(".btn-section");
	const btnGo1 = document.getElementById("btn-go-1"),
		btnGo2 = document.getElementById("btn-go-2"),
		btnGo3 = document.getElementById("btn-go-3"),
		btnGo4 = document.getElementById("btn-go-4"),
		btnGo5 = document.getElementById("btn-go-5");
	const topNav = document.getElementById("top-navigation");

	// Hide/show menu.
	btnMenu.onclick = () => {
		if (menu.style.width === "250px") {
			menu.style.width = "0";
			for (let i = 0; i < btnSection.length; i++) {
				btnSection[i].style.opacity = "0";
			}
			content.style.pointerEvents = "auto";
			content.style.overflow = "visible";
		} else {
			menu.style.width = "250px";
			for (let i = 0; i < btnSection.length; i++) {
				btnSection[i].style.opacity = "1";
			}
			content.style.pointerEvents = "none";
			content.style.overflow = "hidden";
		}
	}
	document.onclick = (e) => {
		var target = e.target;
		if (target !== menu && !menu.contains(target) && target !== btnMenu) {
			menu.style.width = "0";
			for (let i = 0; i < btnSection.length; i++) {
				btnSection[i].style.opacity = "0";
			}
			content.style.pointerEvents = "auto";
			content.style.overflow = "visible";
		}
	}

	// Bottom icon when it is clicked.
	btnGo1.onclick = () => {
		btnGo2.style.opacity = "1";
		btnGo3.style.opacity = "1";
		btnGo4.style.opacity = "1";
		btnGo5.style.opacity = "1";
		btnGo1.style.opacity = "0.5";
	}
	btnGo2.onclick = () => {
		btnGo1.style.opacity = "1";
		btnGo3.style.opacity = "1";
		btnGo4.style.opacity = "1";
		btnGo5.style.opacity = "1";
		btnGo2.style.opacity = "0.5";
	}
	btnGo3.onclick = () => {
		btnGo1.style.opacity = "1";
		btnGo2.style.opacity = "1";
		btnGo4.style.opacity = "1";
		btnGo5.style.opacity = "1";
		btnGo3.style.opacity = "0.5";
	}
	btnGo4.onclick = () => {
		btnGo1.style.opacity = "1";
		btnGo2.style.opacity = "1";
		btnGo3.style.opacity = "1";
		btnGo5.style.opacity = "1";
		btnGo4.style.opacity = "0.5";
	}
	btnGo5.onclick = () => {
		btnGo1.style.opacity = "1";
		btnGo2.style.opacity = "1";
		btnGo3.style.opacity = "1";
		btnGo4.style.opacity = "1";
		btnGo5.style.opacity = "0.5";
	}

	// Section button when it is clicked.
	for (let i = 0; i < btnSection.length; i++) {
		btnSection[i].onclick = () => {
			menu.style.width = "0";
			btnSection[i].style.opacity = "0";
			content.style.pointerEvents = "auto";
			content.style.overflow = "visible";
			btnGo1.style.opacity = "1";
			btnGo2.style.opacity = "1";
			btnGo3.style.opacity = "1";
			btnGo4.style.opacity = "1";
			btnGo5.style.opacity = "1";
		}
	}

});
