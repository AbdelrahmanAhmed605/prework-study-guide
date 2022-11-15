document.querySelector("html").addEventListener("click", function () {
    alert("Ouch! Stop poking me!");
  });

const myImage = document.querySelector("img");

myImage.onclick = () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "assets/bowtie-cat.png") {
    myImage.setAttribute("src", "assets/house.png");
  } else {
    myImage.setAttribute("src", "assets/bowtie-cat.png");
  }
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
      setUserName();
    } else {
      localStorage.setItem("name", myName);
      myHeading.textContent = `Javascript is cool, ${myName}`;
    }
  }

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");



myButton.onclick = () => {
    setUserName();
  };