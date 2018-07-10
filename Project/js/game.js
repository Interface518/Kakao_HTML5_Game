var snake, apple, squareSize, score, speed,
    updateDelay, direction, new_direction,
    addNew, cursors, scoreTextValue, speedTextValue, 
    textStyle_Key, textStyle_Value;
 
var Game = {
 
    preload : function() {
        
        // 뱀의 몸통과 사과 이미지 두개를 preload 해놓는다.
        game.load.image('snake', './images/snake.png');
        game.load.image('apple', './images/apple.png');
        
    },
 
    create : function() {
        snake = [];                     // sanke.png 를 얼마나 표시할지를 나타낼 변수
        apple = {};                     // 사과
        squareSize = 15;                // 사과/뱀의 1 블럭 사이즈
        score = 0;                      // Game score.
        speed = 0;                      // Game speed.
        updateDelay = 0;                // 게임 스피드와 연계되어 뱀의 속도를 결정짓는 변수
        direction = 'right';            // 시작시 뱀의 방향
        new_direction = null;           // 키 입력시 변경될 뱀의 방향
        addNew = false;                 // 뱀이 사과를 먹었을 때, 새로운 사과를 놓을지 여부
 
        // 기본 Phaser 컨트롤러를 keyboard input 으로 받겠다고 명시
        cursors = game.input.keyboard.createCursorKeys();
 
        game.stage.backgroundColor = '#061f27';
 
        
        for(var i = 0; i < 10; i++){
            snake[i] = game.add.sprite(150 + i * squareSize, 150, 'snake');  // Parameters are (X coordinate, Y coordinate, image)
        }
 
 
        // 첫 사과 배치
        this.generateApple();
 
        
        // 상단의 텍스트 (점수, 속도)
        textStyle_Key = { font: "bold 14px sans-serif", fill: "#46c0f9", align: "center" };
        textStyle_Value = { font: "bold 18px sans-serif", fill: "#fff", align: "center" };
 
        // Score.
        game.add.text(30, 20, "SCORE", textStyle_Key);
        scoreTextValue = game.add.text(90, 18, score.toString(), textStyle_Value);
        
        // Speed.
        game.add.text(500, 20, "SPEED", textStyle_Key);
        speedTextValue = game.add.text(558, 18, speed.toString(), textStyle_Value);
 
    },
 
 
 
    update: function() {
        // 추후 업뎃
    },
 
 
    generateApple: function(){
 
        // 사과를 랜덤 위치에 놓는다.
        var randomX = Math.floor(Math.random() * 40 ) * squareSize,
            randomY = Math.floor(Math.random() * 30 ) * squareSize;
 
        // Add a new apple.
        apple = game.add.sprite(randomX, randomY, 'apple');
        
    }
 
};