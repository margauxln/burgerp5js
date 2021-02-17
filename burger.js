let arrayIngredients=[];
let checkboxTomate
let checkboxSteak
let checkboxDoubleSteak
let checkboxSalade

function setup() {
  createCanvas(700, 600);
  
  checkboxTomate = createCheckbox('tomates', false);
  checkboxTomate.position(20,60)
  checkboxTomate.changed(myCheckedEvent);
  
  checkboxSteak = createCheckbox('steak', false);
  checkboxSteak.position(100,60)
  checkboxSteak.changed(myCheckedEvent);
  
  checkboxDoubleSteak = createCheckbox('double steak', false);
  checkboxDoubleSteak.position(160,60)
  checkboxDoubleSteak.changed(myCheckedEvent);
  
  checkboxSalade = createCheckbox('salade', false);
  checkboxSalade.position(270,60)
  checkboxSalade.changed(myCheckedEvent);

  greeting = createElement('h2', 'Hello! Que veux tu mettre dans ton burger?');
  greeting.position(20, 5);
  textAlign(CENTER);
  textSize(50);
}


function myCheckedEvent() {
  if (this.checked()) {
    append(arrayIngredients,this.elt.textContent)
    
    console.log(arrayIngredients);
  } else {
    for (let i=0;i<arrayIngredients.length;i++){
      if (arrayIngredients[i]==this.elt.textContent) {
         delete arrayIngredients[i];
        console.log(arrayIngredients);
      }
    }
  }
}
function pain(){
  fill('#FFBB33');
  noStroke();
  ellipse(300, 150, 300, 60);
  ellipse(300, 400, 300, 60);

  fill('#FFFBE6')
  ellipse(300, 160, 20, 10);
  ellipse(300, 130, 20, 10);
  ellipse(200, 150, 20, 10);
  ellipse(200, 150, 20, 10);
  ellipse(400, 150, 20, 10);
  ellipse(300, 160, 20, 10);
  ellipse(300, 380, 20, 10);
  ellipse(300, 410, 20, 10);
  ellipse(200, 410, 20, 10);
  ellipse(400, 400, 20, 10);
}
function burger(array){
  pain()
  for (let i=0;i<array.length;i++){
    if (array[i]=="tomates"){
      fill(color(255, 0, 0));
      noStroke();
      ellipse(300, 250, 100, 30);
      ellipse(200, 250, 100, 30);
      ellipse(400, 250, 100, 30);
    };
    if (array[i]=="steak"){
      fill('#8A264B');
      noStroke();
      ellipse(300, 350, 300, 55);
    };
    if (array[i]=="double steak"){
      fill('#8A264B');
      noStroke();
      ellipse(300, 350, 300, 55);
      ellipse(300, 300, 300, 55);
    };
    if (array[i]=="salade"){
      fill('#218A41');
      noStroke();
      ellipse(300, 200, 300, 40);
    };
  }
}

function draw() {
  background(220);
  burger(arrayIngredients)
}