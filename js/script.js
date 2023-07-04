function enter() {


    var theGame = document.getElementById("MyFirstGame");
    theGame.classList.remove("hide");
    var enterWIndow = document.getElementById("enterWIndow");
    enterWIndow.classList.add("hide");


}




var checkFail = setInterval(function () {



    var playerTop = parseInt(window.getComputedStyle(player).getPropertyValue("top"));

    var obstacleLeft = parseInt(window.getComputedStyle(obstacle).getPropertyValue("left"));

    var theGame = document.getElementById("MyFirstGame");

    var enter = document.getElementById("enter");


    if (obstacleLeft < 30 && obstacleLeft > 0 && playerTop >= 160) {



        window.alert("You lost!");
        theGame.classList.add("hide");
        var enterWIndow = document.getElementById("enterWIndow");
        enterWIndow.classList.remove("hide");
        enter.classList.add("hide");
        enter.textContent = "Try again!";


        setTimeout(function () {


            obstacle.classList.add("animacija")


        }, 2000)


    }





}, 10);


var player = document.getElementById("player");

player.addEventListener("click", function () {




    player.classList.add("animacija1");




    setTimeout(function () {


        player.classList.remove("animacija1");

    }, 500);


});