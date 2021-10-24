var canvas = new fabric.Canvas('myCanvas');
 var x= document.getElementById("myAudio");
function new_image(){
	fabric.Image.fromURL('BirthdayImage.jpg',function(Img) {
        blockImageOject=Img;
        blockImageOject.scaleToWidth(700);
        blockImageOject.scaleToHeight(700);
        blockImageOject.set({
            top:0,
            left:0
        })
        canvas.add(blockImageOject);
    });
	console.log("new_image")
}

function playSound(){
	x.play();
}
