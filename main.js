let inputText = document.getElementById("inputText");
let addBtn = document.getElementById("addBtn");
let taskList = [];
let ResultHTML = ``;
let filterList = [];
let mode = "All";
let list = [];
let ev = '';
let menuArea = document.querySelectorAll(".menuArea div");
menuArea.forEach((item) => item.addEventListener("click", (e) => menu(e)));

function menu(e) {
  filter(e);
  ev = e;
}

function filter(e) {
  filterList=[]
  mode = e.target.id;
  if (mode === "All") {
    render();
  } else if (mode === "onGoing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === false) {
        filterList.push(taskList[i]);
      }
    }
    render();
  } else if (mode === "Done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }
}

addBtn.addEventListener("click", add);
inputText.addEventListener("focus", function () {
  inputText.value = "";
});

function add() {
  let userText = {
    id: generateID(),
    content: inputText.value,
    isComplete: false,
  };

  taskList.push(userText);
  mode ='All'
  render();
  

}

function render() {
  if (mode === "All") {
    list = taskList;
  } else if (mode === "onGoing" || mode === "Done") {
    list = filterList;
  }

  ResultHTML = ``;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete === true) {
      ResultHTML += `
                      <div class="task">
                        <div id="end">${list[i].content}</div>
                        <div>
                        <button onclick="check('${list[i].id}')">check</button>
                        <button onclick="del('${list[i].id}')">delete</button>
                        </div>
                      </div>
                    `;
    } else {
      ResultHTML += `
                      <div class="task">
                        <div>${list[i].content}</div>
                        <div>
                        <button onclick="check('${list[i].id}')">check</button>
                        <button onclick="del('${list[i].id}')">delete</button>
                        </div>
                      </div>
                    `;
    }
  }

  document.querySelector(".tasks").innerHTML = ResultHTML;
}

function generateID() {
  return "_" + Math.random().toString(36).substr(2, 9);
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

function del(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i, 1);
      break;
    }
  }
  // render();
  filter(ev)
}


let underLine = document.getElementById("underLine")

menuArea.forEach(item=>item.addEventListener("click", (e) => under(e)))

function under(e){


  underLine.style.left = e.currentTarget.offsetLeft + "px";
  underLine.style.width = e.currentTarget.offsetWidth + "px";
  underLine.style.top = e.currentTarget.offsetHeight + e.currentTarget.offsetTop + "px";


}
