function press(value){
    document.getElementById("display").value += value;
}

function calculate(){
    const display = document.getElementById("display");
    try{
        const result = eval(display.value)
        display.value = result;
    } catch{
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
  }

function backspace(){
   const display =document.getElementById("display");
   display.value = display.value.slice(0,-1);
}
