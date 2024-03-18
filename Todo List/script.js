document.querySelector(".addTask").onclick = () => {
  const taskInput = document.querySelector(".newTask input");
  if (taskInput.value.length == 0) {
    alert("Please Enter a task");
  } else {
    document.querySelector(".tasks").innerHTML += `<div class="task">
        <span class="taskName">${taskInput.value}</span>
        <button class="deleteBtn">X</button>
      </div>`;
    taskInput.value = "";

    DeleteTask();
    ApplyStrike();
  }
};

function DeleteTask() {
  var current_tasks = document.querySelectorAll(".deleteBtn");
  for (var i = 0; i < current_tasks.length; i++) {
    current_tasks[i].onclick = function () {
      this.parentNode.remove();
    };
  }
}

function ApplyStrike() {
  var tasknames = document.querySelectorAll(".taskName");
  for (var i = 0; i < tasknames.length; i++) {
    tasknames[i].ondblclick = function () {
      this.style.textDecoration = "line-through";
      this.style.color = "red";
    };
  }
}
