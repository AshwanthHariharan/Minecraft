var canvas = new fabric.Canvas('myCanvas');

var player_x = 10;

var player_y = 10;

var block_image_width = 10;

var block_image_height = 10;

var player_object = "";

var block_image_object = "";

function player_update() {

fabric.Image.fromURL("player.png" , function(Img){

    player_object = Img;

    player_object.scaleToWidth(150);

    player_object.scaleToHeight(140);

    player_object.set({

    top:player_y,

    left:player_x

    });

    canvas.add(player_object);
    
});

}

function new_Image(get_Image) {

    fabric.Image.fromURL(get_Image , function(Img){
    
      block_image_object = Img;
    
      block_image_object.scaleToWidth(block_image_width);
    
      block_image_object.scaleToHeight(block_image_height);
        
      block_image_object.set({

         top:player_y,
     
         left:player_x
     
         });
    
        canvas.add(block_image_object);
        
    });
    
    }

    window.addEventListener("keydown", my_keydown);

    function my_keydown(e) {

    keyPressed = e.keyCode;

    if(e.shiftKey == true && keyPressed == '80') {

    console.log("p and shift is pressed");

    block_image_height = block_image_height + 10;

    block_image_width = block_image_width + 10;

    document.getElementById("current_height").innerHTML = block_image_height;

    document.getElementById("current_width").innerHTML = block_image_width;

}

    if(e.shiftKey == true && keyPressed == '77') {

        console.log("m and shift is pressed");
    
        block_image_height = block_image_height - 10;
    
        block_image_width = block_image_width - 10;
    
        document.getElementById("current_height").innerHTML = block_image_height;
    
        document.getElementById("current_width").innerHTML = block_image_width;

    }

    if(keyPressed == '38') {

    up();
    
    console.log("up");

    }

    if(keyPressed == '40') {

        down();
        
        console.log("down");
    
    }

    if(keyPressed == '37') {

            left();
            
            console.log("left");
        
    }

    if(keyPressed == '39') {

        right();
        
        console.log("right");
    
     } 

     if(keyPressed == '84') {

        new_Image("trunk.jpg");
        
        console.log("t");
    
     } 

     if(keyPressed == '68') {

        new_Image("dark_green.png");
        
        console.log("d");
    
     } 

     if(keyPressed == '76') {

        new_Image("light_green.png");
        
        console.log("l");
    
     } 

     if(keyPressed == '71') {

        new_Image("ground.png");
        
        console.log("g");
    
     } 

     if(keyPressed == '87') {

        new_Image("wall.jpg");
        
        console.log("w");
    
     } 

     if(keyPressed == '89') {

        new_Image("yellow_wall.png");
        
        console.log("y");
    
     }
     
     if(keyPressed == '82') {

        new_Image("roof.jpg");
        
        console.log("r");
    
     } 

     if(keyPressed == '67') {

        new_Image("cloud.jpg");
        
        console.log("c");
    
     } 

     if(keyPressed == '85') {

        new_Image("unique.png");
        
        console.log("u");
    
     } 

    }


function up() {

if(player_y >=0) {

player_y = player_y - block_image_height;

console.log(block_image_height);

console.log(player_y,player_x);

canvas.remove(player_object);

player_update();

}

}

function down() {

   if(player_y <=500) {
   
   player_y = player_y + block_image_height;
   
   console.log(block_image_height);
   
   console.log(player_y,player_x);
   
   canvas.remove(player_object);
   
   player_update();
   
   }
   
   }

   function left() {

      if(player_x >=0) {
      
      player_x = player_x - block_image_width;
      
      console.log(block_image_width);
      
      console.log(player_y,player_x);
      
      canvas.remove(player_object);
      
      player_update();
      
      }
      
      }

      function right() {

         if(player_x <=900) {
         
         player_x = player_x + block_image_width;
         
         console.log(block_image_width);
         
         console.log(player_y,player_x);
         
         canvas.remove(player_object);
         
         player_update();
         
         }
         
         }