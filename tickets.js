let video = [];
let i = 0;

function setup() {
    video[0] = document.getElementById("video0");
    video[1] = document.getElementById("video1");
    video[2] = document.getElementById("video2");
}

function changeImage() {
  if (i < video.length) {
    video[i].style.visibility = "visible";
    video[i].play(); 

    i++;
  }
}

function clickFunc() {
  setInterval(changeImage, 1500);
}
