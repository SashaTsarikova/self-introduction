const button = document.querySelector("#creature");
let  blocks = document.querySelectorAll(".block");
const blockContainer = document.querySelector(".content-part");



// const drag = (event) => {
//   console.log(event);
//   createAction(event);
//   if (event.type == "dragstart") {
//     EXPD.classList.add("dragged");
//     dragX = event.clientX
//     dragY = event.clientY
//   }
//   else if (event.type == "dragend") {
//     EXPD.classList.remove("dragged");
//     EXPD.style.top = `${+EXPD.style.top.split('px')[0] + (event.clientY - dragY)}px`;
//     EXPD.style.left = `${+EXPD.style.left.split('px')[0] + (event.clientX - dragX)}px`;
//   }
// }


button.addEventListener("click",()=>{
    const a = blocks[blocks.length-1].cloneNode(true);
    blockContainer.append(a);
    
    let dragX = 0;
    let dragY = 0;
    
        a.addEventListener("dragstart", (event)=>{
            a.classList.add("dragged");
            dragX = event.clientX
            dragY = event.clientY
        });
        a.addEventListener("dragend", (event) =>{
        a.classList.remove("dragged");
        a.style.top = `${+a.style.top.split('px')[0] + (event.clientY - dragY)}px`;
        a.style.left = `${+a.style.left.split('px')[0] + (event.clientX - dragX)}px`;
        dragX = 0;
        dragY = 0;
        } );
    
    })


for (let block of blocks){
    
let dragX = 0;
let dragY = 0;

    block.addEventListener("dragstart", (event)=>{
        console.log(blocks);
        block.classList.add("dragged");
        dragX = event.clientX
        dragY = event.clientY
    });
    block.addEventListener("dragend", (event) =>{
    block.classList.remove("dragged");
    block.style.top = `${+block.style.top.split('px')[0] + (event.clientY - dragY)}px`;
    block.style.left = `${+block.style.left.split('px')[0] + (event.clientX - dragX)}px`;
    dragX = 0;
    dragY = 0;
    } ); 
}

    