const container = document.querySelector(".container");

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