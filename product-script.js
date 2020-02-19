
// Function for Book format
const bookButton = document.getElementById("button_book");

function toggleBookFormat() {
    this.classList.toggle('open')
}
bookButton.onclick = toggleBookFormat;

