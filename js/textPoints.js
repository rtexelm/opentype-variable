// use opentype.js for more control https://github.com/opentypejs/opentype.js
// https://erraticgenerator.com/blog/p5js-texttopoints-function/

let myFont; // opentype.js font object
let fSize; // font size
let msg; // text to write
let pts = []; // store path data
let path;
// function preload() {
//   // preload OTF font file
//   font = loadFont("../fonts/NotoSans-VariableFont_wdth,wght.ttf");
async function initFont() {
  const buffer = fetch("fonts/NotoSans-VariableFont_wdth,wght.ttf").then((r) =>
    r.arrayBuffer()
  );

  myFont = opentype.parse(await buffer);
  console.log(myFont);
  console.log("font ready");
  fSize = 256;
  msg = "VOICE";
  let x = 60;
  let y = 300;
  console.log(myFont.variation.get());
  path = myFont.getPath(msg, x, y, fSize);
}

function setup() {
  console.log("JS is here!");
  createCanvas(800, 500);
  initFont();
  // opentype.load("fonts/NotoSans-VariableFont_wdth,wght.ttf", function (err, f) {
  //   if (err) {
  //     alert("Font could not be loaded: " + err);
  //   } else {
  //     myFont = f;
  //     console.log("font ready");
  // fSize = 256;
  // msg = "VOICE";
  // let x = 60;
  // let y = 300;
  // console.log(myFont.variation.get());
  // path = myFont.getPath(msg, x, y, fSize);
  // });
}
function draw() {
  if (!myFont) return console.log("no font");
  background(0);
  noFill();
  stroke(255);
  // console.log(path.commands);
  for (let cmd of path.commands) {
    if (cmd.type === "M") {
      beginShape();
      vertex(cmd.x, cmd.y);
    } else if (cmd.type === "L") {
      vertex(cmd.x, cmd.y);
    } else if (cmd.type === "C") {
      bezierVertex(cmd.x1, cmd.y1, cmd.x2, cmd.y2, cmd.x, cmd.y);
    } else if (cmd.type === "Q") {
      quadraticVertex(cmd.x1, cmd.y1, cmd.x, cmd.y);
    } else if (cmd.type === "Z") {
      endShape(CLOSE);
    }
  }
}

// function onVariationChange(event) {
//     const input = event.target;
//     input.parentNode.nextElementSibling.innerText = input.value;
//     const instanceIndex = window.font.variation.getInstanceIndex(getCurrentCoords());
//     document.getElementById('variation-instance').value = instanceIndex > -1 ? instanceIndex : 'custom';
//     window.fontOptions.variation = getCurrentCoords();
//     window.font.variation.set(getCurrentCoords());
//     throttledRedraw({withVariations: false});
// }

// function changeVariationInstance(event) {
//     const selected = event.target.value;
//     if (selected !== 'custom') {
//         Object.entries(window.font.tables.fvar.instances[selected].coordinates).forEach(([tag, value]) => {
//             const slider = document.getElementById(`variation-tag-${tag}`);
//             slider.value = value;
//             slider.parentElement.nextElementSibling.innerText = value;
//         });
//         window.font.variation.set(parseInt(event.target.value));
//     }
//     window.fontOptions.variation = getCurrentCoords();
//     window.font.variation.set(getCurrentCoords());
//     window.redraw({withVariations: false});
// }

// function getCurrentCoords() {
//     return Array.from(document.querySelectorAll('input[id^="variation-tag-"]')).reduce((acc, input) => {
//         const tag = input.id.substring("variation-tag-".length);
//         acc[tag] = parseFloat(input.value);
//         return acc;
//     }, {});
// }
