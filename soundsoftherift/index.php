<!DOCTYPE html>
<html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Sounds of the Rift</title>
      <link rel="stylesheet" href="css/styles.css">
    </head>
  <body>
    <header>
      <h1>Sounds of the Rift</h1>
    </header>
    <main>
      <div id="menuWrapper">

        <select name="champions" id="sel">
          <option value="" disabled selected>Select a Character</option>
        </select>
        
      </div>
      <div class="buttons">
        <div data-key="49" class="key">
          <kbd>1</kbd>
          <span class="sound">laugh</span>
        </div>
        <div data-key="50" class="key">
          <kbd>2</kbd>
          <span class="sound">joke</span>
        </div>
        <div data-key="51" class="key">
          <kbd>3</kbd>
          <span class="sound">Attack</span>
        </div>
        <div data-key="52" class="key">
          <kbd>4</kbd>
          <span class="sound">Dying</span>
        </div>
        <div data-key="53" class="key">
          <kbd>5</kbd>
          <span class="sound">Effort</span>
        </div>
        <div data-key="54" class="key">
          <kbd>6</kbd>
          <span class="sound">Move</span>
        </div>
        <div data-key="55" class="key">
          <kbd>7</kbd>
          <span class="sound">Taunt</span>
        </div>
        <div data-key="56" class="key">
          <kbd>8</kbd>
          <span class="sound">Ultimate</span>
        </div>
      </div>
    </main>

    <audio id="audio1" data-key="49" src=""></audio>
    <audio id="audio2" data-key="50" src=""></audio>
    <audio id="audio3" data-key="51" src=""></audio>
    <audio id="audio4" data-key="52" src=""></audio>
    <audio id="audio5" data-key="53" src=""></audio>
    <audio id="audio6" data-key="54" src=""></audio>
    <audio id="audio7" data-key="55" src=""></audio>
    <audio id="audio8" data-key="56" src=""></audio>
   
    <div id="footerWrapper">
    <?php require_once 'footer.php'; ?>
    </div>
    <script src="js/scripts.js" type="application/javascript"></script>
  </body>
</html>