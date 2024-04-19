let textIn = document.getElementById("textIn");
let inputBtn = document.getElementById("inputBtn");
let taskList = [];

inputBtn.addEventListener("click", add);
textIn.addEventListener("focus", function () {
  textIn.value = "";
});

function add() {
  let userInput = {
    id: generateId(),
    content: textIn.value,
    isComplete: false,
  };
  taskList.push(userInput);
  render();
}

function render() {
  let ResultHTML = ``;
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].isComplete === false) {
      ResultHTML += `<div class="task">
      <div>${taskList[i].content}</div>
      <div>
        <button onclick="check('${taskList[i].id}')">check</button>
        <button onclick="del('${taskList[i].id}')">delete</button>
      </div>
    </div>`;
    } else {
      ResultHTML += `<div class="task">
      <div class="complete">${taskList[i].content}</div>
      <div>
        <button onclick="check('${taskList[i].id}')">check</button>
        <button onclick="del('${taskList[i].id}')">delete</button>
      </div>
    </div>`;
    }
  }

  document.querySelector(".tasks").innerHTML = ResultHTML;
}

function del(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i,1)
      break;
    }
  }
  render()
}


function check(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render()
}


function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}
