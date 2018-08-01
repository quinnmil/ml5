// Starter Code derived from starter code/tutorial from CodingTrain ml5.js tutorial.
// implementing drag/drop functionality.

let mobilenet;
var dropzone;
var img
var status
// for static version
let doggo;

function modelReady() {
  console.log('MobileNet is ready to go');
  // status.html("Ready!");
  // mobilenet.predict(doggo, gotResults);
}

// callbacks: where is result coming from?
function gotResults(error, results) {
  if (error) {
    console.error(error);
  } else {
    console.log(results);
    for (key in results) {
      let lable = results[key].className.split(',');
      let probability = results[key].probability;
      createP(lable[0] + ' with a probability of ' + probability + '<br>');;
    }
  }
}

function imageInCanvas() {
  image(doggo, 0, 0, height, width);
}


// runs automatically
function setup() {
  // todo, add loading status bar. 
  // status = createP('Loading').addClass('status');
  var c = createCanvas(680, 700);
  background(100);
  c.drop(gotFile);
// uses a callback
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}

function draw() {
  fill(255);
  noStroke();
  textSize(24);
  textAlign(CENTER);
  text('drop an image.', width/2, height/2);
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
