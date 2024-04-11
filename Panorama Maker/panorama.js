const fileInput = document.getElementById('fileInput');
const canvas = document.getElementById('panoramaCanvas');
const ctx = canvas.getContext('2d');
const downloadBtn = document.getElementById('downloadBtn');

let panoramaImages = [];

fileInput.addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const files = event.target.files;

    for (let i = 0; i < files.length; i++) {
        const file = files[i];
        const reader = new FileReader();

        reader.onload = function (e) {
            const img = new Image();
            img.onload = function () {
                panoramaImages.push(img);
                if (panoramaImages.length === files.length) {
                    stitchAndDisplayPanorama();
                }
            };
            img.src = e.target.result;
        };

        reader.readAsDataURL(file);
    }
}

function stitchAndDisplayPanorama() {
    const panoramaWidth = panoramaImages.reduce((totalWidth, img) => totalWidth + img.width, 0);
    canvas.width = panoramaWidth;
    canvas.height = panoramaImages[0].height;

    let offsetX = 0;
    panoramaImages.forEach(img => {
        ctx.drawImage(img, offsetX, 0);
        offsetX += img.width;
    });

    // Add event listener to download button
    downloadBtn.addEventListener('click', downloadPanorama);
}

function downloadPanorama() {
    // Create a temporary anchor element
    const link = document.createElement('a');
    link.download = 'panorama.jpg';
    link.href = canvas.toDataURL('image/jpeg');
    link.click();
}

