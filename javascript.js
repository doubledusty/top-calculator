function adder(a, b){
    return a + b
}

function subtractor(a, b){
    return a - b
}

function multiplier (a, b){
    return a * b
}

function divider(a, b){
    return a / b
}

const c = document.getElementById("c")
const one = document.getElementById("1")
const two = document.getElementById("2")
const three = document.getElementById("3")
const four = document.getElementById("4")
const five = document.getElementById("5")
const six = document.getElementById("6")
const seven = document.getElementById("7")
const eight = document.getElementById("8")
const nine = document.getElementById("9")
const zero = document.getElementById("0")
const divide = document.getElementById("divide")
const multiply = document.getElementById("multiply")
const minus = document.getElementById("minus")
const plus = document.getElementById("plus")
const point = document.getElementById("point")
const equals = document.getElementById("equals")

buttons = [c, one, two, three, four, five, six, seven, eight, 
    nine, zero, divide, multiply, minus, plus, point, equals]


one.addEventListener("mouseover", function(){
    one.style.backgroundColor = "black"
})
    buttons.forEach(button => {
        button.addEventListener("mouseover", function(){
            button.style.backgroundColor = "black"
        })
});


