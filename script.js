"use strict";

let output = document.getElementById("output");
let initial = document.querySelector(".initial");

const number = {
    getInput(input) {
        input = Number(input);
        this.checkRange(input);
    }, 

    checkRange(input) {
        output.innerText = "";
        if(input < 1 || input > 58) {
            initial.classList.remove("gray", "red", "green", "white");
            initial.classList.add("real", "orange");
            // console.log("Number is out of range");
            output.innerText = "Number is out of range";
        } else {
            this.checkAns(input);
        }
    },

    checkAns(input) {
        let randomNum = Math.ceil(Math.random() * 58);
            if(input === randomNum) {
                initial.classList.remove("gray", "red", "white", "orange");
                initial.classList.add("green", "real");
                // console.log("correct ans", randomNum);
                output.innerText = "You Win!!";
            } else {
                initial.classList.remove("gray", "green", "white", "orange");
                initial.classList.add("real", "red");
                // console.log("wrong Number", randomNum);
                output.innerText = "Wrong number";
            }
    }
}


function checkType(input) {
    let type = isNaN(input);
    if(type === false) {
        // console.log("It is a number");
        number.getInput(input);
    } else {
        initial.classList.remove("gray", "red", "orange", "green");
        initial.classList.add("real", "white")
        // console.log("Enter a number you noob");
        output.innerText = "Enter a number you noob"; 
    }
}


document.getElementById("btn").addEventListener("click", function() {
    
    initial.classList.add("real", "gray")
    output.innerText = "checking...";
    if(document.getElementById("num").value == "") {
        output.innerText = "Empty Input";
    } else {
        setTimeout(() => {
            checkType(document.getElementById("num").value);
        }, 200);
    }
});

document.getElementById("num").addEventListener("keypress", function(event) {
    if(event.key == "Enter") {
        initial.classList.add("real", "gray")
        output.innerText = "checking...";
        if(document.getElementById("num").value == "") {
            output.innerText = "Empty Input";
        } else {
            setTimeout(() => {
                checkType(document.getElementById("num").value);
            }, 200);
        }
    }
});
