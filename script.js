let noCount = 0;

function noClick() {
    noCount++;

    let img = document.getElementById("mainImage");

    if (noCount === 1) {
        img.src = "IMAGE1.gif";
    }
    else if (noCount === 2) {
        img.src = "VIDEO2.gif";
    }
    else {
        img.src = "VIDEO4.gif";
    }
}

function yesClick() {
    // Change image to final GIF
    document.getElementById("mainImage").src = "VIDEO1.gif";

    // Change heading text
    let title = document.getElementById("title");
    title.textContent = "Happy Birthday Cutie 🎂💖";

    // Hide buttons
    document.getElementById("buttons").style.display = "none";

    // Optional: make container clean
    let container = document.getElementById("container");
    container.style.background = "transparent";
    container.style.boxShadow = "none";

    // Make image bigger
    document.getElementById("mainImage").style.maxHeight = "70vh";

    // Play music + confetti
    document.getElementById("music").play();
    startConfetti();
}

// Smooth moving NO button
function moveNo() {
    let btn = document.getElementById("noBtn");

    if (noCount < 2) return;

    let x = Math.random() * 150 - 75;
    let y = Math.random() * 150 - 75;

    btn.style.transition = "0.4s ease";
    btn.style.transform = `translate(${x}px, ${y}px)`;
}

// Confetti
function startConfetti() {
    let canvas = document.getElementById("confetti");
    let ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let pieces = [];

    for (let i = 0; i < 100; i++) {
        pieces.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            size: Math.random() * 6 + 2,
            speed: Math.random() * 3 + 1
        });
    }

    function update() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        pieces.forEach(p => {
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fillStyle = "pink";
            ctx.fill();

            p.y += p.speed;

            if (p.y > canvas.height) {
                p.y = 0;
                p.x = Math.random() * canvas.width;
            }
        });

        requestAnimationFrame(update);
    }

    update();
}