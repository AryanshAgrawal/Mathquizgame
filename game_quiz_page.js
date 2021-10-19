number1 = 0;
number2 = 0;
player_question = localStorage.getItem("player-nameinput1", player - nameinput1);
player_answer = localStorage.getItem("player-nameinput2", player - nameinput2);
document.getElementById("player_question").innerHTML = "player_question";
document.getElementById("player_answer").innerHTML = player_answer;
function send() {
    number1 = document.getElementById("number1").value;
    number2 = document.getElementById("number2").value;
    actual_answer = parseInt(number1) * parseInt(number2);
    question_number = "<h4>" + number1 + "x" + number2 + "</h4>";
    input_box = "<br>Answer : <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='Check()'>Check</button>";
    row = question_number + input_box + check_button;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1").value = "";
    document.getElementById("number2").value = "";
}
question_turn = "player1";
answer_turn = "player2";

function Check() {

    get_answer = document.getElementById("input_check_box").value;
    if (get_answer == actual_answer) {
        if (answer_turn == "player1") {
            update_player1_score = player1_score + 1;
            document.getElementById("player1_score").innerhtml = update_player1_score;
        }
        else {
            update_player2_score = player2_score + 1;
            document.getElementById("player2_score").innerhtml = update_player2_score;
        }
    }
    if (question_turn == "player1") {
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player2_name;
    }
    else {
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "Question Turn - " + player1_name;
    }
}