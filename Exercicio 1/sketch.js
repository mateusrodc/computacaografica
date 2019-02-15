function setup() {
  createCanvas(400, 400);
}

function draw() {
  //Elipse Amarela
  strokeWeight(4);
	let c= color(290,220,0);  //255,204,0
	fill(c);
  ellipse(150,150,180,180);
  //1 Elipse Preta
  //ellipseMode(CENTER);
	fill(0);
	ellipse(115,115,30,55);
  //2 Elipse Preta
  //ellipseMode(CENTER);
  fill(0);
  ellipse(180,115,30,55);
  //Arco para fazer o sorriso
  noFill(); //fill(0) fica com um sorrisão
  arc(150,175,100,85,0, PI, PI + QUARTER_PI);
  
  //ellipseMode(CENTER); referencia de posicionamento
  //fill(0);
  //ellipse(150,200,100,50);
}