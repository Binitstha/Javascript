/*HTML code
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body id="body">
    <p id="p1"> </p>
    <script src="ArrowKeysDetector.js"></script>
  </body>
</html>*/
const box = document.getElementById("p1")
// CSS Code
body.style.background = "Black"
box.style.position = "relative"
box.style.background = "Green"
box.style.height = 100 + "px"
box.style.width = 100 + "px"

window.addEventListener("keydown", move)
let x = 0
let y = 0
function move(event) {
    switch (event.key) {
        case "ArrowDown":
            y = y + 20
            box.style.top = y + "px"
            break;
        case "ArrowUp":
            y = y - 20
            box.style.top = y + "px"
            break;
        case "ArrowRight":
            x = x + 20
            box.style.left = x + "px"
            break;
        case "ArrowLeft":
            x = x - 20
            box.style.left = x + "px"
            break;
    }
}
