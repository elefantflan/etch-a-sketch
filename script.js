const container = document.querySelector(".container");



function defaultRow(rows)
    {  
        for(i=1;i<=16;i++)
            {
                rows = document.createElement('div');
                rows.classList.add("row", "row-" +i);
                    for(j=1;j<=16;j++)
                    {
                        columns = document.createElement('div');
                        columns.classList.add("column", "column-" +j);
                        console.log(columns);
                        rows.appendChild(columns);
                    }
                container.appendChild(rows);
            }

    }
defaultRow();