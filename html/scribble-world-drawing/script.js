document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Embed the game iframe
    const gameIframe = document.createElement('iframe');
    gameIframe.src = 'https://www.bubbleshooter.net/games/scribble-world-drawing/';
    gameIframe.width = '968';
    gameIframe.height = '561';
    gameIframe.frameBorder = '0';
    gameIframe.allowFullscreen = 'true';
    container.appendChild(gameIframe);

    // Fullscreen button functionality
    const fullscreenButton = document.createElement('button');
    fullscreenButton.id = 'fullscreen-button';
    fullscreenButton.textContent = 'Fullscreen';

    // Append the fullscreen button after the game iframe
    container.appendChild(fullscreenButton);

    fullscreenButton.addEventListener('click', () => {
        if (gameIframe.requestFullscreen) {
            gameIframe.requestFullscreen();
        } else if (gameIframe.mozRequestFullScreen) {
            gameIframe.mozRequestFullScreen();
        } else if (gameIframe.webkitRequestFullscreen) {
            gameIframe.webkitRequestFullscreen();
        } else if (gameIframe.msRequestFullscreen) {
            gameIframe.msRequestFullscreen();
        }
    });

    // Exit fullscreen on ESC key press
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape' && (document.fullscreenElement || document.mozFullScreenElement || document.webkitFullscreenElement || document.msFullscreenElement)) {
            if (document.exitFullscreen) {
                document.exitFullscreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitExitFullscreen) {
                document.webkitExitFullscreen();
            } else if (document.msExitFullscreen) {
                document.msExitFullscreen();
            }
        }
    });
});
