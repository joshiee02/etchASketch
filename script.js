const container = document.querySelector('#container');

let grids = [];

function createGrid(){

    for(let i = 0; i < 16; i++){

        let grid = document.createElement('div');
        container.appendChild(grid);
        grid.classList.add('grids');
        grids.push(grid);
    }
}
createGrid();

for( let grid of grids){

    grid.addEventListener('mouseover', () => {
        grid.classList.add('color');
    });
}