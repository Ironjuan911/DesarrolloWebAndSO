document.addEventListener('DOMContentLoaded', () => {
    const taskForm = document.getElementById('task-form');
    const taskList = document.getElementById('task-list');

    // Cargar tareas al iniciar la página
    let tasks = JSON.parse(localStorage.getItem('tasks')) || [];
    renderTasks();

    // Manejar el envío del formulario
    taskForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-description').value;
        const date = document.getElementById('task-date').value;

        if (title && date) {
            const newTask = {
                id: Date.now(), // Un ID único para cada tarea
                title,
                description,
                date,
            };
            tasks.push(newTask);
            saveTasks();
            renderTasks();
            taskForm.reset();
        }
    });

    // Función para guardar las tareas en localStorage
    function saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    }

    // Función para renderizar las tareas en la interfaz
    function renderTasks() {
        taskList.innerHTML = ''; // Limpiar la lista antes de renderizar
        tasks.forEach(task => {
            const taskCard = document.createElement('div');
            taskCard.classList.add('task-card');
            taskCard.setAttribute('data-id', task.id);

            taskCard.innerHTML = `
                <h3>${task.title}</h3>
                <p>${task.description || ''}</p>
                <span class="task-date">Fecha límite: ${task.date}</span>
                <button class="btn complete-btn">Completado</button>
            `;
            taskList.appendChild(taskCard);
        });
    }

    // Manejar el clic en el botón de completado
    taskList.addEventListener('click', (e) => {
        if (e.target.classList.contains('complete-btn')) {
            const taskCard = e.target.closest('.task-card');
            const taskId = parseInt(taskCard.getAttribute('data-id'));

            // Eliminar la tarea del array y del DOM
            tasks = tasks.filter(task => task.id !== taskId);
            saveTasks();
            taskCard.remove();
        }
    });
});