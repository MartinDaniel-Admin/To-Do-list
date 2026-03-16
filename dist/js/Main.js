const rowTasks = document.getElementById("rowTasks");

//Při načtení vymaže localStorage a smaže řádky a inicializuje Spravce
window.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("tasks"); 
    rowTasks.innerHTML = "";         
    new TaskManager(); 
});
