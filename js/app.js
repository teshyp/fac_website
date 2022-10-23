// add event listener to all buttons
let allAboutBtns = document.getElementsByClassName("btn-about");
let allDescriptionTexts = document.getElementsByClassName("desc-text");
let testBox = document.getElementsByClassName("desc-boxes");

for (let i = 0; i < allAboutBtns.length; i++) {
  allAboutBtns[i].addEventListener("click", activeText);
}

function activeText(projectNumber) {
  console.log(this.value);
  testBox[this.value].classList.toggle("desc-active");
}
