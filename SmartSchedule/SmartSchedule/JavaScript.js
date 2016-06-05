
function dayFunction() {
    var d = new Date();
        day = d.getDay();

        if (day == 0) {
            document.getElementById("monday").style.background = "rgba(0, 0, 0, 0.5)";
        }
        else {
            document.getElementById("monday").style.background = "transparent";
        }
        if (day == 2) {
            document.getElementById("tuesday").style.background = "rgba(0, 0, 0, 0.5)";
        }
        else {
            document.getElementById("tuesday").style.background = "transparent";
        }
        if (day == 4) {
            document.getElementById("wednesday").style.background = "rgba(0, 0, 0, 0.5)";
        }
        else {
            document.getElementById("wednesday").style.background = "transparent";
        }
        if (day == 3) {
            document.getElementById("thursday").style.background = "rgba(0, 0, 0, 0.5)";
        }
        else {
            document.getElementById("thursday").style.background = "transparent";
        }
        if (day == 5) {
            document.getElementById("friday").style.background = "rgba(0, 0, 0, 0.5)";
        }
        else {
            document.getElementById("friday").style.background = "transparent";
        }
}

window.onload = dayFunction;