var player_1_name = localStorage.getItem("store_1");
var player_2_name = localStorage.getItem("store_2");
var word ="";
var ans="";

document.getElementById("player1_name").innerHTML = player_1_name + ":";
document.getElementById("player2_name").innerHTML = player_2_name + ":";
var player_1_score = 0;
var player_2_score = 0;
document.getElementById("player1_score").innerHTML = player_1_score;
document.getElementById("player2_score").innerHTML = player_2_score;
document.getElementById("Q_Turn").innerHTML = player_1_name;
document.getElementById("A_Turn").innerHTML = player_2_name;
var A1_turn=player_2_name;
var Q1_Turn=player_1_name;
function send_word()
{
    var get_word = document.getElementById("word_input").value;
     word = get_word.toLowerCase();
    console.log(word);
    var first_letter = word.charAt(1);
    console.log(first_letter);
    var middle_cal = Math.floor(word.length/2);
    var middle_letter = word.charAt(middle_cal);
    console.log(middle_letter);
    var final_letter = word.charAt(word.length-1);
    console.log(final_letter);
    var replace_first = word.replace(first_letter , "_");
    var replace_middle = replace_first.replace(middle_letter , "_");
    var replace_final = replace_middle.replace(final_letter , "_");
    console.log(replace_final);
    document.getElementById("output").innerHTML = "Q: " + replace_final + "<br> <br> <input id='input_A'> <br> <br>  <button onclick='check()' id='button_check'> Check</button>" ;

document.getElementById("word_input").value = "";
    }
function check()
{
     var get_Ans = document.getElementById("input_A").value;
      ans = get_Ans.toLowerCase();
      console.log(ans);
     if(word == ans)
     {
       if(A1_turn == player_1_name)
       {     console.log(player_1_name);
           player_1_score=player_1_score+1;
           document.getElementById("player1_score").innerHTML = player_1_score;
           Q1_Turn = player_1_name;
           A1_Turn = player_2_name;
           document.getElementById("Q_Turn").innerHTML=Q1_Turn;
           document.getElementById("A_Turn").innerHTML=A1_Turn;
           document.getElementById("result").innerHTML = "Correct";

       }
       else if(A1_turn == player_2_name)
       {
           player_2_score=player_2_score+1;
           document.getElementById("player2_score").innerHTML = player_2_score;
           Q_Turn = player_2_name;
           A1_Turn = player_1_name;
           document.getElementById("Q_Turn").innerHTML=Q_Turn;
           document.getElementById("A_Turn").innerHTML=A1_Turn;
           document.getElementById("result").innerHTML = "Correct";
       }
     }
     else if (word != ans)
     {
        if(A1_turn == player_1_name)
        {     console.log(player_1_name);
            
            document.getElementById("player1_score").innerHTML = player_1_score;
            Q1_Turn = player_1_name;
            A1_Turn = player_2_name;
            document.getElementById("Q_Turn").innerHTML=Q1_Turn;
            document.getElementById("A_Turn").innerHTML=A1_Turn;
            document.getElementById("result").innerHTML = "Correct";
 
        }
        else if(A1_turn == player_2_name)
        {
            
            document.getElementById("player2_score").innerHTML = player_2_score;
            Q_Turn = player_2_name;
            A1_Turn = player_1_name;
            document.getElementById("Q_Turn").innerHTML=Q_Turn;
            document.getElementById("A_Turn").innerHTML=A1_Turn;
            document.getElementById("result").innerHTML = "Correct";
        }
     }
}




