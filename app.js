const audio = document.getElementById("audio");
const time = document.getElementById("time");
const submit = document.getElementById("submit");
const interv = document.getElementById("interv");
interv.innerText = 0;

submit.addEventListener("click", function () {
  if (time.value < 1) {
    alert("Enter minutes");
  } else {
    setTimeout(() => {
      audio.play();
    }, time.value * 1000 * 60);
    setInterval(() => {
      interv.innerText = +interv.innerText + 1;
    }, 1000);
  }
});

// const intervStart = setInterval(() => {
//   interv.innerText = +interv.innerText + 1;
// }, 1000);
