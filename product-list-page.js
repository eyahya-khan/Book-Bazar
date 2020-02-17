const accordion = document.getElementsByClassName("dropaccordion");
var i;

for (i = 0; i < accordion.length; i++) {
    accordion[i].addEventListener("click", function () {
        this
            .classList
            .toggle("active");
        var txt = this.nextElementSibling;
        if (txt.style.display === "block") {
            txt.style.display = "none";
        } else {
            txt.style.display = "block";
        }
    });
}