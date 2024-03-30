let toDoContainter = document.getElementById("to-do-list")
let btn1 = document.getElementById("btn")
let inputField = document.getElementById("inputField")

btn1.addEventListener("click", () => {
    let paragraph = document.createElement("p")
    if (inputField.value != "") {
        paragraph.innerText = inputField.value
        toDoContainter.appendChild(paragraph)
        inputField.value = ""
    } else if (inputField.value == "") {
        paragraph.style.margin = "0px"
        alert("Write something!")
    }
    paragraph.addEventListener("click", () => {
        paragraph.style.backgroundColor = "rgb(148, 29, 84)"
        paragraph.style.textDecoration = "line-through"
        setInterval(() => {
            toDoContainter.removeChild(paragraph)
        }, 2000);
    })
})