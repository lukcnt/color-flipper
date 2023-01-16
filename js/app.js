const colors = ["green", "red", "purple", "aqua"];
const button = document.getElementById("button");
const color = document.querySelector(".color");

button.addEventListener("click", function () {
    const randomNumber = getRandomNumber();
    console.log(randomNumber);

    document.body.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];
});

function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}