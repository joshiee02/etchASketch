const container = document.querySelector('#container');

function createGrid(){
    for(let i = 0; i < 16; i++){

        grids = document.createElement('div');
        container.appendChild(grids);
        grids.classList.add('grids');

    }

}

createGrid();