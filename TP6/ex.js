let targetNumber, attempts, bestScore = Infinity, gamesPlayed = 0;

        function startGame(level) {
            const ranges = { easy: 1000, medium: 1000000, hard: 1000000000 };
            targetNumber = Math.floor(Math.random() * ranges[level]);
            attempts = 0;
            document.getElementById('message').textContent = `Game started! Guess a number between 0 and ${ranges[level]}.`;
            document.getElementById('guessInput').value = '';
        }

        function checkGuess() {
            const guess = parseInt(document.getElementById('guessInput').value, 10);
            attempts++;
            if (guess < targetNumber) {
                document.getElementById('message').textContent = 'Too low! Try again.';
            } else if (guess > targetNumber) {
                document.getElementById('message').textContent = 'Too high! Try again.';
            } else {
                document.getElementById('message').textContent = `Correct! You guessed it in ${attempts} attempts.`;
                gamesPlayed++;
                if (attempts < bestScore) bestScore = attempts;
                document.getElementById('stats').textContent = `Games Played: ${gamesPlayed}, Best Score: ${bestScore} attempts.`;
            }
        }
        