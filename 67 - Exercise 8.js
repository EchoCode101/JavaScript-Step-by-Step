function play() {
  let audio = new Audio(
    `http://commondatastorage.googleapis.com/codeskulptor-demos/DDR_assets/Kangaroo_MusiQue_-_The_Neverwritten_Role_Playing_Game.mp3`
  );
  audio.play();
}
setInterval(() => {
  let d = new Date();
  time.innerHTML = d.toDateString() + " " + d.toTimeString();
}, 1000);
const setAlaram = (seconds) => {
  let d = new Date().getTime();
  setTimeout(() => {
    play();
  }, seconds * 1000);
  setInterval(() => {
      secondsLeft = -(new Date().getTime() - (d + seconds * 1000));
      if(secondsLeft>0){
        alarm.innerHTML =
          "Alarm is ringing in " + Math.floor(secondsLeft / 1000) + " seconds.";
      }
  });
};
let s = prompt("After How many seconds you want to play the Alarm?");
setAlaram(parseInt(s));
