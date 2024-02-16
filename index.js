// 1
let firstWork = document.body.children[0]

firstWork.classList.add("wraper")

let img = document.createElement("img")
img.src = "OldTbilisi.jpg"
img.style.width = "700px"

let h2 = document.createElement("h2")
h2.classList.add("title")
h2.textContent = "image title"
h2.style.color = "red"
h2.style.fontSize = "30px"


document.body.children[0].appendChild(img)
document.body.children[0].appendChild(h2)


// 2
let divs = document.querySelectorAll(".divs")

divs.forEach(div => {
    let p = document.createElement("p")
    p.classList.add("text")
    p.textContent = ("hello")
    
    div.appendChild(p)
})




// 3
let a = document.createElement("a")
a.textContent = "google link"
a.href = "https://google.com"
a.target = "blank"
a.classList.add("link")
a.classList.replace("link", "newclass")

document.body.children[4].appendChild(a)