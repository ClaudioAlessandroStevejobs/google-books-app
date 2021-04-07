export const drawAccImg = (email: string) => {
	const letter = email.charAt(0);
	var canvas = document.createElement('canvas');
	canvas.width = 20;
	canvas.height =20;
	// console.log(document)
	// const d = document.getElementById("canvasContainer");
	// console.log(d)
	// d.appendChild(canvas);
	canvas.getContext('2d').fillText(letter, 0,0);
  
	return canvas
	// var img = document.createElement('img');
	// img.onload = function() {
	// 	alert("image is loaded");
	// 	ctx.font = "30px Arial";
	// 	ctx.fillText(letter, 10, 50);
	// };
	// return img;
	// img.src="http://www.download-free-wallpaper.com/img88/xpwwiirymrkfcacywpax.jpg";
}


