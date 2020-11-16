var video;
var videoVolume;
var muteText;
var sliderValue;

window.addEventListener("load", function() {
	video = document.querySelector("#myVideo");
	videoVolume = document.querySelector("#volume");
	muteText = document.querySelector('#mute');
	sliderValue = document.querySelector('#volumeSlider');
});

document.querySelector("#play").addEventListener("click", function() {
	console.log("Play Video");
	video.play();
	videoVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#pause").addEventListener("click", function() {
	video.pause();
});

document.querySelector("#slower").addEventListener("click", function() {
	video.playbackRate = video.playbackRate / 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#faster").addEventListener("click", function() {
	video.playbackRate = video.playbackRate * 0.9;
	console.log(video.playbackRate);
});

document.querySelector("#skip").addEventListener("click", function() {
	if (video.currentTime + 5 >= video.duration){
		video.currentTime = 0;
		video.play();
		console.log(video.currentTime);
	}else{
		video.currentTime = video.currentTime + 5;
		console.log(video.currentTime);
	}	
});

document.querySelector("#mute").addEventListener("click", function() {
	if (video.muted) {
		video.muted = false;
		muteText.innerHTML = "Mute";
	}else{
		video.muted = true;
		muteText.innerHTML = "Unmute";
	}
});

document.querySelector("#volumeSlider").addEventListener("input", function() {
	video.volume = sliderValue.value / 100;
	videoVolume.innerHTML = video.volume * 100 + "%";
});

document.querySelector("#old").addEventListener("click", function() {
	video.style.filter = "grayscale(100%)";
});

document.querySelector("#original").addEventListener("click", function() {
	video.style.filter = "grayscale(0%)";
});
