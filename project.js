let container = document.querySelector('#container');




for(let j = 0; j < 16 ; j++){  //loop for the rows
    let row = document.createElement('div');    //create a row
    row.classList.add('row');
    for(let i = 0; i < 16 ; i++ ){   //loop for the columns
        let column = document.createElement('div');
        column.classList.add('column');
        row.appendChild(column);   //to append the cells to each row 
        
    }
    container.appendChild(row);

}

