$(document).ready(function() {

    writeScore(Number(getPlayerScore()), Number(getCmpScore()));

    var rock = $('.rock');
    var paper = $('.paper');
    var scissors = $('.scissors');

    function random(max) {
        return Math.floor(Math.random() * Math.floor(max));
    }

    var rockCmp = $('.rock-cmp');
    var paperCmp = $('.paper-cmp');
    var scissorsCmp = $('.scissors-cmp');



    function randomComputer() {

        var randomCmp = random(3);
        switch (randomCmp) {
            case 0:
                rockCmp.animate({ top: '-=100px' });
                return 'rock';
                break;
            case 1:
                paperCmp.animate({ top: '-=100px' });
                return 'paper';
                break;
            case 2:
                scissorsCmp.animate({ top: '-=100px' });
                return 'scissors';
                break;
        }
    }

    function getPlayerScore() {
        return localStorage.getItem('playerScore');
    }


    function getCmpScore() {
        return localStorage.getItem('computerScore');
    }

    function setPlayerScore(score) {
        return localStorage.setItem('playerScore', score);
    }


    function setCmpScore(score) {
        return localStorage.setItem('computerScore', score);
    }

    function writeScore(player, computer) {
        $('#player h2').html(player);
        $('#computer h2').html(computer);
    }

    var scoreCmp = 0;
    var scorePlayer = 0;




    function ishod(brojIshoda) {

        setTimeout(() => {
            switch (brojIshoda) {
                case 1:
                    scoreCmp = Number(getCmpScore());
                    setCmpScore(++scoreCmp);

                    writeScore('L', 'W');
                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);

                    break;
                case 2:
                    scorePlayer = Number(getPlayerScore());
                    setPlayerScore(++scorePlayer);
                    writeScore('W', 'L');

                    setTimeout(() => {
                        window.location.reload();
                    }, 1000);


                    break;
                case 3:
                    scoreCmp = Number(getCmpScore());
                    setCmpScore(scoreCmp + 0.5);

                    scorePlayer = Number(getPlayerScore());
                    setPlayerScore(scorePlayer + 0.5);

                    writeScore('D', 'D');

                    setTimeout(() => {
                        window.location.reload();

                    }, 1000);

                    break;
            }
        }, 700);

    }




    rock.bind('click', function(e) {
        var izbor = randomComputer();

        if (izbor == "rock") {
            ishod(3);
        } else if (izbor == "scissors") {
            ishod(2);
        } else {
            ishod(1);
        }

    });


    paper.bind('click', function(e) {
        var izbor = randomComputer();


        if (izbor == "rock") {
            ishod(2);
        } else if (izbor == "paper") {
            ishod(3);
        } else {
            ishod(1);
        }
    });

    scissors.bind('click', function(e) {
        var izbor = randomComputer();

        if (izbor == "paper") {
            ishod(2);
        } else if (izbor == "rock") {
            ishod(1);
        } else {
            ishod(3);
        }
    });


    $('.reset').bind('click', function(e) {
        localStorage.clear();
        window.location.reload();
    });



});