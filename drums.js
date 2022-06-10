//    //Drum-kit task//
//
//    //DRY - yeah! but I did just to make it work the first time;-)//
//
//    document.getElementById("hihat").addEventListener("click", myHihat);
//
//    let hiHat = new Audio("hihat.wav");
//
//    function myHihat() {
//      hiHat.play();
//    }
//
//    document.getElementById("snarE").addEventListener("click", mySnare);
//
//    let snare = new Audio("snare.wav");
//
//    function mySnare() {
//      snare.play();
//    }
//
//    document.getElementById("toM").addEventListener("click", myTom);
//
//    let tom = new Audio("tom.wav");
//
//    function myTom() {
//      tom.play();
//    }
//
//    document.getElementById("ridE").addEventListener("click", myRide);
//
//    let ride = new Audio("ride.wav");
//
//    function myRide() {
//      ride.play();
//    }
//
//    document.getElementById("kicK").addEventListener("click", myKick);
//
//    let kick = new Audio("kick.wav");
//
//    function myKick() {
//      kick.play();
//    }
//

//Trying to make it better, this time with less code, and use of keys//
//My goals was to make it work both with click on upper code, and then with keys on the down code, but i didn't figure it out. Thats why the upper code is marked out//

const hiHat = new Audio("openhat.wav");
const snare = new Audio("snare.wav");
const kick = new Audio("kick.wav");

document.body.addEventListener("keydown", (e) => {
  console.log(e);
  switch (e.key) {
    case "h":
      hiHat.play();
      break;
    case "s":
      snare.play();
      break;
    case "k":
      kick.play();
      break;
  }
});
