let container = document.querySelector('#container');
let btn = document.querySelector('button');
let color = document.querySelector('#color');
let rainbow = document.querySelector('#rainbow');

function getColor() {
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return `rgb(${r}, ${g}, ${b})`

}
btn.addEventListener('click', () => {
 while(container.firstChild){
    container.removeChild(container.firstChild);
 }
 let x = Number(prompt('num: '));
 while(x > 100){
    x = Number(prompt('num: '));


 }
 let cellSize = 600/x;
 

 for(let j = 0; j < x ; j++){  //loop for the rows
    let row = document.createElement('div');    //create a row
    row.classList.add('row');
    for(let i = 0; i < x ; i++ ){   //loop for the columns
        let column = document.createElement('div');
        column.classList.add('column');
        column.style.width = cellSize + 'px';
        column.style.height = cellSize + 'px';

        row.appendChild(column);   //to append the cells to each row 
        
    }
    container.appendChild(row);

}

 const col = document.querySelectorAll('.column');
//let drawing = false;
 col.forEach((column) => {
    column.addEventListener('mouseenter' , () => {
        column.style.backgroundColor = getColor();

    });
   
    column.addEventListener('mouseup' , () => {
        column.style.backgroundColor = getColor();

    });
    
 });

});
color.addEventListener('click', () => {

    while(container.firstChild){
       container.removeChild(container.firstChild);
    }
    let x = Number(prompt('num: '));
    while(x > 100){
       x = Number(prompt('num: '));
   
   
    }
    let cellSize = 600/x;
    
   
    for(let j = 0; j < x ; j++){  //loop for the rows
       let row = document.createElement('div');    //create a row
       row.classList.add('row');
       for(let i = 0; i < x ; i++ ){   //loop for the columns
           let column = document.createElement('div');
           column.classList.add('column');
           column.style.width = cellSize + 'px';
           column.style.height = cellSize + 'px';
   
           row.appendChild(column);   //to append the cells to each row 
           
       }
       container.appendChild(row);
   
   }
   
    const col = document.querySelectorAll('.column');
   //let drawing = false;
   let select = prompt("Enter desired color: ");
    col.forEach((column) => {
       column.addEventListener('mouseenter' , () => {
           column.style.backgroundColor = select;
   
       });
      
       column.addEventListener('mouseup' , () => {
           column.style.backgroundColor = select;
   
       });
       
    });
   
});
rainbow.addEventListener('click', () => {

    while(container.firstChild){
       container.removeChild(container.firstChild);
    }
    let x = Number(prompt('num: '));
    while(x > 100){
       x = Number(prompt('num: '));
   
   
    }
    let cellSize = 600/x;
    
   
    for(let j = 0; j < x ; j++){  //loop for the rows
       let row = document.createElement('div');    //create a row
       row.classList.add('row');
       for(let i = 0; i < x ; i++ ){   //loop for the columns
           let column = document.createElement('div');
           column.classList.add('column');
           column.style.width = cellSize + 'px';
           column.style.height = cellSize + 'px';
   
           row.appendChild(column);   //to append the cells to each row 
           
       }
       container.appendChild(row);
   
   }
   
    const col = document.querySelectorAll('.column');
   //let drawing = false;
    col.forEach((column) => {
       column.addEventListener('mouseenter' , () => {
           column.style.backgroundColor = getColor();
   
       });
      
       column.addEventListener('mouseup' , () => {
           column.style.backgroundColor = getColor();
   
       });
       
    });
   
}); 
