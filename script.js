//constant declared for input button and task list area
const taskInput = document.querySelector("#newtask input");
const taskSection = document.querySelector('.tasks');
//listener for the Enter key. Used to add new task.
taskInput.addEventListener('keypress', (e) => {
if (e.key === 'Enter'){createTask()}});
//the onclick event for the 'Add' button
document.querySelector('#push').onclick = function(){
createTask();
}
//function that creates a task
function createTask() {
    if (taskInput.value.length == 0) {
        alert("The task field is blank. Enter a task name and try again.");
    } else {
        // This block inserts HTML that creates each task into the task area div element
        taskSection.innerHTML += `
        <div class="task">
            <label id="taskname">
                <input onclick="updateTask(this)" type="checkbox" id="check-task">
                <p>${taskInput.value}</p>
            </label>
            <div class="delete">
                <i class="uil uil-trash"></i>
            </div>
        </div>`;
        
        // Attach event listeners to newly added delete buttons
        var current_task = document.querySelectorAll(".delete");
        for (var i = 0; i < current_task.length; i++) {
            current_task[i].onclick = function() {
                this.parentNode.remove();
            }
        }
        
        // Toggle overflow class based on the height of the task section
        taskSection.offsetHeight >= 300
            ? taskSection.classList.add("overflow")
            : taskSection.classList.remove("overflow");
        
        // Clear the input field
        taskInput.value = "";
    }
}
function updateTask(task) {
    let taskItem = task.parentElement.lastElementChild;
    if (task.checked) {
        taskItem.classList.add("checked");
    } else {
        taskItem.classList.remove("checked");
    }
}