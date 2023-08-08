function preload(){
fundo=loadImage("12052.gif")
zumbi=loadImage("WME8.gif")
}

function setup() {
 createCanvas(1600,700)
 player=createSprite(190,500,4,10)
 player.addImage(zumbi)
 player.scale=0.5
}

function draw() {
 background("black")
image(fundo,0,0,1600,700)
player.velocityX=5
if(player.x>1600){
    player.x=0

}

if(player.x>900){
    player.velocityY=3
    player.velocityX=0
    
}



if(keyDown("space")&&player.y>500){
    player.velocityY=-8
    player.x=player.x+10
}



drawSprites()
}