window.onload = function(){
  var totalScore1 = 0;
  var totalScore2 = 0;
  var totalScore3 = 0;
  var totalScore4 = 0;

    document.getElementById('btnTambah1').onclick = function(){
        var score = parseInt(document.getElementById('scorePlayer1').value);
        totalScore1 = totalScore1 + score;
        document.getElementById('totalScorePlayer1').value = totalScore1;
    }

    document.getElementById('btnTambah2').onclick = function(){
      var score = parseInt(document.getElementById('scorePlayer2').value);
      totalScore2 = totalScore2 + score;
      document.getElementById('totalScorePlayer2').value = totalScore2;
    }

    document.getElementById('btnTambah3').onclick = function(){
      var score = parseInt(document.getElementById('scorePlayer3').value);
      totalScore3 = totalScore3 + score;
      document.getElementById('totalScorePlayer3').value = totalScore3;
    }

    document.getElementById('btnTambah4').onclick = function(){
      var score = parseInt(document.getElementById('scorePlayer4').value);
      totalScore3 = totalScore3 + score;
      document.getElementById('totalScorePlayer4').value = totalScore4;
    }
};
