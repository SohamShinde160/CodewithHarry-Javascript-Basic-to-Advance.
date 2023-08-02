let addbtn = document.getElementById("add");
let i = 1;

let addTodo = () => {
  let text = document.getElementById("task").value;
  let desc = document.getElementById("desc").value;

  if (text !== "" && desc !== "") {
    document.getElementById("notodo").innerHTML = "";

    // Store task as key and description as value in local storage
    localStorage.setItem(text, desc);

    let todosContainer = document.createElement("div");
    todosContainer.classList.add("todos-container");

    let taskDescContainer = document.createElement("div");
    taskDescContainer.classList.add("task-desc");

    let taskElement = document.createElement("p");
    taskElement.innerHTML = `<b>Task:</b> ${text}`;

    let descElement = document.createElement("p");
    descElement.innerHTML = `<b>Desc:</b> ${desc}`;

    let deleteBtn = document.createElement("button");
    deleteBtn.type = "button";
    deleteBtn.classList.add("delet");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", (e) => {
      let taskText = taskElement.textContent.trim();

      // Remove task and its description from local storage
      localStorage.removeItem(taskText);

      todosContainer.remove();
    });

    taskDescContainer.appendChild(taskElement);
    taskDescContainer.appendChild(descElement);

    todosContainer.appendChild(taskDescContainer);
    todosContainer.appendChild(deleteBtn);

    document.querySelector(".left-cont").appendChild(todosContainer);

    document.getElementById("task").value = "";
    document.getElementById("desc").value = "";
  } else {
    alert("Please enter some text!");
  }
};

addbtn.addEventListener("click", addTodo);
