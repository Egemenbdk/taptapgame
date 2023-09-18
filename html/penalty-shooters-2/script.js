document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Embed the game iframe
    const gameIframe = document.createElement('iframe');
    gameIframe.src = 'https://games.cdn.famobi.com/html5games/p/penalty-shooters-2/v350/?fg_domain=play.famobi.com&fg_aid=A1000-111&fg_uid=8e8bdb8b-f420-48ed-ad68-dd5721a807c8&fg_pid=e37ab3ce-88cd-4438-9b9c-a37df5d33736&fg_beat=024&original_ref=https%3A%2F%2Fplay.famobi.com%2Fhtml5game%2F8e8bdb8b-f420-48ed-ad68-dd5721a807c8%2FA1000-11';
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
