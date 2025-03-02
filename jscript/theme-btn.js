const themeButton = document.getElementById("theme-btn");

const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FFC300"]; 

themeButton.addEventListener("click", function () {

    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;
});