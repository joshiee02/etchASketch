const container = document.querySelector('#container');

let gridsNum;
let grids = [];

function createGrid(){

    gridsNum = (+prompt('how many set of grids do you want?'));

    if(gridsNum > 100) {
        gridsNum = 100;
    }else{
        gridsNum *= gridsNum;
    }
    

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

gridsNumBtn.addEventListener('click', () =>{
    
    const gridsHTML = document.querySelectorAll('.grids');

  // Iterate over the elements and remove them from the page
    gridsHTML.forEach(element => element.remove());
     
    createGrid();
    
});
