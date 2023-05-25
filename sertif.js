const { createCanvas, loadImage } = require("canvas");
const fs = require("fs");

function getInput(aims) {
    return {
        nama: "Mohammad Talha",
        aims: aims,
        cabang: "Kawalu",
        skor: 100
    }
}

// Dimensions for the image
loadImage('./lime-cat.jpg').then(img => {

    const input = getInput(18261)
    // Instantiate the canvas object
    const canvas = createCanvas(img.width, img.height);
    const context = canvas.getContext("2d");

    context.drawImage(img, 0, 0, canvas.width, canvas.height);

    context.font = "bold 32pt 'PT Sans'";
    context.textAlign = "left";
    context.fillStyle = "#fff";
    context.fillText(input.nama, img.width / 2 - 125, img.height / 2 - 60)
    context.fillText(input.aims, img.width / 2 - 125, img.height / 2 + 5)
    context.fillText(input.cabang, img.width / 2 - 125, img.height / 2 + 70)
    context.textAlign = "center";
    context.fillText(input.skor, img.width / 2, img.height / 2 + 255)

    // Write the image to file
    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync("./image.png", buffer);

})
