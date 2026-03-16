class Task{

constructor(taskValue){
    this.task = taskValue;
    console.log(this.task)
}

toString(){
    return `
    <tr>
        <td>Create ${this.task}</td>
    </tr>
    `;
}
}