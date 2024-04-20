let textIn = document.getElementById("textIn");
let inputBtn = document.getElementById("inputBtn");
let taskList = [];
let mode = "all";
let menuArea = document.querySelectorAll(".menuArea div");
let filterList = []
let list = []
for (let i = 1; i < menuArea.length; i++) {
  menuArea[i].addEventListener("click", function (event) {
    filter(event);
  });
}

function filter(e){  
  mode = e.target.id;
  filterList = []

  console.log(mode)  
  if(mode === "all"){
    render();
  }else if(mode === "onGoing"){
    for (let i = 0; i < taskList.length; i++) {
      if(taskList[i].isComplete === false){
        filterList.push(taskList[i])
      }       
    }
    render();
  }else if(mode === "done"){
    for (let i = 0; i < taskList.length; i++) {
      if(taskList[i].isComplete === true){
        filterList.push(taskList[i])
      }       
    }    
    render();
  }
}



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
  list = []
  if(mode === "all"){
    list = taskList;
  }else if(mode === "onGoing" || mode === "done"){
    list = filterList;
  }



  let ResultHTML = ``;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete === false) {
      ResultHTML += `<div class="task">
      <div>${list[i].content}</div>
      <div>
        <button onclick="check('${list[i].id}')">check</button>
        <button onclick="del('${list[i].id}')">delete</button>
      </div>
    </div>`;
    } else {
      ResultHTML += `<div class="task">
      <div class="complete">${list[i].content}</div>
      <div>
        <button onclick="check('${list[i].id}')">check</button>
        <button onclick="del('${list[i].id}')">delete</button>
      </div>
    </div>`;
    }
  }

  document.querySelector(".tasks").innerHTML = ResultHTML;
}

function del(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i, 1);
      break;
    }
  }
  render();
}

function check(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  render();
}

function generateId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}



