export function cardRender(task, edit, deleted, status) {
    const cardList = document.getElementById('card-list')
    const card = document.createElement('div')
    
    let priorityClass = 'text-bg-primary'
    if (task.priority === 'Easy') priorityClass = 'text-bg-success'  
    if (task.priority === 'Medium') priorityClass = 'text-bg-warning'
    if (task.priority === 'High') priorityClass = 'text-bg-danger'

    const complete = task.status === 'Complete'
    const statusClass = complete ? 'border-success opacity-50 bg-light text-dark' : 'border-secondary bg-white text-dark'
    const textDecoration = complete ? 'text-decoration: line-through;' : ''
    
    let timeDisplay = `${task.createdAt}`
    if (task.updatedAt) {
        timeDisplay += ` | Edited: ${task.updatedAt}`
    }

    card.className = `card ${statusClass} mb-3 shadow-sm`
    card.innerHTML = `
        <div class="card-body d-flex align-items-center justify-content-between">
            <div class="d-flex align-items-center">
                <img src="${complete ? './assets/icon/check2-circle.svg' : './assets/icon/circle.svg'}" 
                     class="status-icon me-3" style="cursor:pointer; width:24px;">
                <div>
                    <h5 class="card-title mb-0" style="${textDecoration}">
                        ${task.message} 
                        <span class="badge ${priorityClass}" style="font-size: 0.6em;">${task.priority}</span>
                    </h5>
                    <small class="text-muted">${timeDisplay} | <strong>${task.status}</strong></small>
                </div>
            </div>
            <div>
                <button class="btn btn-sm btn-outline-secondary edit-btn">Edit</button>
                <button class="btn btn-sm btn-outline-danger delete-btn px-2 ms-1">Delete</button>
            </div>
        </div>
    `;

    card.querySelector('.status-icon').addEventListener('click', () => status(task.id))
    card.querySelector('.edit-btn').addEventListener('click', () => edit(task))
    card.querySelector('.delete-btn').addEventListener('click', () => deleted(task.id))
    cardList.appendChild(card)
}