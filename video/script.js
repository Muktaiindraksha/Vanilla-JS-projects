// JavaScript for Video Player
document.addEventListener('DOMContentLoaded', function () {
    var video = document.getElementById('myVideo');
    var playPauseBtn = document.getElementById('playPauseBtn');
    var volumeRange = document.getElementById('volumeRange');

    playPauseBtn.addEventListener('click', function () {
        if (video.paused) {
            video.play();
            playPauseBtn.textContent = 'Pause';
        } else {
            video.pause();
            playPauseBtn.textContent = 'Play';
        }
    });

    volumeRange.addEventListener('input', function () {
        video.volume = volumeRange.value;
    });
});  




// const btn = document.querySelector(".switch-btn");
// const video = document.querySelector(".video-container");

// btn.addEventListener("click", function () {
//   if (!btn.classList.contains("slide")) {
//     btn.classList.add("slide");
//     video.pause();
//   } else {
//     btn.classList.remove("slide");
//     video.play();
//   }
// });

// // preloader
// const preloader = document.querySelector(".preloader");

// window.addEventListener("load", function () {
//   preloader.classList.add("hide-preloader");
// }); 



