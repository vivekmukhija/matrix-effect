const p = document.querySelector('p')
const span = document.querySelector('span')
const text = p.innerText
const characters= "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

let iteration = 0
let animating = true

function randomText(){
    const str = text.split('').map((char, index)=>{
        if(index<iteration){
            return char
        }
            return characters.split('')[Math.floor(Math.random()*52)]
    }).join ('')
    p.innerText = str
    iteration +=0.1

    
    }

setInterval(randomText,30)







const container = document.getElementById("matrix")

const words = [
  "matrix",
  "code",
  "system",
  "access",
  "denied",
  "root",
  "kernel",
  "binary",
  "signal",
  "cypher"
]

const columns = Math.floor(window.innerWidth / 120)

function randomWord() {
  return words[Math.floor(Math.random() * words.length)]
}

function createWord(column) {
  const span = document.createElement("span")
  span.className = "word"
  span.textContent = randomWord()

  span.style.left = `${column * 120}px`
  span.style.animationDuration = `${Math.random() * 3 + 2}s`

  container.appendChild(span)

  span.addEventListener("animationend", () => {
    span.textContent = randomWord()
    span.style.animationDuration = `${Math.random() * 3 + 2}s`
    span.style.animationDelay = "0s"
    span.style.top = "-50px"
    span.style.animation = "none"
    span.offsetHeight // reflow
    span.style.animation = "fall linear infinite"
  })
}

for (let i = 0; i < columns; i++) {
  createWord(i)
}
