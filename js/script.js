function enter() {


    var theGame = document.getElementById("MyFirstGame");
    theGame.classList.remove("hide");
    var enterWIndow = document.getElementById("enterWIndow");
    enterWIndow.classList.add("hide");


}





var player = document.getElementById("player");

var obstacle = document.getElementById("obstacle");

function jump() {


    if (player.classList != "animacija") {


        player.classList.add("animacija");


    }

    setTimeout(function () {


        player.classList.remove("animacija");

    }, 500);

}

var checkFail = setInterval(function () {



    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    var theGame = document.getElementById("MyFirstGame");

    var enter = document.getElementById("enter");

    var startAgain = document.getElementById("startAgain");

    if (obstacleLeft < 100 && obstacleLeft > 0 && playerTop >= 160) {



        window.alert("You lost!");
        theGame.classList.add("hide");
        var enterWIndow = document.getElementById("enterWIndow");
        enterWIndow.classList.remove("hide");
        enter.classList.add("hide");
        enter.textContent = "Try again!";


        setTimeout(function () {


            obstacle.classList.add("animacija")


        }, 3000)


    }





}, 10);