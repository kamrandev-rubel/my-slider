const img = [
    "images/download-1.jpeg",
    "images/download-2.jpeg",
    "images/download-3.jpeg",
    "images/download-4.jpeg",
    "images/download-5.jpeg",
    "images/download-6.jpeg",
    "images/download-7.jpeg",
    "images/download-8.jpeg"
];


let imgIndex = 0;
setInterval(() => {
    if (imgIndex >= img.length) {
        imgIndex = 0;
    }
    imgIndex++;
}, 1000);