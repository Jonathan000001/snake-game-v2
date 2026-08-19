let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
let score = 0;
let snake = [];
snake[0] = {
    x: 8 * box,
    y: 8 * box,
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box,
}

function drawBackground() {
    context.fillStyle = "gray";
    context.fillRect(0, 0, 16 * box, 16 * box);
}

function drawSnake(){
    let coralColors = ["black", "white", "black", "red", "red"];

    for (let i = 0; i < snake.length; i++){
        let currentColor = coralColors[i % coralColors.length];

        context.fillStyle = currentColor;
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

function drawFood(){
    context.fillStyle = "green";
    context.fillRect(food.x, food.y, box, box);
}

document.addEventListener('keydown', update);

function update(event){
    if(event.keyCode == 37 && direction != "right") direction = "left";
    if(event.keyCode == 38 && direction != "down") direction = "up";
    if(event.keyCode == 39 && direction != "left") direction = "right";
    if(event.keyCode == 40 && direction != "up") direction = "down";
    
    if(event.keyCode == 13) {
        resetGame();
    }
}

function gameLoop(){
    let head = snake[0]; 
    
    if (head.x < 0 || head.x + box > 16 * box || head.y < 0 || head.y + box > 16 * box) { 
        clearInterval(game); 
        alert("Game Over! You hit the wall. 😕"); 
        return;  
    }

    // Adicionei 'let' antes do 'i' aqui para seguir as boas práticas
    for(let i = 1; i < snake.length; i++){ 
        if(snake[0].x == snake[i].x && snake[0].y == snake[i].y){
            clearInterval(game);
            alert("Game Over! You bit yourself. 😕");
            return; 
        }
    }

    drawBackground();
    drawSnake();
    drawFood();
    
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    if(snakeX != food.x || snakeY != food.y){
         snake.pop();
    }else{
        food.x = Math.floor(Math.random() * 15 + 1) * box;
        food.y = Math.floor(Math.random() * 15 + 1) * box;

        score++;
        
        document.getElementById("score").innerHTML = score;
    }
   
    let newHead = {
        x: snakeX,
        y: snakeY,
    }

    snake.unshift(newHead);
}

let game = setInterval(gameLoop, 100);
let btnReset = document.getElementById("btn-reset");

function resetGame() {
    snake = [];
    snake[0] = {
        x: 8 * box,
        y: 8 * box
    }

    direction = "right";

    food = {
        x: Math.floor(Math.random() * 15 + 1) * box,
        y: Math.floor(Math.random() * 15 + 1) * box
    }

    score = 0;
    document.getElementById("score").innerHTML = score;
    
    clearInterval(game);
    game = setInterval(gameLoop, 100);
}

btnReset.addEventListener("click", resetGame);