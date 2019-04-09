$(".characterImage").hide();
$(".submit").click(function() {
    var userAge = $(".age").val();
    var userChoice = $(".preference").val();
    if (userAge > 18 && (userChoice === "alone" || userChoice === "pair")) {
        $(".characterName").text("Joel... I don't know his last name");
        $(".J").show();
    } else if (userAge > 18 && userChoice === "together"){
        $(".characterName").text("Marlene... I also don't know her last name");
        $(".M").show();
    } else if (userAge < 18 && (userChoice ===  "alone" || userChoice === "pair")) {
        $(".characterName").text("Ellie... the game didn't specify their last names");
        $(".E").show();
    } else if (userAge < 18 && userChoice === "together") {
        $(".characterName").text("Riley... some last name"); 
        $(".R").show();
    } else if (userChoice === "alone/pair") {
        $(".characterName").text("Please enter just one choice");
    } else {
        $(".characterName").text("Something is wrong in the fields above. Please try again.");
    }
});