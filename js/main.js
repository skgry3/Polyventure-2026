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
