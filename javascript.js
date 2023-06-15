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
   switch(values.operator) {
    case "plus":
        values.operator = false
        values.saved = adder(values.saved, parseFloat(values.current))
        break
    case "minus":
        values.operator = false
        values.saved = subtractor(values.saved, parseFloat(values.current))
        break
    case "divide":
        values.operator = false
        values.saved = divider(values.saved, parseFloat(values.current))
        break
    case "multiply":
        values.operator = false
        values.saved = multiplier(values.saved, parseFloat(values.current))
        break
   }
   values.current = ""
}

//only selected operator is highlighted, reset if passed nothing or other value
function highlightOperator(target){
    switch(target){
    case "plus":
        divideButton.style.color = 'black'
        multiplyButton.style.color = 'black'
        minusButton.style.color = 'black'
        plusButton.style.color = 'red'
        break
    case "minus":
        divideButton.style.color = 'black'
        multiplyButton.style.color = 'black'
        minusButton.style.color = 'red'
        plusButton.style.color = 'black'
        break
    case "divide":
        divideButton.style.color = 'red'
        multiplyButton.style.color = 'black'
        minusButton.style.color = 'black'
        plusButton.style.color = 'black'
        break
    case "multiply":
        divideButton.style.color = 'black'
        multiplyButton.style.color = 'red'
        minusButton.style.color = 'black'
        plusButton.style.color = 'black'
        break
    default:
        divideButton.style.color = 'black'
        multiplyButton.style.color = 'black'
        minusButton.style.color = 'black'
        plusButton.style.color = 'black'
        break
    }
    return
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
    operator: false,
    saved: false,   
}

//make starting display show 0
display.textContent = "0"

//add hover visual behavior for each button
buttons.forEach(button => {
    button.dataset.backgroundColor = window.getComputedStyle(button)['backgroundColor']
    button.addEventListener("mouseover", function(){
        button.style.backgroundColor = 'rgb(100, 100, 100)'
    })

    button.addEventListener('mouseout', function(){
        button.style.backgroundColor = button.dataset.backgroundColor
        button.style.justifyContent = 'start'
        button.style.alignItems = 'start'
    })
    
    button.addEventListener('mousedown', function(){
        button.style.justifyContent = 'center'
        button.style.alignItems = 'center'
    })
    button.addEventListener('mouseup', function(){
        button.style.justifyContent = 'start'
        button.style.alignItems = 'start'
    })
    button.addEventListener('click', function(){
        if(button.classList.contains("num")){
            //concats clicked num to current stopping after max length
            if (values.current.length < 8){
                values.current = values.current + button.textContent
                display.textContent = values.current
            }
        }else if(button.classList.contains("clear")){
            values.current = ""
            display.textContent = "0"
            highlightOperator()
            if(button.id == "c"){
                values = {
                    current: "",
                    saved: false,
                    operator: false,
                }
            }
        }else if(button.classList.contains("operator")){
            if((values.saved === false) && (button.id != "equals")){
                //operator clicked before number is saved
                //save value and save operator
                values.current == "" ? values.current = "0" : undefined;
                values.saved = parseFloat(values.current)
                values.current = ""
                values.operator = button.id
                display.textContent = "0"
                highlightOperator(button.id)
            } else if (values.current == ""){
                //operator is clicked with saved value but no current value
                //only reset operator selected
                values.operator = button.id
            }else {
                //operator is clicked with saved value and current value
                operate()
                
                display.textContent = values.saved
                if(button.id != "equals"){
                    values.operator = button.id
                    highlightOperator(button.id)
                } else {
                    highlightOperator()
                }
            }
            

        }

    })
});





