
//Create a reference for canvas 
canvas = document.getElementById('myCanvas');
ctx = canvas.getcontext("2d");
greencar_width=100;
greencar_height=90;
background_image="parkingLot.jpg";
greencar_image="car2.png";
greencar_x=10;
greencar_y=10;
//Give specific height and width to the car image

greencar_width = 75;
greencar_height = 100;

//Set initial position for a car image.
greencar_x = 5;
greencar_y = 225;

function add() {
	//upload car, and background images on the canvas.
	background_imgTag = new Image();
	background_imgTag.onload = uploadBackground;
	background_imgTag.src = background_image

	greencar_imgTag = new Image();
	greencar_imgTag = uploadgreencar;
	greencar_imgTag = greencar_image
}

function uploadBackground() {
	//Define function ‘uploadBackground’
ctx.drawimage(background_imgTag, 0, 0, canvas.width, canvas.height)
}

function uploadgreencar() {
	//Define function ‘uploadgreencar’.
	ctx.drawimage(greencar_imgTag, greencar_x, greencar_y, greencar.width, greencar.height)
	
}


window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
	
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
	
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
		
		
}

function up(){
	if(greencar_y>=0)
	{
		greencar_y=greencar_y-10;
		console.log("When up arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
		uploadBackground();
		uploadgreencar();
	}
	
	
	}
	function down(){
		if(greencar_y<=500)
		{
			greencar_y=greencar_y+10;
			console.log("When down arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
			uploadBackground();
			uploadgreencar();
		}
		
		
		}
		function left(){
			if(greencar_x>=0)
			{
				greencar_x=greencar_x-10;
				console.log("When left arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
				uploadBackground();
				uploadgreencar();
			}
			
			
			}
			function right(){
				if(greencar_x<=700)
				{
					greencar_x=greencar_x+10;
					console.log("When right arrow is pressed, x = " + greencar_x + " | y = " +greencar_y);
					uploadBackground();
					uploadgreencar();
				}
				
				
				}
