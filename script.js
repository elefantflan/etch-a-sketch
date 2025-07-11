const container = document.querySelector(".container");

<<<<<<< HEAD
function defaultGrid(rows, columns)
    {   
            for(i=1;i<=16;i++)
                {
                    rows = document.createElement('div')
                    rows.id = "row" +i;
                    for(i=1;i<=16;i++)
                        {
                            columns = document.createElement('div')
                            columns.id = "columns " +i;
                            rows.appendChild(columns);
                        }
                }
        
        container.appendChild(rows);
    }
defaultGrid();



=======
function defaultRow(rows)
    {
        for(i=1;i<=16;i++)
            {
                rows = document.createElement('div')
                rows.id = "row " +i
                console.log(i)
                console.log(rows);
                container.appendChild(rows);
            }
            
    }
>>>>>>> cfa71f7 (Succes: Row divs made inside container)
