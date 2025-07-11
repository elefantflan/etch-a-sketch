const container = document.querySelector(".container");



function defaultGrid()
    {  
        for(i=1;i<=16;i++)
            {
                const rows = document.createElement('div');
                rows.classList.add("row", "row-" +i);
                    for(j=1;j<=16;j++)
                    {
                        const columns = document.createElement('div');
                        columns.classList.add("column", "column-" +j);
                        rows.appendChild(columns);
                    }
                container.appendChild(rows);
            }
    }
defaultGrid();
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

function canvasGrid()
        {

        }

const canvas = document.querySelector('#canvas');
canvas.addEventListener('click', ()=>
        {
            const userInput = Number(prompt('Enter 16-100'))
            
            const min = 16;
            const max = 100;

            console.log(typeof userInput);

            if (userInput >=16 && userInput <=100)
                {
                    columns.forEach(column =>
                            {
                                column.style.backgroundColor='black';
                            }
                        )
                    defaultGrid(userInput, userInput);
                }
            else
                {
                    alert('Try Again')
                }
                
        }
)