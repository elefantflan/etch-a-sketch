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



function canvasGrid(input)
        {
            for(i=1;i<=input;i++)
            {
                const rows = document.createElement('div');
                rows.classList.add("row", "row-" +i);
                    for(j=1;j<=input;j++)
                    {
                        const columns = document.createElement('div');
                        columns.classList.add("column", "column-" +j);
                        rows.appendChild(columns);
                    }
                container.appendChild(rows);
            }

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
        }




const canvas = document.querySelector('#canvas');

const canvasbtn = 
canvas.addEventListener('click', ()=>
        {
            const userInput = Number(prompt('Enter 16-100'))
            
            const min = 16;
            const max = 100;

            console.log(typeof userInput);

            if (userInput >=16 && userInput <=100)
                {

                    canvasGrid(userInput);
                }
            else
                {
                    alert('Try Again')
                }
                
        }
)

const reset = document.querySelector('#reset');
reset.addEventListener('click', ()=>
        {
            const columns = document.querySelectorAll('.column')
            columns.forEach(column =>
                    {
                        column.style.backgroundColor='black';
                    }
                )
        }
)