window.onload = function () {
    config = {
        autoplay: false, // Let a bot play the game
        autoplayRestart: true, // Restart the game automatically once a bot loses
        showFieldOnStart: true, // Show a bunch of random blocks on the start screen (it looks nice)
        theme: 'gameboy', // The theme name or a theme object
        blockWidth: 10, // How many blocks wide the field is (The standard is 10 blocks)
        autoBlockWidth: false, // The blockWidth is dinamically calculated based on the autoBlockSize. Disabled blockWidth. Useful for responsive backgrounds
        autoBlockSize: 12, // The max size of a block for autowidth mode
        difficulty: 'normal', // Difficulty (normal|nice|evil).
        speed: 20, // The speed of the game. The higher, the faster the pieces go.
      
        // Copy
        playText: 'Let\'s play some Tetris',
        playButtonText: 'Play',
        gameOverText: 'Game Over',
        restartButtonText: 'Play Again',
        scoreText: 'Score',
      
        // Basic Callbacks
        onStart: function(){},
        onRestart: function(){},
        onGameOver: function(score){},
      
        // When a line is made. Returns the number of lines, score assigned and total score
        onLine: function(lines, scoreIncrement, score){}
      }
    $('.game').blockrain(config);  
  };
  
/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleNav() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}
