const container = document.querySelector('#container');

function createGrid(){
    for(let i = 0; i < 16; i++){

        startingDiv = document.createElement('div');
        container.appendChild(startingDiv);
        startingDiv.classList.add('grids');

    }

}

createGrid();