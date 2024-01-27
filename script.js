const buttons = document.querySelectorAll(".buttons input"),
    clearKey = document.querySelector(".clear"),
    backspace = document.querySelector(".backspace"),
    equal = document.querySelector(".eql");

equal.addEventListener("click", calculateResult)

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        let numericValues = result.value.match(/(\d+(\.\d+)?|[+\-*/])/g);
        if (btn.value == ".") {
            if (!numericValues[numericValues.length - 1].includes(".")) {
                result.value += btn.value;
            }
        }else if (btn.value !== "=") {
            result.value += btn.value;
        }
    })
})

clearKey.addEventListener("click", () => {
    result.value = '';
})



backspace.addEventListener("click", () => {
    result.value = result.value.slice(0, result.value.length - 2);
})



function calculateResult() {
    console.log(result.value)
    result.value = eval(result.value).toFixed(2)
}