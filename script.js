const container = document.querySelector('#container');

let gridsNum;
let grids = [];

function createGrid(){

    gridsNum = (+prompt(`How many number of squares per side?`) * 2);

    for(let i = 0; i < gridsNum; i++){

        let grid = document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grids');
        grids.push(grid);
    }
    
    for( let grid of grids){

        grid.addEventListener('mouseover', () => {
            grid.classList.add('color');
        });
    }
}



const gridsNumBtn = document.querySelector('button');
gridsNumBtn.onclick = createGrid;