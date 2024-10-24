const haveSpokenBtn = document.getElementById("have-spoken");
const haveSpokenAudio = new Audio("./ihavespoken.mp3");

haveSpokenBtn.addEventListener("click", () => {
  haveSpokenAudio.play();
});
