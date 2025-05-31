function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();
  
    if (taskText === "") {
      alert("Please enter a task.");
      return;
    }
  
    const li = document.createElement("li");
    li.textContent = taskText;
  
    // Toggle complete on click
    li.addEventListener("click", function () {
      li.classList.toggle("completed");
    });
  
    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.onclick = () => li.remove();
  
    li.appendChild(deleteBtn);
  
    document.getElementById("taskList").appendChild(li);
    taskInput.value = "";
  }