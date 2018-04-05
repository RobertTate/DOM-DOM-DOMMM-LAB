let addSquare = document.createElement("button");
let containerDiv = document.createElement('div');
let addSquareText = document.createTextNode("Click Here");
addSquare.appendChild(addSquareText);
document.body.appendChild(addSquare);
document.body.appendChild(containerDiv);

let id = 0;
let colors = ["blue", "red", "green", "yellow", "purple", "orange", "pink", "aquamarine"];

addSquare.addEventListener('click', function () {
    let div = document.createElement("div");
    let divText = document.createTextNode(`ID: ${id}`);
    div.className = "div-class";
    containerDiv.appendChild(div);
    div.setAttribute('id', id);
    id++;

    div.addEventListener('mouseover', function () {
        div.appendChild(divText);

    });
    div.addEventListener('mouseleave', function () {
        divText.remove();
    });

    div.addEventListener('click', function () {
        let randomColor = Math.floor(Math.random() * colors.length);
        this.style.backgroundColor = colors[randomColor];
    });

    div.addEventListener('dblclick', function () {

        if (this.id % 2 === 0) {
            if (this.nextSibling) {
                this.nextSibling.remove();
            } else {
                alert("No More Boxes");
            }
        } else {
            if (this.previousSibling) {
                this.previousSibling.remove();
            } else {
                alert("No More Boxes");
            }
        }

    });

});