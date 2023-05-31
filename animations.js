// <!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <meta http-equiv="X-UA-Compatible" content="IE=edge" />
//     <meta name="viewport" content="width=device-width, initial-scale=1.0" />
//     <title>Document</title>
//     <link rel="stylesheet" href="style.css" />
//   </head>
//   <body id="body">
//     <button id="myButton">Begin animation</button>
//     <div id="box"></div>
//     <script src="animations.js"></script>
//   </body>
// </html>

const button = document.getElementById("myButton")
const animate = document.getElementById("box")

body.style.background = "Black"
animate.style.background = "Red"
animate.style.height = 100 + "px"
animate.style.width = 100 + "px"
animate.style.position = "relative"


button.addEventListener("click", beginAnimation)

function beginAnimation() {
    let timer = null
    let x = 0
    let y = 0
    let degree = 0
    timer = setInterval(frame, 5)
    function frame() {
        if (x >= 200 || y >= 200) {
            clearInterval(timer)
        }
        else {
            x += 1
            y += 1
            degree += 10
            animate.style.transform = "rotateX(" + degree + "deg)"
            animate.style.left = x + "px"
            animate.style.top = y + "px"
        }
    }
}