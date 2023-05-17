const playButton = document.getElementById("playButton");
let isPlaying = false;
playButton.addEventListener("click", () => {
  if (isPlaying) {
    playButton.classList.remove("fa-pause");
    playButton.classList.add("fa-play");
    isPlaying = false;
  } else {
    playButton.classList.remove("fa-play");
    playButton.classList.add("fa-pause");
    isPlaying = true;
  }
});