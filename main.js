let textIn = document.getElementById("textIn");
let inputBtn = document.getElementById("inputBtn");
let taskList = [];
let mode = "all";
let menuArea = document.querySelectorAll(".menuArea div");
let filterList = []
let list = []
let underLine = document.getElementById("underLine")


for (let i = 1; i < menuArea.length; i++) {
  menuArea[i].addEventListener("click", function (event) {
    filter(event);
    mode = event;
    console.log(menuArea[i])
    // underLine.style.left = event.currentTarget.offsetLeft + "px";
    // underLine.style.width = event.currentTarget.offsetWidth + "px";
    // underLine.style.top = event.currentTarget.offsetTop + event.currentTarget.offsetHeight + "px";
  });
}

function filter(e){  
  mode = e.target.id;
  filterList = []

  // console.log(mode)  
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
  mode = "all"
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
  // render();
  filter(mode)
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





let menuArea2 = document.querySelectorAll(".menuArea div")
console.log(menuArea2)
menuArea2.forEach(menu=>menu.addEventListener("click", (e)=> f_under(e)))
// v_menuArea2.forEach(menu => menu.addEventListener("click", (e) => v_indicator(e)))

function f_under(e){
  underLine.style.left = e.currentTarget.offsetLeft + "px";
  underLine.style.width = e.currentTarget.offsetWidth + "px";
  underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}