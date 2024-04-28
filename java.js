
const container = document.querySelector(".Container");

var xCoordinate =16
var yCoordinate=16

function setnewGrid()
{
    xCoordinate = prompt("Enter the x-coordinate:")
    yCoordinate = prompt("Enter the y-coordinate:")
    for (let index = 0; index < xCoordinate; index++) 
    {
        for (let index1 = 0; index1 < yCoordinate; index1++) {
            const content = document.createElement("div");
            content.classList.add("content");
            container.appendChild(content);
        }
    }
}


for (let index = 0; index < xCoordinate; index++) 
{
    for (let index1 = 0; index1 < yCoordinate; index1++) {
        const content = document.createElement("div");
        content.classList.add("content");
        container.appendChild(content);
    }
}

function Reset()
{
    var childrenToremove=Array.from(document.getElementsByClassName("content"))

    for (let index = 0; index < childrenToremove.length; index++) 
    {
        container.removeChild(childrenToremove[index])
    }
}




