const display = document.querySelector(".display");
const buttons = document.querySelectorAll("button");
const specialChars = ["%","*","/","-","+","="];
let output = "";
const calculate = (btnValue) => {
    if(btnValue === "=" && output !==""){
        //If output has '%', replace with '/100' before evaluating
        output = eval(output.replace("%","/100"));
    }else if(btnValue ==="AC"){
        output = "";
    }else if(btnValue ==="DEL"){
        output = output.toString().slice(0,-1);
    }else{
        if(output === "" && specialChars.includes(btnValue)) return;
        output += btnValue;
    }
    // console.log(btnValue)
    display.value = output;
};
// console.log(display,buttons);
//Add event listener to buttons, call caculatate() on click
buttons.forEach((button) => {
    button.addEventListener("click",(e) => calculate(e.target.dataset.value));
});