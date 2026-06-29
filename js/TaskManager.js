class TaskManager {
  #tasks;
  #taskList = document.getElementById("task-list");
  #taskInput = document.getElementById("task-input");
  #addTaskBtn = document.getElementById("add-task-btn");


  constructor() {
    const tasksFromStorage = localStorage.getItem("tasks");
    this.#tasks = tasksFromStorage
  ? JSON.parse(tasksFromStorage).map(t => {
      const task = new Task(t.text, t.done);
      task.id = t.id; 
      return task;
    })
  : [];

    this.addTask();
    this.renderTask();
  }

  addTask() {
    this.#addTaskBtn.addEventListener("click", (event) => {
      event.preventDefault();
      const taskText = this.#taskInput.value.trim();
      if (!taskText) {
        return;
      }


      this.#tasks.push(new Task(taskText));
      const jsonTasks = JSON.stringify(this.#tasks);
      localStorage.setItem("tasks", jsonTasks);

      this.#taskInput.value = "";
      this.renderTask();
    })
  }

  renderTask() {
    this.#taskList.innerHTML = "";

    this.#tasks.forEach(task => {
      const taskElement = task.render(this.deleteTask, this.editTask, this.toggleTask);
      this.#taskList.appendChild(taskElement);
    });
    this.updateProgress();
  }

  deleteTask = (taskToDelete) => {
    this.#tasks = this.#tasks.filter(
      task => task.id !== taskToDelete.id
    );

    localStorage.setItem("tasks", JSON.stringify(this.#tasks));
    this.renderTask();
  }

  editTask = (taskToEdit, newText) => {
    if (!newText.trim()) return;

    taskToEdit.text = newText;

    localStorage.setItem("tasks", JSON.stringify(this.#tasks));

    this.renderTask();
  }
  toggleTask = (taskToToggle) => {
    taskToToggle.done = !taskToToggle.done;

    localStorage.setItem("tasks", JSON.stringify(this.#tasks));
    this.renderTask();
  }
  updateProgress = () => {
    const total = this.#tasks.length;
    const done = this.#tasks.filter(t => t.done).length;

    const percent = total === 0 ? 0 : (done / total) * 100;

    document.getElementById("progress-bar").style.width = percent + "%";
    document.getElementById("progress-text").textContent =
    total === 0 ? "No tasks yet: " : `${done} / ${total} done`;
  }
}

