let toggle = true;
let buttonLabel = document.getElementById("AboutUsButton").innerHTML;

function AboutUs() {
    if (toggle == true) {
        document.getElementById("AboutUsText").innerHTML = " | We are passionate about cooking and sharing recipes with like-minded people.";
        document.getElementById("AboutUsButton").innerHTML = "...hide...";
        toggle = false;
    } else {
        document.getElementById("AboutUsText").innerHTML = null;
        document.getElementById("AboutUsButton").innerHTML = buttonLabel;
        toggle = true;
    }
}

// const select = document.querySelector("select");
// const html   = document.querySelector("html");
const starting_bgColor   = window.getComputedStyle(document.body ,null).getPropertyValue('background-color');
const starting_textColor = window.getComputedStyle(document.body ,null).getPropertyValue('color');
let themeLabel = document.getElementById("themeSelector").innerHTML;
let themeToggle = false;

function themeSwitch() {
    if (themeToggle) {
        document.getElementById("themeSelector").innerHTML = themeLabel;
        toggleColors(starting_bgColor, starting_textColor);
        themeToggle = false;
    } else {
        document.getElementById("themeSelector").innerHTML = "Light mode";
        toggleColors(starting_textColor, starting_bgColor);
        themeToggle = true;
    }
}

// select.addEventListener("change", () => (select.value === "light")
    // ? toggleColors(starting_bgColor, starting_textColor)
    // : toggleColors(starting_textColor, starting_bgColor)
// );

function toggleColors(bgColor, textColor) {
    document.body.style.backgroundColor = bgColor;
    document.body.style.color = textColor;
}
