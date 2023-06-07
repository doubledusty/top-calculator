function adder(a, b){
    return (a + b)
}

function subtractor(a, b){
    return (a - b)
}

function multiplier(a, b){
    return (a * b)
}

function divider(a, b){
    return (a / b)
}

//selects which operation function to call
function operate(){
    console.log("operating", values)
    if(values.plus){
        values.plus = false
        values.saved = adder(values.saved, parseFloat(values.current))
    } else if(values.minus) {
        values.minus = false
        values.saved = subtractor(values.saved, parseFloat(values.current))
    } else if(values.multiply){
        values.multiply = false
        values.saved = multiplier(values.saved, parseFloat(values.current))
    } else if(values.divide) {
        values.divide = false
        values.saved = divider(values.saved, parseFloat(values.current))
    }
    values.current = ""
}


const display = document.getElementById("display")

const cButton = document.getElementById("c")
const ceButton = document.getElementById("ce")
const oneButton = document.getElementById("1")
const twoButton = document.getElementById("2")
const threeButton = document.getElementById("3")
const fourButton = document.getElementById("4")
const fiveButton = document.getElementById("5")
const sixButton = document.getElementById("6")
const sevenButton = document.getElementById("7")
const eightButton = document.getElementById("8")
const nineButton = document.getElementById("9")
const zeroButton = document.getElementById("0")
const divideButton = document.getElementById("divide")
const multiplyButton = document.getElementById("multiply")
const minusButton = document.getElementById("minus")
const plusButton = document.getElementById("plus")
const pointButton = document.getElementById("point")
const equalsButton = document.getElementById("equals")

let buttons = [cButton, ceButton, oneButton, twoButton, threeButton, fourButton, 
    fiveButton, sixButton, sevenButton, eightButton, nineButton, zeroButton, 
    divideButton, multiplyButton, minusButton, plusButton, pointButton, 
    equalsButton]

let values = {
    current: "",
    saved: false,
    plus: false,
    minus: false,
    multiply: false,
    divide: false,
    
}

//make starting display show 0
display.textContent = "0"

//add hover visual behavior for each button
buttons.forEach(button => {
    button.dataset.backgroundColor = window.getComputedStyle(button)['backgroundColor']
    button.addEventListener("mouseover", function(){
        button.style.backgroundColor = "black"
    })
    button.addEventListener('mouseout', function(){
        button.style.backgroundColor = button.dataset.backgroundColor
    })

    button.addEventListener('click', function(){
        if(button.classList.contains("num")){
            //concats clicked num to current stopping after max length
            console.log(values.current.length)
            if (values.current.length < 8){
                values.current = values.current + button.textContent
                display.textContent = values.current
            }
        }else if(button.classList.contains("clear")){
            values.current = ""
            display.textContent = "0"
            if(button.id == "c"){
                values = {
                    current: "",
                    saved: false,
                    plus: false,
                    minus: false,
                    multiply: false,
                    divide: false,
                    
                }
            }
            console.log("cleared", values)
        }else if(button.classList.contains("operator")){
            if((values.saved === false) && (button.id != "equals")){
                //operator clicked before number is saved
                //save value and make clicked operator true with all others false
                values.current == "" ? values.current = "0" : undefined;
                values.saved = parseFloat(values.current)
                values.current = ""
                values.divide = false
                values.minus = false
                values.multiply = false
                values.plus = false
                values[button.id] = true
                display.textContent = "0"
            } else if (values.current == ""){
                //operator is clicked with saved value but no current value
                //only reset operator selected
                values.divide = false
                values.minus = false
                values.multiply = false
                values.plus = false
                values[button.id] = true
            }else {
                //operator is clicked with saved value and current value
                operate()
                display.textContent = values.saved
                if(button.id != "equals"){
                    values[button.id] = true
                }
            }
            console.log("operator", values)
        }

    })
});





