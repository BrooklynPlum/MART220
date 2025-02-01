let toppings = [];
let pizzaY;
let direction = 1;

function setup() {
  createCanvas(400, 400);
  pizzaY = 0; // Starting offset for the bouncing effect

  // Generate random toppings
  let numToppings = int(random(5, 10));
  for (let i = 0; i < numToppings; i++) {
    toppings.push({
      x: random(120, 280),
      y: random(130, 330),
      offset: random(TWO_PI) // Random phase for wavy movement
    });
  }
}

function draw() {
  background(220);

  // Update pizza bounce animation
  pizzaY += 0.5 * direction;
  if (pizzaY > 10 || pizzaY < -10) {
    direction *= -1; // Reverse direction
  }

  // Draw the text label in the top left corner
  fill(0);
  textSize(16);
  text("Animated Pizza Slice", 10, 20);

  push();
  translate(0, pizzaY); // Apply bouncing animation

  // Draw the pizza slice (triangle)
  fill(255, 204, 0); // Cheese color
  stroke(150, 75, 0); // Crust outline
  strokeWeight(3);
  beginShape();
  vertex(100, 350);
  vertex(300, 350);
  vertex(200, 100);
  endShape(CLOSE);

  // Draw the crust (ellipse at top of triangle)
  fill(200, 150, 50);
  arc(200, 110, 120, 50, PI, 0);

  // Draw moving toppings
  for (let t of toppings) {
    let waveY = sin(frameCount * 0.05 + t.offset) * 3; // Wavy movement
    drawTopping(t.x, t.y + waveY);
  }

  pop();
}

// Function to draw a random topping at (x, y)
function drawTopping(x, y) {
  let toppingType = int(random(3)); // 0 = Pepperoni, 1 = Olive, 2 = Mushroom

  if (toppingType === 0) {
    // Pepperoni
    fill(200, 50, 50);
    ellipse(x, y, 20, 20);
  } else if (toppingType === 1) {
    // Olive
    fill(0);
    ellipse(x, y, 10, 10);
  } else {
    // Mushroom
    fill(230, 230, 200);
    ellipse(x, y, 15, 12);
    rect(x - 3, y, 6, 8);
  }
}
