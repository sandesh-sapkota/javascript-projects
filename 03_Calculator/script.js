document.addEventListener("DOMContentLoaded", function() {
    const buttons = document.querySelectorAll(".button");
    const output = document.querySelector(".output");
    let currentInput = "0";
    let operator = "";
    let firstNumber = "";
    let secondNumber = "";

    output.textContent = currentInput;

    buttons.forEach(button => {
        button.addEventListener("mousedown", function() {
            button.classList.add("clicked");
        });

        button.addEventListener("mouseup", function() {
            button.classList.remove("clicked");

            const value = button.textContent;
            if (!isNaN(value) || value === ".") {
                // Number or decimal point
                if (currentInput === "0") {
                    currentInput = value;
                } else {
                    currentInput += value;
                }
                output.textContent = currentInput;
            } else if (value === "C") {
                // Clear
                currentInput = "0";
                operator = "";
                firstNumber = "";
                secondNumber = "";
                output.textContent = currentInput;
            } else if (value === "=") {
                // Equal
                secondNumber = currentInput;
                const result = calculate(firstNumber, operator, secondNumber);
                output.textContent = result;
                currentInput = result;
                firstNumber = "";
                operator = "";
            } else {
                // Operator (+, -, x, /)
                if (currentInput !== "") {
                    firstNumber = currentInput;
                    currentInput = "";
                    operator = value;
                }
            }
        });

        button.addEventListener("mouseout", function() {
            button.classList.remove("clicked");
        });
    });

    function calculate(num1, op, num2) {
        const number1 = parseFloat(num1);
        const number2 = parseFloat(num2);
        switch (op) {
            case "+":
                return number1 + number2;
            case "-":
                return number1 - number2;
            case "x":
                return number1 * number2;
            case "/":
                return number1 / number2;
            default:
                return 0;
        }
    }
});
