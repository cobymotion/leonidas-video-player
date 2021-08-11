const video = document.querySelector('#video'); 
const playButton = document.querySelector('#play'); 
const pauseButton = document.querySelector('#pause');
const backwardButton = document.querySelector('#backward'); 
const forwardButton = document.querySelector('#forward');
const progreso = document.querySelector('#progress');

playButton.addEventListener('click', handlePlay);
pauseButton.addEventListener('click', handlePause);
backwardButton.addEventListener('click', handleBackward);
forwardButton.addEventListener('click', handleForward); 
video.addEventListener('loadedmetadata', handleLoadedVideo);
video.addEventListener('timeupdate', handleTimeUpdate);
progreso.addEventListener('input', handleInput)


function handlePlay(){
	console.log("Se hizo el play")
	video.play();
	playButton.hidden =true 
	pauseButton.hidden = false 
}

function handlePause(){
	console.log("Se hizo el pause")
	video.pause();
	playButton.hidden =false 
	pauseButton.hidden = true 
}

function handleForward() {
	console.log("Se avanzo 10 segundos");
	video.currentTime += 10 
}

function handleBackward() {
	console.log("Se retrocedio 10 segundos");
	video.currentTime -= 10 
}

function handleLoadedVideo(){
	console.log("Se cargo mi vide: ", video.duration);
	progreso.max = video.duration;
}

function handleTimeUpdate(){
	progreso.value = video.currentTime; 
}

function handleInput(){
	video.currentTime = progreso.value
}