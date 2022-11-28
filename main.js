
document.querySelector("#enter").addEventListener("click", () => {
    const input = document.querySelector("input").value;
    const output = document.querySelector("#output");

    output.childNodes.forEach(c => c.nodeType === Node.TEXT_NODE && c.remove());
    let output_text = document.createTextNode(`${Function("return " + input)()}`)
    output.appendChild(output_text);
})
/*
document.querySelectorAll(".row > button").forEach(button => {
    content.log(button);
    button.addEventListener("click", (button) => {
        document.querySelector("input").innerHTML += button.innerHTML;
    })
});
*/
const buttons = document.querySelectorAll(".row button");
for (let i = 0; i < buttons.length; i++)  {
    buttons[i].addEventListener("click", function() {
        document.querySelector("input").value += buttons[i].textContent;
    })  
}

document.querySelector("#clear").addEventListener("click", () => {
    document.querySelector("input").value = "";
})