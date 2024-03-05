(function(){
    'use strict'
    console.log('reading JS');

    /*//This gets the current player: 
    gameData.players[gameData.index]

    //This gets the first die and the second die: 
    gameData.dice[gameData.roll1-1]
    gameData.dice[gameData.roll2-1]

    //This gets the score of the current player: 
    gameData.score[gameData.index]

    //This gets the index, or turn
    gameData.index

    //This gets the individual dice values and the added dice value
    gameData.roll1
    gameData.roll2
    gameData.rollSum

    //This gets the winning threshold
    gameData.rollSum*/

    const startGame = document.querySelector('#startgame');
    const gameControl = document.querySelector('#gamecontrol');
    const game = document.querySelector('#game');
        game.className = "hidden";
    const score = document.querySelector('#score');
        score.className = 'hidden';
    const actionArea = document.querySelector('#actions');
        actionArea.className = 'hidden';

    const rules = document.getElementById('rules').className = "hidden";

    const gameData = {
        dice: ['images/1die.jpg', 'images/2die.jpg', 'images/3die.jpg', 'images/4die.jpg', 'images/5die.jpg', 'images/6die.jpg'],
        players: ['FLARA', 'DEMIGODZILLA'],
        score: [0, 0],
        roll1: 0,
        roll2: 0,
        rollSum: 0,
        index: 0,
        gameEnd: 29
    };

    startGame.addEventListener("click", function(){
        gameData.index = Math.round(Math.random());
        console.log(gameData.index);

        document.querySelector('body').className = 'citybg';
        document.getElementById('title').className = 'hidden';
        game.className = "showing";
        score.className = "showing";
        actionArea.className = "showing";
        gameControl.innerHTML = '<button id="quit">QUIT</button>';
        

        document.getElementById('quit').addEventListener("click", function(){
            location.reload();
        });

        setUpTurn();
    });

    function setUpTurn() {
        game.innerHTML = `<p>Roll the dice for the ${gameData.players[gameData.index]}</p>`;
        actionArea.innerHTML = '<button id="roll">Roll the Dice</button>';
        document.getElementById('roll').addEventListener('click', function(){
            throwDice();
        });
    }

    function throwDice(){
        actionArea.innerHTML = '';
        gameData.roll1 = Math.floor(Math.random() * 6) + 1;
        gameData.roll2 = Math.floor(Math.random() * 6) + 1;

        game.innerHTML = `<div><img src="${gameData.dice[gameData.roll1-1]}"> 
                            <img src="${gameData.dice[gameData.roll2-1]}"></div>
                            
                            <p id="rollfor">Roll the dice for the ${gameData.players[gameData.index]}</p>`;

        gameData.rollSum = gameData.roll1 + gameData.roll2;

        if(gameData.rollSum === 2){
            console.log("snake eyes were rolled");

            game.innerHTML += `<p>${gameData.players[gameData.index]} was healed</p>`;
            gameData.score[gameData.index] = 0;
            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            setTimeout(setUpTurn, 2000);

            showCurrentScore();
        } else if (gameData.roll1 === 1 || gameData.roll2 === 1){
            console.log("one of the two die was a 1");

            gameData.index ? (gameData.index = 0) : (gameData.index = 1);
            game.innerHTML += `<p>Switching to ${gameData.players[gameData.index]}</p>`;
            setTimeout(setUpTurn, 2000);
        } else {
            console.log("the game proceeds");

            gameData.score[gameData.index] = gameData.score[gameData.index] + gameData.rollSum;
            actionArea.innerHTML = `<button id="rollagain">Roll again</button> or <button id="pass">Pass</button>`;

            document.getElementById('rollagain').addEventListener('click', function (){
                throwDice();
            });

            document.getElementById('pass').addEventListener('click', function(){
                gameData.index ? (gameData.index = 0) : (gameData.index = 1);
                setUpTurn();
            });

            checkWinningCondition();
        }

        function checkWinningCondition(){
            if(gameData.score[gameData.index] > gameData.gameEnd){
                score.innerHTML = `<h2>${gameData.players[gameData.index]} WINS`;

                actionArea.innerHTML = '';
                document.getElementById('quit').innerHTML = "Start a New Game?";
            } else {
                showCurrentScore();
            }
        }

        function showCurrentScore(){
            score.innerHTML = `<p>${gameData.score[0]}</p> <p>${gameData.score[1]}</p>`;
        }
    }


})();