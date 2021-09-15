(() => {
   //set up elements
   const video = document.getElementById('featuredVideo');
   const videoControls = document.getElementById('video-controls');
   const playButton = document.getElementById('playpause');
   const progressBar = document.getElementById('progress-bar');
   const volume = document.getElementById('volume');
   const volumeButton = document.getElementById('volume-button');
// check if browser supports video
const videoWorks = !!document.createElement('video').canPlayType;
if (videoWorks) {
  video.controls = false;
  videoControls.classList.remove('hidden');
}
   // play or pause video
function togglePlay() {
    if (video.paused || video.ended) {
      video.play();
    } else {
      video.pause();
    }
  }
  // update volume
  function updateVolume() {
    if (video.muted) {
      video.muted = false;
    }
  
    video.volume = volume.value;
  }
  
  // mute or unmute
  function toggleMute() {
    video.muted = !video.muted;
  
    if (video.muted) {
      volume.setAttribute('data-volume', volume.value);
      volume.value = 0;
    } else {
      volume.value = volume.dataset.volume;
    }
  }

playButton.addEventListener('click', togglePlay);
video.addEventListener('click', togglePlay);
volume.addEventListener('input', updateVolume);
volumeButton.addEventListener('click', toggleMute);
})();