// // declare the button
const colorButton = document.getElementById("change-colour-btn");

// List of colours for gradient
// colours from: https://www.makeuseof.com/css-background-gradients/, https://cssgradient.io/gradient-backgrounds/
const colorList = [
  "120deg, #d4fc79 0%, #96e6a1 100%",
  "to right, #8360c3, #2ebf91",
  "to right, #fc5c7d, #6a82fb",
  "-20deg, #00cdac 0%, #8ddad5 100%",
  "to right, rgb(242, 112, 156), rgb(255, 148, 114)",
  "109.6deg, rgba(156,252,248,1) 11.2%, rgba(110,123,251,1) 91.1%",
  "95.2deg, rgba(173,252,234,1) 26.8%, rgba(192,229,246,1) 64%",
  "to right, #ff6e7f, #bfe9ff",
  "to right, #ff9966, #ff5e62",
  "45deg, #FBDA61 0%, #FF5ACD 100%",
  "45deg, #FA8BFF 0%, #2BD2FF 52%, #2BFF88 90%",
  "0deg, #D9AFD9 0%, #97D9E1 100%",
];

// A function that randomly chooses a colour from the colourList
function paintBackground() {
  const chosenColor = colorList[Math.floor(Math.random() * colorList.length)];
  document.body.style.background = `linear-gradient(${chosenColor})`;
}

paintBackground();
colorButton.addEventListener("click", paintBackground);
