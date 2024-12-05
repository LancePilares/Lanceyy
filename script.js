document.addEventListener("DOMContentLoaded", () => {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");
    const equalsButton = document.querySelector(".equals");

   
    buttons.forEach((button) => {
        button.onclick = () => {
            const value = button.textContent;

           
            if (value === "Del") {
                display.value = display.value.slice(0, -1) || "0";
            } 
          
            else {
                if (display.value === "0" && value !== ".") {
                    display.value = value;
                } else {
                    display.value += value;
                }
            }
        };
    });

    
    equalsButton.onclick = () => {
        try {
            display.value = eval(display.value) || "0";
        } catch (e) {
            display.value = "Error";
        }
    };
});
