document.addEventListener('DOMContentLoaded', function () {
    const container = document.querySelector('.container');

    // Example data for games (you can replace this with your own data)
    const gamesData = [
        {
            title: 'Football Legends',
            imageUrl: 'https://images.crazygames.com/games/soccer-legends-2021/cover-1619606990485.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop',
            url: 'football-legends', // Add game URL here
        },
        {
            title: 'Penalty Shooters 2',
            imageUrl: 'https://images.crazygames.com/penalty-shooters-2/20220816185952/penalty-shooters-2-cover?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop',
            url: 'penalty-shooters-2', // Add game URL here
        },
        {
            title: 'Retro Bowl',
            imageUrl: 'https://assets.nintendo.com/image/upload/c_fill,w_1200/q_auto:best/f_auto/dpr_2.0/ncom/en_US/games/switch/r/retro-bowl-switch/hero',
            url: 'retro-bowl', // Add game URL here
        },
        {
            title: "Papa's Pizzeria",
            imageUrl: 'https://tcf.admeen.org/game/5500/5489/400x246/papa-s-pizzeria.jpg',
            url: 'papas-pizzeria', // Add game URL here
        },
        {
            title: 'Fireboy and Watergirl',
            imageUrl: 'https://images.crazygames.com/games/fireboy-and-watergirl-the-forest-temple/cover-1586285142530.jpg?auto=format,compress&q=75&cs=strip',
            url: 'fireboy-and-watergirl', // Add game URL here
        },
        {
            title: 'Basketball Stars',
            imageUrl: 'https://images.crazygames.com/games/basketball-stars-2019/cover-1583231506155.png?auto=format%2Ccompress&q=45&cs=strip&ch=DPR&w=1200&h=630&fit=crop',
            url: 'basketball-stars', // Add game URL here
        },
        {
            title: 'Smash Karts',
            imageUrl: 'https://images.crazygames.com/games/smash-karts/cover-1690365923966.png?auto=format,compress&q=75&cs=strip',
            url: 'smash-karts', // Add game URL here
        },
        {
            title: 'Sandy Balls',
            imageUrl: 'https://m.media-amazon.com/images/I/71Z4OiWOHKL.png',
            url: 'sandy-balls', // Add game URL here
        },
        {
            title: 'Water Color Sort',
            imageUrl: 'https://www.primarygames.com/puzzles/strategy/watersort/logo200.png',
            url: 'water-color-sort', // Add game URL here
        },
        {
            title: 'Dunk Shot',
            imageUrl: 'https://static.gamezop.com/S1Ne12TQqCH/cover.jpg',
            url: 'dunk-shot', // Add game URL here
        },
        {
            title: 'Blazing Blades',
            imageUrl: 'https://static.gamezop.com/UYiznUAya/cover.jpg',
            url: 'blazing-blades', // Add game URL here
        },
        {
            title: 'JustFall.LOL',
            imageUrl: 'https://games.lol/wp-content/uploads/2023/07/just-fall-lol-pc-full-version.jpg',
            url: 'justfall-lol', // Add game URL here
        },
        {
            title: 'Scribble World Drawing',
            imageUrl: 'https://i.ibb.co/jw0gHVV/download-2.jpg',
            url: 'scribble-world-drawing', // Add game URL here
        },
        // Add more game data objects as needed
    ];

    // Function to load and display games
    function loadGames() {
        gamesData.forEach((gameData) => {
            const gameDiv = document.createElement('div');
            gameDiv.classList.add('game');

            const gameLink = document.createElement('a');
            gameLink.href = gameData.url;

            const gameImage = document.createElement('div');
            gameImage.style.backgroundImage = `url('${gameData.imageUrl}')`;
            gameImage.style.backgroundSize = 'cover';
            gameImage.style.backgroundPosition = 'center center';
            gameImage.classList.add('game-image');

            const gameTitleDiv = document.createElement('div');
            gameTitleDiv.classList.add('game-title');
            gameTitleDiv.textContent = gameData.title;

            gameLink.appendChild(gameImage);
            gameDiv.appendChild(gameLink);
            gameDiv.appendChild(gameTitleDiv);

            container.appendChild(gameDiv);
        });
    }

    // Load initial games
    loadGames();
});