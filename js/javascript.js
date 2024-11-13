let toggle = "on";

function AboutUs() {
    if (toggle == "on") {
/*        alert("About Us: \n\nWe are passionate about cooking and sharing recipes with like-minded people.");
*/
        document.getElementById("AboutUsText").innerHTML = " | We are passionate about cooking and sharing recipes with like-minded people.";
        document.getElementById("AboutUsButton").innerHTML = "...hide...";
        toggle = "off";
    } else {
        document.getElementById("AboutUsText").innerHTML = " ";
        document.getElementById("AboutUsButton").innerHTML = "About Us";
        toggle = "on";
    }
}
