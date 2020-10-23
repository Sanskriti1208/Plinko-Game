
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var base;

function preload()
{
	
}

function setup() {
	createCanvas(480, 800);

	
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	for(var k = 0; k <= width; k = k + 80){
		divisions.push(new ground(k, height-divisionHeight/2, 10, divisionHeight));
	}
	for(var i = 40; i <= width; i = i + 50){
		plinkos.push(new Plinko(i, 75, 10));
	}
	for(var i = 15; i <= width-10; i = i + 50){
		plinkos.push(new Plinko(i, 175, 10));
	}
	for(var i = 40; i <= width-20; i = i + 50){
		plinkos.push(new Plinko(i, 275, 10));
	}
	for(var i = 15; i <= width-30; i = i + 50){
		plinkos.push(new Plinko(i, 375, 10));
	}
	

	base = new ground(240, 795, 480, 10);
	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  if(frameCount%30===0){
	particles.push(new Particle(random(width/2-10, width/2+10), 10, 10))
	}
  Engine.update(engine);
  
  drawSprites();
  for(var j = 0; j < particles.length; j++){ 
  particles[j].display();
  }
  for(var k = 0; k < divisions.length; k++){ 
	divisions[k].display();
	}
	for(var i = 0; i < plinkos.length; i++){ 
		plinkos[i].display();
		}
	base.display();
	fill("white");
	textSize(20);
  text("ᴡᴇʟᴄᴏᴍᴇ ᴛᴏ ᴘʟɪɴᴋᴏ ɢᴀᴍᴇ.", 120, 440)
}



