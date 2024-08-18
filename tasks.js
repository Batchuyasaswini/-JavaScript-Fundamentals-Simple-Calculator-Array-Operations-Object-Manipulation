// Task 1: Simple Calculator
function simpleCalculator(num1, num2, operator) {
    let result;
    switch (operator) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = 'Error: Division by zero';
            }
            break;
        default:
            result = 'Error: Invalid operator';
    }
    return result;
}

function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    const result = simpleCalculator(num1, num2, operator);
    document.getElementById('calcResult').textContent = result;
}

// Task 2: Array Operations
function sumOfEvenNumbers(array) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 === 0) {
            sum += array[i];
        }
    }
    return sum;
}

function sumEvenNumbers() {
    const arrayInput = document.getElementById('arrayInput').value.split(',').map(Number);
    const result = sumOfEvenNumbers(arrayInput);
    document.getElementById('arrayResult').textContent = result;
}

// Task 3: Object Manipulation
const Person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 25,
    
    getFullName: function() {
        return this.firstName + ' ' + this.lastName;
    },
    
    incrementAge: function() {
        this.age += 1;
    }
};

function displayFullName() {
    const fullName = Person.getFullName();
    document.getElementById('fullNameResult').textContent = fullName;
}

function incrementAge() {
    Person.incrementAge();
    document.getElementById('ageResult').textContent = Person.age;
}
