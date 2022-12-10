const container = document.querySelector('#container');
const rangeInput = document.querySelector('#gridsNum');
const colorInput = document.querySelector('#color');
const rangeBtn = document.querySelector('.rangeBtn');

let color = colorInput.value;
colorInput.addEventListener("input", () =>{

    color = colorInput.value;
})


function createGrid(){

    let grids = [];
    

    let gridsNum = rangeInput.value;
    if(gridsNum > 100) gridsNum = 100;

    let gridSize = gridsNum;
    let calcGridSize = (600 - gridSize * 2) / gridSize;
   
    for(let i = 0; i < Math.pow(gridsNum, 2); i++){

        let grid = document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grids');
        grid.style.cssText = `width: ${calcGridSize}px; height: ${calcGridSize}px;`;
        grids.push(grid);
     }
    
    for( let grid of grids){

        grid.addEventListener('mouseover', () => {
        grid.style.backgroundColor = `${color}`;
            });
        }
    }



rangeBtn.addEventListener('click', () =>{
    
    const gridsHTML = document.querySelectorAll('.grids');
    gridsHTML.forEach(element => element.remove());
     
    createGrid();
    
});
