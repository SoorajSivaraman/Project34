const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint= Matter.Constraint;
var engine, world, body, bgrdImg1, bgrdImg2, monsterScaredImg, ground, hero, fly, monster;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12,
    block13, block14, block15, block16, block17, block18, block19, block20, block21, block22, block23
    block24, block25, block26;

function preload() 
{
  bgrdImg1 = loadImage("GamingBackground.png");
  bgrdImg2 = loadImage("dayBackground.png")
  monsterScaredImg = loadImage("Monster-02.png");
}

function setup() 
{
  createCanvas(1366, 655);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(450, 500, 900, 10);
  hero = new Hero(350, 350, 150);
  fly = new Fly(hero.body, {x: 350, y: 200});
  block1 = new Block(550, 470, 50, 50);
  block2 = new Block(550, 420, 50, 50);
  block3 = new Block(550, 370, 50, 50);
  block4 = new Block(550, 320, 50, 50);
  block5 = new Block(550, 270, 50, 50);
  block6 = new Block(550, 220, 50, 50);
  block7 = new Block(550, 170, 50, 50);
  block8 = new Block(620, 470, 50, 50);
  block9 = new Block(620, 420, 50, 50);
  block10 = new Block(620, 370, 50, 50);
  block11 = new Block(620, 320, 50, 50);
  block12 = new Block(620, 270, 50, 50);
  block13 = new Block(620, 220, 50, 50);
  block14 = new Block(690, 470, 50, 50);
  block15 = new Block(690, 420, 50, 50);
  block16 = new Block(690, 370, 50, 50);
  block17 = new Block(690, 320, 50, 50);
  block18 = new Block(690, 270, 50, 50);
  block19 = new Block(690, 220, 50, 50);
  block20 = new Block(690, 170, 50, 50);
  block21 = new Block(690, 120, 50, 50);
  block22 = new Block(760, 470, 50, 50);
  block23 = new Block(760, 420, 50, 50);
  block24 = new Block(760, 370, 50, 50);
  block25 = new Block(760, 320, 50, 50);
  block26 = new Block(760, 270, 50, 50);
  monster = new Monster(1050, 325, 100);

  Engine.run(engine);
}

function draw() 
{
  background(bgrdImg1);
  fill("maroon");
  textFont("Lucida Calligraphy");
  textSize(30);
  text("Place the MOUSE on the HERO and drag to push the blocks on the MONSTER.", 60, 580);
  ground.display();
  hero.display();
  fly.display();
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  block13.display();
  block14.display();
  block15.display();
  block16.display();
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();
  block22.display();
  block23.display();
  block24.display();
  block25.display();
  block26.display();
  monster.display();
  detectCollision(block1, monster);
  detectCollision(block2, monster);
  detectCollision(block3, monster);
  detectCollision(block4, monster);
  detectCollision(block5, monster);
  detectCollision(block6, monster);
  detectCollision(block7, monster);
  detectCollision(block8, monster);
  detectCollision(block9, monster);
  detectCollision(block10, monster);
  detectCollision(block11, monster);
  detectCollision(block12, monster);
  detectCollision(block13, monster);
  detectCollision(block14, monster);
  detectCollision(block15, monster);
  detectCollision(block16, monster);
  detectCollision(block17, monster);
  detectCollision(block18, monster);
  detectCollision(block19, monster);
  detectCollision(block20, monster);
  detectCollision(block21, monster);
  detectCollision(block22, monster);
  detectCollision(block23, monster);
  detectCollision(block24, monster);
  detectCollision(block25, monster);
  detectCollision(block26, monster);

  if(monster.body.position.x > 1366 || monster.body.position.y > 655)
  {
    background(bgrdImg2);
    fill("orange");
    textFont("Lucida Calligraphy");
    textSize(50);
    text("Game Over !!", 600, 220);
    text("The Hero trounces the Monster !!", 250, 380);
  }
}

function mouseDragged()
{
  Matter.Body.setPosition(hero.body, {x: mouseX, y: mouseY});
}

function detectCollision(lBlock, lMonster)
{
	var monsterBodyPosition = lMonster.body.position;
	var blockBodyPosition = lBlock.body.position;

	var distance = dist(blockBodyPosition.x, blockBodyPosition.y, monsterBodyPosition.x, monsterBodyPosition.y);
	if(distance <= lMonster.r + (lBlock.width + lBlock.height)/2)
	{
    monster.updateImg(monsterScaredImg);
    Matter.Body.setStatic(lMonster.body, false);
  }
}