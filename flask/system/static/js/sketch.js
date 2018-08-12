/*
Starter Code derived from from CodingTrain ml5.js tutorial,
and ml5 examples github.com/ml5js/ml5-examples
Author : Quinn Milionis
*/

let mobilenet;
var img;

let status;
let yesButton;
let noButton;


function modelReady() {
  console.log('MobileNet is ready to go');
  // status.html("Ready!");
  // mobilenet.predict(doggo, gotResults);
  // var status = document.getElementsByTagName('h1');
  console.log(status);
  status.html('Model Ready');
}

// callbacks: where is result coming from?
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    checkProb(results);
    for (key in results) {
      let lable = results[key].className.split(',');
      let probability = results[key].probability;
      createP(lable[0] + ' with a probability of ' + probability + '<br>');
    }

  }
}


function imageInCanvas() {
  image(doggo, 0, 0, height, width);
}

function setup() {
  // status = createP('Loading').addClass('status');
  var canvas = createCanvas(500, 500);
  canvas.parent('p5_canvas');
  background('#ccc');
  canvas.drop(gotFile);

  status = select('#status');
  yesButton = select('#yesButton');
  noButton = select('#noButton');
  yesButton.mousePressed(logYes);
  noButton.mousePressed(logNo);
// uses a callback
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {
  fill(250);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('drop image here.', width/2, height/2);
  noLoop();
}


function gotFile(file) {
  if (file.type === 'image') {
    var img = createImg(file.data).hide();
    image(img, 0, 0, width, height);
    mobilenet.predict(img, gotResults);
  } else{
    println('not an image file');
  }
}

function checkProb(results){
  let lable = results[0].className.split(',');
  let probability = results[0].probability;
  if (probability >= 0.75){
    console.log('probablity above 70')
    return true;
  }
  else{return false}
}

function logNo(){
  console.log('no pressed')

}
function logYes(){
  console.log('yes pressed')
}
