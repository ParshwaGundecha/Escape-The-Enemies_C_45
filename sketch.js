var canvas, player, lava;
var bk_img, ground_img, player_img;;
var stair1, stair2, stair3, stair4, stairGroup;
var pipe1, pipe2, pipe3, pipeGroup;

var ground, cloud, cloudImg, stairImg;
var pipieImg, lavaImg,treeImg;
var x = 200;

function preload() {
    bk_img = loadImage("./images/background_img.png");
    ground_img = loadImage("./images/grass_img.png");
    player_img = loadImage("./images/player_image.png");
    cloudImg = loadImage("./images/cloud.png");
    stairImg = loadImage("./images/stairs_.png");
    pipieImg = loadImage("./images/pipe.png");
    lavaImg = loadImage("./images/lavaImg.png");
    treeImg=loadImage("./images/treeee.png");
}

function setup() {
    canvas = createCanvas(windowWidth + 2000, windowHeight - 10);

    stairGroup = new Group();
    pipeGroup = new Group();

    player = createSprite(windowWidth / 2 - 600, windowHeight - 330, 20, 50);
    player.addImage(player_img);
    player.scale = 0.06;
    player.setCollider("rectangle", 50, -50, player.width - 650, player.height - 10);
    // player.debug=true; 

    ground = createSprite(windowWidth / 2, windowHeight - 100, windowWidth, 20);
    ground.shapeColor = "brown";

    stair1 = createSprite(windowWidth / 2 - 325, windowHeight - 120, 140, 20);
    stair2 = createSprite(windowWidth / 2 - 310, windowHeight - 140, 110, 20);
    stair3 = createSprite(windowWidth / 2 - 295, windowHeight - 160, 80, 20);
    stair4 = createSprite(windowWidth / 2 - 280, windowHeight - 180, 50, 20);
    stairGroup.add(stair1);
    stairGroup.add(stair2);
    stairGroup.add(stair3);
    stairGroup.add(stair4);
    stairGroup.setColorEach("black");

    pipe1 = createSprite(windowWidth / 2 - 150, windowHeight - 155, 30, 90);
    pipe1.addImage(pipieImg);
    pipe2 = createSprite(windowWidth / 2 - 30, windowHeight - 155, 30, 90);
    pipe2.addImage(pipieImg);
    pipe3 = createSprite(windowWidth / 2 - (-100), windowHeight - 155, 30, 90);
    pipe3.addImage(pipieImg);
    pipeGroup.add(pipe1);
    pipeGroup.add(pipe2);
    pipeGroup.add(pipe3);
    pipe1.setCollider("rectangle", -10, 0, pipe1.width - 280, pipe1.height - 50);
    pipe2.setCollider("rectangle", -10, 0, pipe2.width - 280, pipe2.height - 50);
    pipe3.setCollider("rectangle", -10, 0, pipe3.width - 280, pipe3.height - 50);
    pipeGroup.setScaleEach(0.2);

    lava = createSprite(windowWidth / 2 - 212, windowHeight - 130, 86, 50);
    lava.addImage(lavaImg);
    lava.scale = 0.47;

    // tree=createSprite(200,200);
    // tree.addImage(treeImg);
}

function draw() {
    background(bk_img);

    if (keyDown("d")) {
        player.x = player.x + 5
    }
    if (keyDown("a")) {
        player.x = player.x - 5
    }
    if (keyDown("space") && player.y >= 520) {
        player.velocityY = -12
    }
    player.velocityY += 2.5;

    //CreatingClouds
    for (var i = 0; i < 10; i++) {
        cloud = createSprite(x = x + 500, 200, 100, 50);
        cloud.addImage(cloudImg);
        cloud.y = Math.round(random(100, 250));
        cloud.scale = 0.2;
    }

    //GameCamera
    camera.position.x = player.position.x + windowWidth;

    player.collide(ground);
    player.collide(stairGroup);
    player.collide(pipeGroup);

    drawSprites();
}
