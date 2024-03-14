document.querySelector(".addtask").onclick = () => {
  const taskInput = document.querySelector(".newtask input");
  if (taskInput.value.length == 0) {
    alert("Please Enter a task");
  } else {
    document.querySelector(".tasks").innerHTML += `<div class="task">
        <span class="taskname">${taskInput.value}</span>
        <button class="deletebtn">X</button>
      </div>`;

    taskInput.value = "";

    DeleteTask();
  }
};

function DeleteTask() {
  var current_tasks = document.querySelectorAll(".deletebtn");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}

// Initial setup
updateDeleteButtons();
