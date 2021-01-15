
const container = document.body.querySelector('#container');
const div1 = document.querySelector('div1');

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
        reset();
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


container.addEventListener('mouseover', function (m) {

    if (m.target.matches('.divgrid')) {
        m.target.style.backgroundColor = '#f4f4f4';
    }
  });

function reset(){

    const grid = document.getElementsByClassName('divgrid');
    for (let i = 0; i < grid.length; i++){
        grid[i].style.backgroundColor = '#0e0e0e';
    }

}

  window.addEventListener('DOMContentLoaded', (event) => {
 
    createGrid();

});
