function ToDoList(selector) {
   this.container = document.querySelector(selector)
    this.tasks = []

    this.init()
    this.render()
}

ToDoList.prototype.init = function () {
    this.newToDoInput = document.createElement('input')
    this.addToDoButton = document.createElement('button')
    this.tasksContainer = document.createElement('div')
    this.addToDoButton.innerText = "Dodaj!"

    this.container.appendChild(this.newToDoInput)
    this.container.appendChild(this.addToDoButton)
    this.container.appendChild(this.tasksContainer)
}



ToDoList.prototype.addTask = function (taskText) {
    this.tasks.push(taskText)
    this.render()
}

ToDoList.prototype.render = function () {
    var self = this
    this.tasksContainer.innerHTML = ''
this.tasks.forEach(function (taskText){
    var taskDiv = document.createElement('div')
    taskDiv.innerText = taskText
    self.tasksContainer.appendChild(taskDiv)
    })
}

var todo = new ToDoList('body')

todo.addTask('first task')

console.log(todo)