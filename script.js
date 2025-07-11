const container = document.querySelector(".container");



function defaultRow(rows)
    {  
        for(i=1;i<=16;i++)
            {
                rows = document.createElement('div');
                rows.id = "rows " +i;
                    for(j=1;j<=16;j++)
                    {
                        columns = document.createElement('div')
                        columns.id = "columns " +j
                        console.log(columns);
                        rows.appendChild(columns);
                    }
                container.appendChild(rows);
            }

    }
defaultRow();