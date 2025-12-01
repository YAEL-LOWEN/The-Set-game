const sorry = document.querySelectorAll(".sorry")
const play = document.querySelector(".play")
const outOfPlay2 = document.querySelector(".outOfPlay2")
const SpaceRipple = new Audio("../others/SpaceRipple.wav");
SpaceRipple.play()
play.addEventListener("click", (event) => {
   window.location.href = "../html/play.html";
})
sorry.forEach(element => {
   element.addEventListener("click", (event) => {
      window.location.href = "../html/sorry.html";
   })
})
outOfPlay2.addEventListener("click", (event) => {
   window.open("enter_page.html");
 })