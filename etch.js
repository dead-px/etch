
const container = document.body.querySelector('#container');


function createGrid(){
    let num = 8;

        const area = num*num;
        for (i = 1; i <= area; i++){
            const divRow = document.createElement('div1');
        
            divRow.className = "divgrid";
            container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
            container.appendChild(divRow);
    }
} 
function newGrid(){
    let num = prompt("Enter grid row/column number (less than 100):");
    if (!num){
        alert("You must enter a number");
        newGrid();
    }
    else if (num>=100 || num<=0){
        alert("Must be greater than 0, less than 100");
        newGrid();
    } 
    else {
        const area = num*num;
        for (i = 1; i <= area; i++){
            const divRow = document.createElement('div1');
        
            divRow.className = "divgrid";
            container.style.gridTemplateColumns = `repeat(${num}, 1fr)`;
            container.style.gridTemplateRows = `repeat(${num}, 1fr)`;
            container.appendChild(divRow);
    }
}
} 
window.addEventListener('DOMContentLoaded', (event) => {
    createGrid();
});




