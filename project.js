let container = document.querySelector('#container');
let btn = document.querySelector('button');
btn.addEventListener('click', () => {
 while(container.firstChild){
    container.removeChild(container.firstChild);
 }
 let x = Number(prompt('num: '));
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
        column.style.backgroundColor = '#9068be';

    });
   
    column.addEventListener('mouseup' , () => {
        column.style.backgroundColor = '#9068be';

    });
    
 });

});
