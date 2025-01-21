class Calculator {
    constructor() {
        this.num1 = document.querySelector("#num1")
        this.num2 = document.querySelector("#num2")
        this.operation = document.querySelector("#operation").value
        this.result = document.querySelector("#result")
    }

    calculate() {
        const firstN = parseFloat(this.num1.value)
        const secondN = parseFloat(this.num2.value)
        let calcResult

        switch(this.operation) {
            case "add":
                calcResult = firstN + secondN
                break;
            case "subtract":
                calcResult = firstN - secondN
                break;
            case "multiply":
                calcResult = firstN*secondN
                break;
            case "divide":
                calcResult = firstN/secondN
                break
            default:
                calcResult = "Invalid operation"
                break;
        }

        this.result.innerHTML = calcResult
    }

}

const calcBtn = document.querySelector("#calculateBtn")
calcBtn.addEventListener("click", () => {
    const calc1 = new Calculator()
    calc1.calculate()
})

//--------------------------------------------------------------------------
// const num1 = document.querySelector("#num1")
// const num2 = document.querySelector("#num2")
// const operation = document.querySelector("#operation").value
// const result = document.querySelector("#result")
// const button = document.querySelector("#calculateBtn")

// button.addEventListener("click", () => {
//     const firstN = parseFloat(num1.value)
//     const secondN = parseFloat(num2.value)
//     let calculationResult
    
//     // let operator

//     // operator.addEventListener("change", (e) => {
//     //     operator = e.target.value
//     // })

//     switch (operation) {
//         case "add":
//             calculationResult = firstN + secondN;
//             break;
//         case "subtract":
//             calculationResult = firstN - secondN;
//             break;
//         case "multiply":
//             calculationResult = firstN * secondN;
//             break;
//         case "divide":
//             calculationResult = secondN !== 0 ? firstN / secondN : "Cannot divide by 0";
//             break;
//         default:
//             calculationResult = "Select an operation";
//     }
    
//     result.innerHTML = calculationResult

//     console.log("button clicked")
// })

//-------------------------note------------------------------------

// class Note {
//     #note
//     // static counter = 0
//     static notes = []

//     constructor(note) {
//         this.#note = note
//         // Note.counter++
//         Note.notes.push(note)
//         this.list = document.querySelector("#notes-list")
//     }

//     render() {
//         this.list.innerHTML = ""

//         Note.notes.forEach(note => {
//             const li = document.createElement("li")
//             li.textContent = note
//             this.list.append(li)
//         })
//     }
// }

// const form = document.querySelector("#notes-form")
// const noteInput =document.querySelector("#note")

// form.addEventListener("submit", (e) => {
//     e.preventDefault()

//     const noteMessage = noteInput.value
//     const newNote = new Note(noteMessage)
//     console.log(noteMessage)
//     // console.log(Note.counter)
//     // console.log(Note.notes)
//     newNote.render()
//     form.reset()
//     noteInput.focus()
// })

// //---------------------------------------------Todo------------------------------------------------------

// class Todo {
//     constructor(description) {  // ask when to add variables into argument of constructer and when to not add
//         this.description = description
//         this.isCompleted = false
//     }
// }

// class TodoList {
//     static todos = []
//     constructor() { //variables should be argument when it's shared with all instances.
//         this.tasks = []

//         // Bind DOM
//         this.todoListElement = document.querySelector("#todo-list")
//         this.todoInputElement = document.querySelector("#todo-input")
//         this.addTodoButton = document.querySelector("#add-btn")

//         this.addTodoButton.addEventListener('click', (e) => {
//             e.preventDefault()
//             this.addTodo()
//         })

//         Todo.todos.push()
//     }

//     todoComplete(index) {
//         if (this.todo[index]) {
//             todo[index].toggleComplete()

//         }
//     }

//     addTodo() {
//         const description = this.todoInputElement.value
//         if (description) {
//             const todo = new Todo(description)
//             console.log(todo)
//         }
//     }

//     render() {
//         this.todoListElement.innerHTML = ""

//         this.todos.forEach((todo, index) => {
//             const li = document.createElement("li")
//             li.classList.add(todo.isCompleted ? "complete" : "incomplete")
//             li.textContent = `${todo.description} - ${todo.isCompleted ? "Completed" : "Not completed"}`
//             this.todoListElement.appendChild(li)
//         }
//     )}
// }

// document.addEventListener('DOMContentLoaded', () => {
//     const schoolTodoList = new TodoList()
// })