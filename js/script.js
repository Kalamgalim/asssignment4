let button = document.getElementById("btn");

button.addEventListener("click", animate);

function animate() {
    let heading = document.getElementsByTagName("h1")[0];
    heading.classList.toggle("animate__animated")
    heading.classList.toggle("animate__shakeY");
}
