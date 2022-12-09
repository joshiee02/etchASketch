const container = document.querySelector('#container');

//let gridsNum;
let grids = [];

function createGrid(){

    let gridsNum = (+prompt('how many set of grids do you want?'));
    if(gridsNum > 100) gridsNum = 100;
    
    let gridSize = gridsNum;
    let calcGridSize = (760 - gridSize * 2) / gridSize;
   
    for(let i = 0; i < Math.pow(gridsNum, 2); i++){

        let grid = document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grids');
        grid.style.cssText = `width: ${calcGridSize}px; height: ${calcGridSize}px`;
        grids.push(grid);
     }
    
    for( let grid of grids){

        grid.addEventListener('mouseover', () => {
        grid.classList.add('color');
            });
        }
    }


const gridsNumBtn = document.querySelector('button');

gridsNumBtn.addEventListener('click', () =>{
    
    const gridsHTML = document.querySelectorAll('.grids');

  // Iterate over the elements and remove them from the page
    gridsHTML.forEach(element => element.remove());
     
    createGrid();
    
});
