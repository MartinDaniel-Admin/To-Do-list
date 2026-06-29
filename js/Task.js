class Task {
    constructor(text, done = false) {
        this.id = Date.now();
        this.text = text;
        this.done = done;
    }



    render(onDelete, onEdit, onToggle) {
        const li = document.createElement("li");

        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.classList.add("checkbox");
        checkbox.checked = this.done;
        checkbox.addEventListener("change", () => {
            onToggle(this);
        });


        const span = document.createElement("span");
        span.classList.add("checkmark");
        span.textContent = this.text;
        if (this.done) span.classList.add("completedTask");

        const editBtn = document.createElement("button");
        editBtn.classList.add("edit-btn");
        editBtn.addEventListener("click", () => {
            const input = document.createElement("input");
            input.type = "text";
            input.value = this.text;
            input.classList.add("edit-input");

            li.replaceChild(input, span);
            input.focus();

            input.addEventListener("keydown", (e) => {
                if (e.key === "Enter") {
                    onEdit(this, input.value);
                }

                if (e.key === "Escape") {
                    li.replaceChild(span, input);
                }
            });


            input.addEventListener("blur", () => {
                onEdit(this, input.value);
            });
        });


        const deleteBtn = document.createElement("button");
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", () => {
            onDelete(this);
        });

        li.appendChild(checkbox);
        li.appendChild(span);
        li.appendChild(editBtn);
        li.appendChild(deleteBtn);
        return li;
    }
}