
const container = document.querySelector(".Container");
    for (let index = 0; index < 16*16; index++) 
    {
        const content = document.createElement("div");
        content.classList.add("content");
        content.style.flexGrow = '0';
        content.style.flexShrink = '0';
        content.style.flexBasis = 'calc(100%/'+16+')';
        container.appendChild(content);
    }



function setnewGrid(button)
{
    deleteOldgrids()
    if(container.children.length===0)
    {
        console.log("Empty")
        var Coordinate= parseFloat(button.value)
        for (let index = 0; index < Coordinate * Coordinate; index++) 
        {
            const content = document.createElement("div");
            content.classList.add("content");
            content.style.flexGrow = '0';
            content.style.flexShrink = '0';
            content.style.flexBasis = 'calc(100%/'+Coordinate+')';
            container.appendChild(content);
        }
    }
    Draw()
}

function Reset()
{
    var childrenToremove=document.querySelectorAll(".content")

    childrenToremove.forEach((child) =>
    {
        child.style.backgroundColor="white"
    })
}

function Draw()
{
    var childrenToremove=document.querySelectorAll(".content")
    var isDrawing=false
    container.addEventListener('mousedown',function(){
        isDrawing=true
    })
    childrenToremove.forEach(div=>
    {
        div.addEventListener('mousemove',function()
        {
            if(isDrawing)
            {
                this.style.backgroundColor="red"
            }
        })
    })

    container.addEventListener('mouseup',function(){
        isDrawing=false
    })

    document.querySelector("body").addEventListener('mouseup',function(){
        isDrawing=false
    })
}

function deleteOldgrids()
{
    container.innerHTML = '';
}

Draw()


