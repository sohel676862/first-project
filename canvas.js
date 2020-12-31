// const canvas = document.querySelector('#canvas1');
// const ctx = canvas.getContext('2d')

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// // console.log(canvas.width, canvas.height)

// //measure title element

// let titleElemnt = document.querySelector('#title')
// let titleMeasure = titleElemnt.getBoundingClientRect();
// console.log(titleMeasure)


// let title = {
//     x: titleMeasure.left,
//     y: titleMeasure.top,
//     width: titleMeasure.width,
//     height: 20
// }
// console.log(title)

// // let hue = 0

// const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
// gradient.addColorStop('0.2', 'red');
// gradient.addColorStop('0.4', 'blue');
// gradient.addColorStop('0.6', 'red');
// gradient.addColorStop('0.8', 'yellow');
// gradient.addColorStop('0.2', 'black');
// gradient.addColorStop('0.5', 'Maroon');
// gradient.addColorStop('0.7', 'Chocolate');

// const gradient2 = ctx.createLinearGradient(0, 0, canvas.width, 0);
// gradient2.addColorStop('0.2', 'black');
// gradient2.addColorStop('0.5', 'Maroon');
// gradient2.addColorStop('0.7', 'Chocolate');
// gradient2.addColorStop('0.9', 'Gold');

// class particle {

//     constructor(x, y) {
//         this.x = x
//         this.y = y
//         this.size = Math.random() * 10 + 1
//         this.width = Math.random() * 5 + 1
//         this.directionX = (Math.random() * 1) + 1
//     }

//     update() {

//         if (this.y > canvas.height) {
//             this.y = 0 - this.size
//             this.width = Math.random() * 5 + 1
//             this.x = Math.random() * canvas.width
//         }
//         this.width += .015

//         this.y += this.width;
//         this.x += this.directionX
//             // this.x += this.directionX

//         //check for collision betwen ecah particle
//         if (this.x < title.x + title.width &&
//             this.x + this.size > title.x &&
//             this.y < title.x + title.height &&
//             this.y + this.size > title.y) {
//             this.y -= 3
//             this.width *= -0.5
//         }
//     }


//     draw() {
//         // ctx.fillStyle = 'hsl(' + hue + ', 100%,50%)'
//         ctx.fillStyle = gradient;

//         ctx.beginPath()

//         ctx.arc(this.x, this.y, this.size, -4, Math.PI * 2)
//         ctx.closePath();
//         ctx.fill();
//         ctx.strokeStyle = gradient2;
//         ctx.stroke();
//     }

// }
// var threehunddatParticle = 1000
// let particleArry = []

// function init() {
//     for (var i = 0; i < threehunddatParticle; i++) {
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height;
//         particleArry.push(new particle(x, y))
//     }

//     console.log(particleArry)
// }


// init()


// // const particle1 = new particle(400, 200)
// // const particle2 = new particle(300, 200)
// // const particle3 = new particle(500, 500)

// function animate() {
//     ctx.fillStyle = "rgba(255, 255,255 , 0.015  )"
//     ctx.fillRect(0, 0, canvas.width, canvas.height);
//     for (var i = 0; i < particleArry.length; i++) {
//         particleArry[i].update()
//         particleArry[i].draw()
//     }
//     // ctx.fillRect(title.x, title.y, title.width, title.height)

//     // particle1.update()
//     // particle1.draw()
//     // particle2.update()
//     // particle2.draw()
//     // particle3.update()
//     // particle3.draw()

//     // hue += 0.5

//     requestAnimationFrame(animate);

// }

// animate()


//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////




////////[How to Draw Shapes with JavaScript///////////////////////////




// const canvas = document.querySelector('#canvas1')
// const ctx = canvas.getContext('2d')
// canvas.height = window.innerHeight;

// canvas.width = window.innerWidth;
// ctx.globalCompositeOperation = "destination-over";
// let number = 0;
// let scale = 10;

// hue = 0

// function drawFlowler() {

//     let angle = number * 8;
//     let radius = scale * Math.sqrt(number)
//     let postitionX = radius * Math.sin(angle) + canvas.width / 2;
//     let positionY = radius * Math.cos(angle) + canvas.height / 2;

//     ctx.fillStyle = 'hsl(' + hue + ',100%,50%)'
//     ctx.strokeStyle = "blue"

//     ctx.lineWidth = 5
//     ctx.beginPath()
//     ctx.arc(postitionX, positionY, 15, 0, Math.PI * 2);
//     ctx.closePath()
//     ctx.fill()
//     ctx.stroke()
//     requestAnimationFrame(animate)
//     hue++
// }

// function animate() {
//     // ctx.clearRect(0, 0, canvas.height, canvas.width)
//     //draw fram
//     drawFlowler()


//     if (number > 500) return;

//     number++

// }
// // console.log(positionY)
// animate()

/////////////////////////////////[How to Draw Shapes with JavaScript againg/////////////////////////////////// 

// const canvas = document.querySelector('#canvas1')
// let ctx = canvas.getContext('2d')
// console.log(ctx)
// canvas.height = window.innerHeight;
// canvas.width = window.innerWidth

// ctx.globalCompositeOperation = "destination-over";
// // ctx.strokeStyle = "blue"

// // ctx.fillStyle = "red"
// // ctx.beginPath();
// // ctx.arc(400, 300, 50, 0, 2 * Math.PI);
// // ctx.closePath()
// // ctx.fill()
// // ctx.stroke()
// // ctx.stroke();



// let number = 0;
// let scale = 10

// function fowerDraw() {



//     // let positionY = 0;
//     var angle = number * .5;
//     let radius = scale * Math.sqrt(number)
//     let positionX = radius * Math.sin(angle) + canvas.width / 2
//     let positionY = radius * Math.cos(angle) + canvas.height / 2






//     ctx.beginPath();

//     ctx.lineWidth = 1;
//     ctx.fillStyle = 'orangered'
//     ctx.strokeStyle = 'pink'
//     ctx.arc(positionX, positionY, 15, 0, Math.PI * 2)

//     ctx.closePath()
//     ctx.lineCap = "squrd"
//     ctx.fill()
//     ctx.stroke()
//     number++
// }




// function animate() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     // deraction += -1
//     fowerDraw()

//     if (number > 500) return number = 0
//         // return
//     requestAnimationFrame(animate)
//         // positionX += 2 * Math.sin(angle)
//         // positionY += 2 * Math.cos(angle)
//     angle += .1
//     size += .1


// }
// animate()
// console.log(animate)




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// console.log(particleArry)

// const threehunddatParticle = 1000;
// // measure title element

// let titleelement = document.querySelector('#title')
// let titleMeasureelement = titleelement.getBoundingClientRect()
// let title = {
//     x: titleMeasureelement.left,
//     y: titleMeasureelement.top,
//     width: titleMeasureelement.width,
//     height: 10,
// }

// console.log(title)
// console.log(titleMeasureelement)

// class particle {

//     constructor(x, y) {
//         this.x = x
//         this.y = y
//         this.size = Math.random() * 15 + 1;
//         this.width = Math.random() * 12
//         this.directionX = -3
//     }
//     updata() {

//         if (this.y > canvas.height) {
//             this.y = 0 - this.size;
//             this.width = 2
//             this.x = Math.random() * canvas.width * 1.1;
//         }
//         this.width += .015

//         this.y += this.width;
//         this.x += this.directionX

//         if (this.x < title.x + title.width &&
//             this.x + this.size > title.x &&
//             this.y < title.y + title.height &&
//             this.y + this.size > title.y) {
//             this.y -= 3
//             this.width *= -.5
//         }

//     }
//     draw() {
//         ctx.fillStyle = 'red'
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
//         ctx.closePath();
//         ctx.fill();

//     }
// }

// function init() {

//     particleArry = [];
//     for (let i = 0; i < threehunddatParticle; i++) {
//         const x = Math.random() * canvas.width;
//         const y = Math.random() * canvas.height
//         particleArry.push(new particle(x, y))
//     }
//     console.log(threehunddatParticle)
// }

// init()

// // const particle1 = new particle(1000, 900)
// // const particle2 = new particle(105, 500)
// // const particle3 = new particle(200, 400)
// // console.log(particle1)

// function animate() {
//     ctx.fillStyle = 'rgba(255,255,255, .1)'

//     ctx.fillRect(011, 10, canvas.width, canvas.height)

//     for (let i = 0; i < particleArry.length; i++) {
//         particleArry[i].updata()
//         particleArry[i].draw()

//     }

//     // particle1.updata();
//     // particle1.draw();
//     // particle2.updata();
//     // particle2.draw();
//     // particle3.updata();
//     // particle3.draw();
//     requestAnimationFrame(animate);
// }
// animate()


// window.addEventListener('resize', function() {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight
//     init()
// })


// const canvas = document.querySelector('#canvas1')

// const ctx = canvas.getContext('2d');
// // console.log(ctx)
// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;
// console.log(canvas)
// let particlesArray = []

// let numberofParticle = 100;
// class particle {

//     constructor(x, y) {
//         this.x = x;
//         this.y = y;
//         this.size = Math.random() * 15 + 1;
//         this.width = Math.random() * 1 + 1;

//         this.directionX = -2;
//         this.directionX = 5;


//     }
//     update() {
//         if (this.y > canvas.height) {
//             this.y = 0 - this.size;
//             this.width = Math.random() * 1 + 1;
//             this.x = Math.random() * canvas.width

//         }
//         this.width += 0.09;
//         this.y += this.width;

//         this.x += this.directionX

//     }
//     draw() {
//         ctx.fillStyle = 'green'
//         ctx.beginPath();
//         ctx.arc(this.x, this.y, this.size, this.directionX, 0, Math.PI * 5)
//         ctx.closePath()
//         ctx.fill()
//     }
// }

// function init() {
//     for (let i = 0; i < numberofParticle; i++) {
//         const x = Math.random() * canvas.width * 10
//         const y = Math.random() * canvas.height

//         particlesArray.push(new particle(x, y))
//     }
//     console.log(particlesArray)
// }

// init();
// // const partical1 = new particle(600, 900)
// // const partical2 = new particle(600, 900)

// function animate() {
//     ctx.fillStyle = 'rgba(255, 255,255,0.01)';
//     ctx.fillRect(0, 0, canvas.width, canvas.height)
//     for (let i = 0; i < particlesArray.length; i++) {
//         particlesArray[i].update()
//         particlesArray[i].draw()
//     }


//     requestAnimationFrame(animate)



// }
// animate();

///canvas new////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////

// let canvas = document.querySelector('#canvas')



// window.addEventListener('load', function() {

//     const canvas = document.querySelector('#canvas')

//     const ctx = canvas.getContext('2d');
//     canvas.height = window.innerHeight;
//     canvas.width = window.innerWidth;
//     let painting = false;

//     //eventlisener

//     function startPosttion() {
//         painting = true
//     }

//     function finishedPosition() {
//         painting = false
//     }

//     function draw(e) {
//         if (!painting) return;
//         ctx.lineWidth = 10;
//         ctx.lineCap = "round";



//         ctx.lineTo(e.clientX, e.clientY)
//         ctx.stroke()
//     }
//     canvas.addEventListener('mousedown', startPosttion)
//     canvas.addEventListener('mouseup', finishedPosition)
//     canvas.addEventListener('mousemove', draw)
// canvas.height = window.innerHeight;
// canvas.widht = window.innerWidth;
// ctx.strokeRect(100, 100, 100, 500)
// console.log(ctx.strokeRect)
// ctx.strokeStyle = "red"
// console.log(canvas.height, canvas.widht)
// })




//progrma text

// var count = 0;
// var cuenta = '';

// function cc(card) {
// Only change code below this line
// switch (card) {
//     case 2:
//     case 3:
//     case 4:
//     case 5:
//     case 6:
//         count++;
//         break;
//     case 10:
//     case 'J':
//     case 'Q':
//     case 'K':
//     case 'A':
//         count--;
//         break;
// }
// // Setup
// function phoneticLookup(val) {
//     var result = "";

//     // Only change code below this line

//     var newW = {
//         "alpha": "Adams",



//         "bravo": "Boston",


//         "charlie": "Chicago",

//         "delta": "Denver",

//         "echo": "Easy",

//         "foxtrot": "Frank"

//     }

//     result = newW[val]
//     console.log(newW)
//         // Only change code above this line
//     return result;
// }

// phoneticLookup("charlie");

// Setup

// function multiplyAll(arr) {
//     var product = 1;
//     // Only change code below this line

//     for (var i = 0; i < arr.length; i++) {


//         for (var j = 0; j < arr[i].length; j++) {

//             product = product * (arr[i][j])
//             console.log(product + " prodct" + arr[i][j] + "array")

//         }
//     }

//     // Only change code above this line
//     return product;
// }

// multiplyAll([
//     [1, 2],
//     [3, 4],
//     [5, 6, 7]
// ]);
// function sum(arr, n) {
//     // Only change code below this line
//     if (n <= 0) {
//         // console.log(n)
//         return arr[0];
//     } else {
//         // console.log(arr, n + 2)
//         return sum(arr, n - 1) * arr[n - 1]
//     }


//     // Only change code above this line
// }

// console.log(sum([2, 3, 4, 5], 3))