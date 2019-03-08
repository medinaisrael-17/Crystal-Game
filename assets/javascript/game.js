$(document).ready(function () {
    //set the users score, wins, and losses
    var userScore = 0;
    var wins = 0;
    var losses = 0;

    function reset() {
        //select a random number to be the score 19-120
        targetScore = Math.floor(Math.random() * 120) + 19;
        //select a random number to be assigned to each button
        var btn1 = Math.floor(Math.random() * 12) + 1;
        var btn2 = Math.floor(Math.random() * 12) + 1;
        var btn3 = Math.floor(Math.random() * 12) + 1;
        var btn4 = Math.floor(Math.random() * 12) + 1;
        //reset the user score to 0
        userScore = 0;


        $("#button-1").val(btn1);
        console.log($("#button-1").val())
        $("#button-2").val(btn2);
        console.log($("#button-2").val())
        $("#button-3").val(btn3);
        console.log($("#button-3").val())
        $("#button-4").val(btn4);
        console.log($("#button-4").val())
        console.log("================");
        $("#target-score").val(targetScore);
        $("#target-score").text(targetScore);
        $("#user-score").val(userScore);
        $("#user-score").text(userScore);

    };

    reset();


    //when each button is clicked add it to the score
    $(".btn").on("click", function () {
        userScore += parseInt($(this).val());
        $("#user-score").text(userScore);

        // if score and target are equal 
        if (userScore === targetScore) {
            //add to the wins
            wins++;
            $("#win-counter").val(wins);
            $("#win-counter").text(wins)
            //reset target score and crystals
            reset();

        }

        //if score greater than target 
        if (userScore > targetScore) {
            //add to the loss
            losses++;
            $("#loss-counter").val(losses);
            $("#loss-counter").text(losses);
            //reset target score
            reset();
        }

    });

});

