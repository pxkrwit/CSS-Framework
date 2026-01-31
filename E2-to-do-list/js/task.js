// task.js
let tasks = []
let nextId = 1

function timeStamp() {
    const now = new Date()
    return now.toLocaleString('en-US', {
        month: 'short', 
        day: '2-digit', 
        year: 'numeric',
        hour: '2-digit', 
        minute: '2-digit', 
        hour12: true
    })
}

function addTask(message, priority) {
    const newTask = { 
        id: nextId++, 
        message, 
        priority, 
        status: 'Active', 
        createdAt: timeStamp(), 
        updatedAt: null 
    }
    tasks.push(newTask)
    return newTask
}

function checkStatus(id) {
    const task = tasks.find(t => t.id === id)
    if (task) {
        task.status = (task.status === 'Active') ? 'Complete' : 'Active'
    }
    return task
}

function updateTask(id, message, priority) {
    const task = tasks.find(t => t.id === id)
    if (task) {
        if (task.message !== message || task.priority !== priority) {
            task.message = message
            task.priority = priority
            task.updatedAt = timeStamp() 
        }
    }
    return task
}

function deleteTasks(id) {
    const index = tasks.findIndex(t => t.id === id)
    if (index !== -1) tasks.splice(index, 1)
    return index
}

function getAllTask() {
    return [...tasks]
}

export { addTask, updateTask, deleteTasks, getAllTask, checkStatus }