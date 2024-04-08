const displayOperation = document.getElementById('display-operation');
const displayResult= document.getElementById('display-result');
const buttonNumber = document.querySelectorAll('.button-number');
const buttonOperator = document.querySelectorAll('.button-operator');
const buttonClear = document.getElementById('clear');
const buttonDelete = document.getElementById('delete')
const buttonEquals = document.getElementById('equals')
const buttonPercent = document.getElementById('percent')

let displayContent = displayOperation.textContent

buttonNumber.forEach((button) => {
    
    button.addEventListener('click', () => {
        if(displayOperation.textContent == "0"){
            displayOperation.textContent = button.textContent
        } else {
            displayOperation.textContent += button.textContent
        }
        
    })
})

buttonOperator.forEach(operator => {
    operator.addEventListener('click', () => {
        displayOperation.textContent += operator.value
    })
})

buttonPercent.addEventListener('click' , () => {
    if(displayResult.textContent == '0'){
        try {
            displayResult.textContent = displayOperation.textContent / 100;
        } catch (error) {
            displayResult.textContent = 'Error! 😟'
        }
        
    } else {
        displayResult.textContent = displayResult.textContent / 100
    }
})

buttonDelete.addEventListener('click', () => {
    console.log(displayOperation.textContent.toString().length);
    if(displayOperation.textContent.toString().length == 1){
        displayOperation.textContent = '0'
    } else {
        displayOperation.textContent = displayOperation.textContent.slice(0,-1)
    }
    
})

buttonClear.addEventListener('click', () => {
    displayOperation.textContent = '0'
    displayResult.textContent = '0'
})

buttonEquals.addEventListener('click', () => {
    const result = eval(displayOperation.textContent)
    if(result.toString().length > 10){
        displayResult.textContent = result.toFixed(2)
    } else {
        displayResult.textContent = result
    }
})


