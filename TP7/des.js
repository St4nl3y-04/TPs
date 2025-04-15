function drawFlag() {
    const choice = prompt("Choisissez votre nationalité : 'maroc' ou 'france'").toLowerCase();
    const canvas = document.getElementById('flagCanvas');
    const ctx = canvas.getContext('2d');

    if (choice === 'maroc') {
        drawMoroccoFlag(ctx);
    } else if (choice === 'france') {
        drawFranceFlag(ctx);
    } else {
        alert("Choix invalide. Veuillez actualiser la page et réessayer.");
    }
}

function drawMoroccoFlag() {
    const canvas = document.getElementById('flagCanvas');
    const context = canvas.getContext('2d');
    context.lineWidth = ”1”; context.strokeStyle = ”black”;
    context.strokeRect(0, 0, 452, 302);
    context.fillStyle = ”rgb(255,45,39)”;
    context.fillRect(1, 1, 450, 300);
context.lineWidth = ”10”; context.strokeStyle = ”rgb(0,210,51)”;
context.beginPath(); context.moveTo(226, 101);
context.lineTo(259, 201); context.lineTo(172,139);
}

function drawFranceFlag() {
    const canvas = document.getElementById('flagCanvas');
    const ctx = canvas.getContext('2d');
    // Bande bleue
    ctx.fillStyle = 'blue';
    ctx.fillRect(0, 0, 100, 200);

    // Bande blanche
    ctx.fillStyle = 'white';
    ctx.fillRect(100, 0, 100, 200);

    // Bande rouge
    ctx.fillStyle = 'red';
    ctx.fillRect(200, 0, 100, 200);
}