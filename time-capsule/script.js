
let ears = document.querySelectorAll(".triangle");
let eyes = document.querySelectorAll(".eye");
let whites = document.querySelectorAll(".white");
let nose = document.getElementsByClassName("nose");
let text = document.getElementsByClassName("text");

//for ears and nose
let colors = ["#765514", "#FDCA7C", "tan", "#4682b4", "#ffeac7", "#FFB6C1"];
//brown, light orange, tan, steel blue, snow white, light pink
let ranColor = colors[Math.floor(Math.random() * colors.length)];

let eyeColor = ["#765514", "#6e6a6a", "khaki", "#66CDAA", "#4682b4", "#AFEEEE"];
//brown, dark grey, khaki, aqua marine, steel blue, pale turoquise
let ranEye = eyeColor[Math.floor(Math.random() * eyeColor.length)];

let furColor = ["linen", "cornsilk", "#BC945C", "#43506B", "hsl(39, 100%, 64%)", "floralwhite"];
//light beige, light yellow, lightish brown, dark slate blue, yellow orange, white
let ranFur = furColor[Math.floor(Math.random() * furColor.length)];


//randomization
for (let ear of ears) {
  ear.style.borderBottomColor = ranColor;
}

for (let n of nose) {
  n.style.borderTopColor = ranColor;
}

for (let eye of eyes){
  eye.style.backgroundColor = ranEye;
}

document.body.style.backgroundColor = ranFur;

//for better legibility
if (ranFur == "hsl(39, 100%, 64%)"){
  for (let t of text){
    t.style.textShadow = "brown 1px 0 30px";
  }
}
