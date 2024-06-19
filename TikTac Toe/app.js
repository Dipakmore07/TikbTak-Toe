
// Select all elements with class "box"
let boxes = document.querySelectorAll(".box");
// Select reset button
let resetBtn = document.querySelector(".res-btn");
let newGameBtn = document.querySelector("#new-btn");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX = true; // Track whose turn it is

const winPattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8]
];
const resetGame = () => {
    turnX = true;
    enabledBoxes();
    msgContainer.classList.add("hide");
}
// Add click event listener to each box
boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("Box was clicked");
        if (turnX) {
            box.innerText = "X";
            turnX = false;
        } else {
            box.innerText = "0";
            turnX = true;
        }
        box.disabled = true;
        chechWinner();
    });
});
const disabledBoxes = () => {
    for (box of boxes) {
        box.disabled = true;
    }
};
const enabledBoxes = () => {
    for (box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

const ShowWinner = (winner) => {
    msg.innerText = `Congratulations , winner is ${winner}`;
    msgContainer.classList.remove("hide");
    disabledBoxes();
}

const chechWinner = () => {
    for (let pattern of winPattern) {
        console.log(pattern[0], pattern[1], pattern[2]);

        let pos1val = boxes[pattern[0]].innerText;
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val === pos2val && pos2val === pos3val) {
                console.log("winner", pos1val);

                ShowWinner(pos1val);
            }
        }
    }
};


newGameBtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);

/* // Reset button click event listener
resetBtn.addEventListener("click", () => {
    // Clear text content of all boxes
    boxes.forEach((box) => {
        box.innerText = "";
    });

    // Reset turn to playerX
    turnX = true;
});
*/
