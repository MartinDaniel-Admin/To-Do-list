const DEV_MODE = false;

window.addEventListener("DOMContentLoaded", () => {
    if (DEV_MODE) console.log("DEV MODE: clearing storage");

    if (DEV_MODE) {
        localStorage.removeItem("tasks");
    }

    new TaskManager();
});