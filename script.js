document.getElementById("accept").addEventListener("click", function() {
    prankJumpscare();
});

document.getElementById("decline").addEventListener("click", function() {
    prankJumpscare();
});

function prankJumpscare() {
    let jumpscare = document.querySelector(".jumpscare");
    let scream = document.getElementById("scream");

    jumpscare.style.display = "flex";
    scream.play();

    setTimeout(() => {
        jumpscare.style.display = "none";
    }, 3000); // Jumpscare hilang setelah 3 detik
}
