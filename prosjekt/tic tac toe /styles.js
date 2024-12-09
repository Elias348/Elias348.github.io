var winners = new Array();
var player1Selections = new Array();
var player2Selections = new Array();
var currentPlayer = 0;
var points1 = 0;    
var points2 = 0;    
var size = 3;
function drawBoard()
{
    let parent = document.getElementById("game");
    let counter = 1;

    for (let i = 0; i < 3; i++)
    {
        let row = document.createElement("tr");

        for(let x = 0; x < size; x++)
        {
            let col = document.createElement("td");
            col.innerHTML = counter;

            row.appendChild(col);
        }
        parent.appendChild(row);
    }
}

// test