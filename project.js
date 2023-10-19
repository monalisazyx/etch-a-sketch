let container = document.querySelector('#container');
let color = document.querySelector('#color');
let rainbow = document.querySelector('#rainbow');
let buttons = document.querySelector('#buttons');

function getColor() {
    let r = Math.floor(Math.random()*256);  //math.floor rounds the number
    let g = Math.floor(Math.random()*256);  //math.random generates number between 0 and 1
    let b = Math.floor(Math.random()*256);   //*256 to generate random number between 0 and 256
    return `rgb(${r}, ${g}, ${b})`

}
buttons.addEventListener('click', (e) => {
 while(container.firstChild){   //while it can find a first child
    container.removeChild(container.firstChild);  //remove child. clear out container
 }
 let x = Number(prompt('num: '));
 while(x > 100){  //re prompts if num is more than 100
    x = Number(prompt('num: '));


 }
 let cellSize = 600/x;  //600 is the entire size of container
                        //divide by the number of cells to allocate equal size for each cell

 for(let j = 0; j < x ; j++){  //loop for the rows
    let row = document.createElement('div');    //create a row
    row.classList.add('row');
    for(let i = 0; i < x ; i++ ){   //loop for the columns
        let column = document.createElement('div');
        column.classList.add('column');
        column.style.width = cellSize + 'px';  //add width and height for each cell
        column.style.height = cellSize + 'px';

        row.appendChild(column);   //to append the cells to each row 
        
    }
    container.appendChild(row);

}

 if(e.target.id == 'rainbow'){  //if button clicked is rainbow
    const col = document.querySelectorAll('.column');
    col.forEach((column) => {
     column.addEventListener('mouseenter' , () => {  //when mouse enters the cell
        column.style.backgroundColor = getColor();  //background color to random color

     });
   
     column.addEventListener('mouseup' , () => {  //when mouse leaves the cell
        column.style.backgroundColor = getColor();  //background color to random color

     });
    
    });

 }
 if(e.target.id == 'color'){  //when color button clicked. e.target is 
                              //the element that triggers the event
    const col = document.querySelectorAll('.column');
    let select = prompt("Enter desired color: ");
     col.forEach((column) => {
        column.addEventListener('mouseenter' , () => {  //when mouse enters the cell
            column.style.backgroundColor = select;   //set cell color to inputted value
    
        });
       
        column.addEventListener('mouseup' , () => {  //when mouse leaves the cell
            column.style.backgroundColor = select;   //the color of the cell remains 
                                                      //as the inputted value
    
        });
        
     });
 }
});

