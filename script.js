const buttons = document.querySelectorAll(".buttons input"),
    clearKey = document.querySelector(".clear"),
    backspace = document.querySelector(".backspace"),
    equal = document.querySelector(".eql");

equal.addEventListener("click", calculateResult)

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if(btn.value !== "=") {
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
    result.value = eval(result.value)
}