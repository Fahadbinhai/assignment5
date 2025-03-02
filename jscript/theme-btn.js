// Theme button (img) select koro
const themeButton = document.getElementById("theme-btn");

// Specific colors array te store koro
const colors = ["#FF5733", "#33FF57", "#3357FF", "#F033FF", "#FFC300"]; // 5 ta color

// Theme button (img) e event listener add koro
themeButton.addEventListener("click", function () {
    // Randomly ekta color select koro
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // Website er background color change koro
    document.body.style.backgroundColor = randomColor;
});