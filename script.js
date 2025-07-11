const container = document.querySelector(".container");



function defaultRow(rows, columns)
    {  
        for(i=1;i<=16;i++)
            {
                rows = document.createElement('div');
                rows.classList.add("row", "row-" +i);
                    for(j=1;j<=16;j++)
                    {
                        columns = document.createElement('div');
                        columns.classList.add("column", "column-" +j);
                        rows.appendChild(columns);
                    }
                container.appendChild(rows);
            }
    }
defaultRow();

const columns = document.querySelectorAll('.column');
columns.forEach(column =>
        {
            column.addEventListener('mouseover', ()=>
                {
                    column.style.backgroundColor='white';
                }
            )
        }
    )


const reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>
        {
            columns.forEach(column =>
                    {
                        column.style.backgroundColor='black';
                    }
                )
        }
)