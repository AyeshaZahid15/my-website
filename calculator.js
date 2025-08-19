let setupCalculator= ()=>{
    let display = document.querySelector(".display");
    let buttons = document.querySelectorAll("button");

    for(let i = 0; i < buttons.length; i++){
        buttons[i].addEventListener("click", function(){
            let value = this.textContent;

            if(value == "="){
                display.value = eval(display.value);
            }
            else if(value == "AC"){
                display.value = " ";   // All clear
            }
            else if(value == "C"){
                display.value = display.value.slice(0, -1);
            }
            else{
                display.value += value;
            }
        });
    }
}
setupCalculator();