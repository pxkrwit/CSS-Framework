// script.js
import { addTask, updateTask, deleteTasks, getAllTask, checkStatus } from './task.js'
import { cardRender } from './cardRender.js'

let editId = null 
let chooseStatus = 'All' 

document.addEventListener('DOMContentLoaded', () => {
    const addBtn = document.getElementById('addBtn')
    const input = document.getElementById('task')
    const priority = document.getElementById('priority')
    const cardList = document.getElementById('card-list')
    const searchInput = document.querySelector('input[placeholder="Search task..."]') // ดึงจาก index.html
    const filterTaskStatus = document.querySelectorAll('input[name="btnradio"]')
    const clearAllBtn = document.getElementById('clearAll')
    const clearCompletedBtn = document.getElementById('clearCompleted')
    const allTask = document.getElementById('all-task')
    const activeTask = document.getElementById('active-task')

    const cancelBtn = document.createElement('button')
    cancelBtn.textContent = 'Cancel Edit'
    cancelBtn.className = 'btn btn-outline-danger mt-2 mt-sm-0' 
    cancelBtn.style.display = 'none'
    cancelBtn.style.width = '100%' 
    addBtn.parentNode.appendChild(cancelBtn)

    function showTaskActive() {
        const tasks = getAllTask()
        const allTask = tasks.length
        const activeTask = tasks.filter(t => t.status === 'Active').length

        if (allTask) allTask.textContent = allTask
        if (activeTask) activeTask.textContent = activeTask
    }

    function refreshDOM() {
        cardList.innerHTML = ''

        const input = searchInput ? searchInput.value.toLowerCase() : ''
        const tasks = getAllTask()
        const taskFilter = tasks.filter(task => {
            const matchesSearch = task.message.toLowerCase().includes(input)
            const matchesStatus = chooseStatus === 'All' || 
                                 (chooseStatus === 'Active' && task.status === 'Active') ||
                                 (chooseStatus === 'Completed' && task.status === 'Complete')
            return matchesSearch && matchesStatus
        })

        taskFilter.forEach(task => {
            cardRender(task, editTask, deleteTask, saveStatus)
        })

        showTaskActive() 
    }

    function resetForm() {
        editId = null
        input.value = ''
        priority.value = 'Easy'
        addBtn.textContent = 'Add Task'
        addBtn.className = 'btn btn-primary w-100'
        cancelBtn.style.display = 'none'
    }

    function saveToLocal() {
        localStorage.setItem('tasks', JSON.stringify(getAllTask()))
    }

    function clearAllTask() {
        const tasks = getAllTask()
        if (tasks.length === 0) {
            alert('There are no tasks to delete.')
            return
        }
        if (confirm('Do you want to delete all tasks?')) {
            tasks.forEach(t => deleteTasks(t.id))
            saveAndRefresh()
        }
    }

    function clearCompletedTask() {
        const completed = getAllTask().filter(t => t.status === 'Complete')
        if (completed.length === 0) {
            alert('There are no task to delete.')
            return
        }
        if (confirm(`Delete completed task ${completed.length} ?`)) {
            completed.forEach(t => deleteTasks(t.id))
            saveAndRefresh()
        }
    }

    function saveAndRefresh() {
        saveToLocal()
        refreshDOM()
    }

    function saveStatus(id) {
        checkStatus(id)
        saveAndRefresh()
    }

    function editTask(task) {
        input.value = task.message
        priority.value = task.priority
        editId = task.id
        addBtn.textContent = 'Update'
        addBtn.className = 'btn btn-warning w-100'
        cancelBtn.style.display = 'block'
    }

    function deleteTask(id) {
        if (confirm('Do you want to delete this task?')) {
            deleteTasks(id)
            saveAndRefresh()
        }
    }

    addBtn.addEventListener('click', () => {
        const taskValue = input.value.trim()
        const level = priority.value
        if (!taskValue) return

        if (editId) {
            updateTask(editId, taskValue, level)
            resetForm()
        } else {
            addTask(taskValue, level)
            input.value = ''
        }
        saveAndRefresh()
    })

    cancelBtn.addEventListener('click', resetForm)

    if (searchInput) {
        searchInput.addEventListener('input', refreshDOM)
    }

    filterTaskStatus.forEach(radio => {
        radio.addEventListener('change', (e) => {
            const label = document.querySelector(`label[for="${e.target.id}"]`)
            chooseStatus = label ? label.textContent : 'All'
            refreshDOM()
        })
    })

    if (clearAllBtn) clearAllBtn.addEventListener('click', clearAllTask)
    if (clearCompletedBtn) clearCompletedBtn.addEventListener('click', clearCompletedTask)

    function loadData() {
        const data = localStorage.getItem('tasks')
        if (data) {
            const parsed = JSON.parse(data)
            parsed.forEach(t => {
                const add = addTask(t.message, t.priority)
                add.createdAt = t.createdAt
                add.updatedAt = t.updatedAt
                add.status = t.status 
            })
            refreshDOM()
        }
    }

    loadData()
})