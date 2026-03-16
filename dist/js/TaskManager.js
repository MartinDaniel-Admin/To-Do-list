class TaskManager{
    #tasks;
    #rowTasks = document.getElementById("rowTasks");
    #taskInput = document.getElementById("task").value;
    #button = document.getElementById("btn");

    constructor(){
       const tasksFromStorage = localStorage.getItem("tasks");
        this.#tasks = tasksFromStorage ? JSON.parse(tasksFromStorage) : [];
        
        this.createTask();
    }

    createTask(){
        this.#button.addEventListener("click", (e) => {
            e.preventDefault();
            const taskValue = this.#taskInput.value;
            const newTask = new Task(taskValue);

            this.#tasks.push(task)
            const jsonTasks = JSON.stringify(this.#tasks);
            localStorage.setItem("tasks", jsonTasks);
      
            this.renderTask();
        })
    }
    renderTask() {
        this.#rowTasks.innerHTML = ""; //vymaže předchozí tabulku kvůli duplicitě
    
        this.#tasks.forEach(task => {
          this.#rowTasks.innerHTML += task.toString();
        });
      };
    };


