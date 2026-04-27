// for the horizontal gallery
window.addEventListener('load', () => {

    const tracks = document.querySelectorAll(".scrolling");

    function ScrollTrack(track) {
        const imgs = track.querySelectorAll("img");
        const half = imgs.length / 2;

        let pos = 0;
        const speed = 1;

        let firstHalfWidth = 0;
        for (let i = 0; i < half; i++) {
            firstHalfWidth += imgs[i].getBoundingClientRect().width;
        }

        function animate() {
            pos += speed;

            if (pos >= firstHalfWidth) {
                pos = 0;
            }

            track.style.transform = `translateX(-${pos}px)`;

            requestAnimationFrame(animate);
        }

        animate(); // start loop for this track
    }

    // Run for each track
    tracks.forEach(track => ScrollTrack(track));

});

/*=======================
        lightbox
=======================*/
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeLightboxBtn = document.querySelector('.lightboxCloseBtn');
const allImages = document.querySelectorAll('img');

allImages.forEach(img => {
    img.addEventListener('click', () => {
        lightbox.classList.add('active');
        lightboxImg.src = img.src;
    });
});

closeLightboxBtn.addEventListener('click', (e) => {
    if (e.target !== lightboxImg) {
        lightbox.classList.remove('active');
    }
});
lightbox.addEventListener('animationend', () => {
    lightbox.classList.remove('active');
});