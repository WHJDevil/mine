var canvas=new fabric.Canvas('MyCanvas');
player_x=10;
player_y=10;
block_image_width=30;
block_image_height=30;
var player_object="";
var block_imgobject="";
function player_update(){
    fabric.Image.fromURL("player.png",function(Img){
        player_object=Img;
        player_object.scaleToWidth(150);
        player_object.scaleToHeight(140);
        player_object.set({
            top:player_y,
            left:player_x
        });
        canvas.add(player_object);
        
        
    });
}
function new_image(get_image){
    fabric.Image.fromURL(get_image,function(Img){
        block_imgobject =Img;
        block_imgobject.scaleToWidth(block_image_width);
        block_imgobject.scaleToHeight(block_image_height);
        block_imgobject.set({
            top:player_y,
            left:player_x
        });
        canvas.add(block_imgobject);
        
        
    });
}
window.addEventListener("keydown",My_Keydown);
function My_Keydown(e){
    var Keypressed=e.keyCode;
    console.log(Keypressed);
    if(e.shiftkey==true&&Keypressed=='80'){
        console.log("p and shift pressed together");
        block_image_width=block_image_width+10;
        block_image_height=block_image_height+10;
        document.getElementById('currentWidth').innerHTML=block_image_width;
        document.getElementById('currentHeight').innerHTML=block_image_height;
        
    }
    if(e.shiftkey==true&&Keypressed=='77'){
        console.log("m and shift pressed together");
        block_image_width=block_image_width-10;
        block_image_height=block_image_height-10;
        document.getElementById('currentWidth').innerHTML=block_image_width;
        document.getElementById('currentHeight').innerHTML=block_image_height;
        
    }
    if(Keypressed=='38'){
        UP();
        console.log("UP")
    }
    if(Keypressed=='40'){
        down();
        console.log("down")
    }
    if(Keypressed=='37'){
        left();
        console.log("left")
    }
    if(Keypressed=='39'){
        right();
        console.log("right")
    }
    if (Keypressed == '87'){
        new_image('wall.jpg');
        console.log("w")
    }
    if (Keypressed == '89'){
        new_image('yellow_wall.png');
        console.log("y")
    }
    if (Keypressed == '85'){
        new_image('unique.png');
        console.log("u")
    }
    if (Keypressed == '84'){
        new_image('trunk.jpg');
        console.log("t")
    }
    if (Keypressed == '82'){
        new_image('roof.png');
        console.log("r")
    }
    if (Keypressed == '76'){
        new_image('light_green.png');
        console.log("l")
    }
    if (Keypressed == '71'){
        new_image('ground.png');
        console.log("g")
    }
    if (Keypressed == '68'){
        new_image('dark_green.png');
        console.log("d")
    }
    if (Keypressed == '67'){
        new_image('cloud.png');
        console.log("c")
    }
}
function down(){
    if(player_y<=500){
        player_y=player_y+block_image_height;
        console.log("block image height="+block_image_height);
        console.log("when UP arrow Key is pressed,X= "+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

    
}
function UP(){
    if(player_y>=0){
        player_y=player_y-block_image_height;
        console.log("block image height="+block_image_height);
        console.log("when UP arrow Key is pressed,X= "+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

    
}
function left(){
    if(player_x>0){
        player_x=player_x-block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when UP arrow Key is pressed,X= "+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

    
}
function right(){
    if(player_x<=850){
        player_x=player_x+block_image_width;
        console.log("block_image_width="+block_image_width);
        console.log("when UP arrow Key is pressed,X= "+player_x+" ,y="+player_y);
        canvas.remove(player_object);
        player_update();
    }

    
}