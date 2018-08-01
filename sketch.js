// Starter Code derived from starter code/tutorial from CodingTrain ml5.js tutorial.
// implementing drag/drop functionality. 

let mobilenet;
let doggo;
var dropzone;
let image;

function modelReady() {
  console.log('MobileNet is ready to go');
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

function highlight(){
  dropzone.style('background-color','#bbcce8');
}
function unHighlight(){
  dropzone.style('background-color','#fff');
}
function gotFile(file); {
  image = createImg(file.data, imageInCanvas);
  image.hide()

}
function classifier(image){

}

// runs automatically
function setup() {

  createCanvas(680, 700);
  background(0);

  dropzone = select('#dropzone');
  dropzone.dragOver(highlight);
  dropzone.dragLeave(unHighlight);
  dropzone.drop(gotFile, unHighlight);

// used for static images
  // doggo = createImg('images/harper.jpg', imageInCanvas);
  // doggo.hide();

// uses a callback
  mobilenet = ml5.imageClassifier('MobileNet', modelReady);
}
