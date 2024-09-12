
// loader ka function
let loader =document.querySelector("#preloader");

window.addEventListener("load",function(){
    loader.style.display = "none";
})


let tGame = document.querySelector(".newgame");
let reset = document.querySelector(".reset");
let box_buttons = document.querySelectorAll(".boxbutton");
let new_box = document.querySelector(".newbox");
let msg = document.querySelector(".winnerName");


let turnO = true;
let count = 0;

const winPath = [
    [0, 1, 2],
    [3, 4, 5,],
    [6, 7, 8,],
    [0, 3, 6],
    [1, 4, 7,],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
]
const Newgame = () => {
    turnO = true;
    count=0;
    enablebuts();
    new_box.classList.add("hide");
}





box_buttons.forEach((boxbutton) => {
    boxbutton.addEventListener("click", () => {

        // boxbutton.innerText="O";
        // boxbutton.innerText="x";
        if (turnO) {
            boxbutton.innerText = "O";
            boxbutton.style.color = "#1F316F";
            turnO = false;


        } else {
            boxbutton.innerText = "X";
            boxbutton.style.color = " #993333";
            turnO = true;

        }
        boxbutton.disabled = true;

        count++;

        let winner = checkwinpath();

        if (count === 9 && !winner) {
            gameDraw();
        }

    })

});

const gameDraw = () => {
    msg.innerText = `Game Draw`;
    new_box.classList.remove("hide");
    disblebuts();
}

const disblebuts = () => {
    for (let val of box_buttons) {
        val.disabled = true;
    }
}

const enablebuts = () => {
    for (let val of box_buttons) {
        val.disabled = false;
        val.innerText = "";
    }
}

const showwinner = (winner) => {
    msg.innerText = `Winner is ${winner}`;
    new_box.classList.remove("hide");
    disblebuts();

}






const checkwinpath = () => {

    for (let path of winPath) {

        //    console.log
        //    (
        //     box_buttons[path[0]].innerText,
        //     box_buttons[path[1]].innerText,
        //     box_buttons[path[2]].innerText
        // );

        let path1val = box_buttons[path[0]].innerText;
        let path2val = box_buttons[path[1]].innerText;
        let path3val = box_buttons[path[2]].innerText;

        if (path1val != "" && path2val != "" && path3val != "") {

            if (path1val === path2val && path2val === path3val) {
                // console.log("winner", path1val);
                showwinner(path1val);
               
                return true;
            }
            
        }

    }

}

reset.addEventListener("click", Newgame);
tGame.addEventListener("click", Newgame);