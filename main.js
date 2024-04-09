let userInput = document.getElementById("userInput");
let inputBtn = document.getElementById("inputBtn");
let taskList = [];
let isComplete = false;
let filterList = []
let mode = "all";
let list = []
let menu = document.querySelectorAll(".menu div")
let ev = '';

for (let i = 1; i < menu.length; i++) {
  menu[i].addEventListener("click", function(e) { 
    filter(e) 
    ev = e
  })
  console.log(menu[i])
}

function filter(e){
  mode = e.target.id

  console.log(e.target.id)
  filterList = []

  if(mode === "all"){
    render()
  }else if(mode === "ing"){
    for (let i = 0; i < taskList.length; i++) {
      if(taskList[i].isComplete === false){
        filterList.push(taskList[i])
      }      
    }
    render()
  }else if(mode === "end"){
    for (let i = 0; i < taskList.length; i++) {
      if(taskList[i].isComplete === true){
        filterList.push(taskList[i])
      }      
    }
    render()
  }


}




inputBtn.addEventListener("click", add);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function add() {
  let user = {
    id: makeId(),
    content: userInput.value,
    isComplete: false
  };

  taskList.push(user);

  console.log(taskList);

  render();
}

function render() {
  list = []
  if(mode==="all"){
    list = taskList
  }else if(mode === "ing" || mode === "end"){
    list = filterList
  }


  let resultHTML = ``;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete === true) {
      resultHTML += `
                <div class="task">
                    <div class="done">${list[i].content}</div>
                    <div>
                        <button onclick="Check('${list[i].id}')">Check</button>
                        <button onclick="del('${list[i].id}')">Delete</button>
                    </div>
                </div>
    `;
    } else {
      resultHTML += `
                <div class="task">
                    <div>${list[i].content}</div>
                    <div>
                        <button onclick="Check('${list[i].id}')">Check</button>
                        <button onclick="del('${list[i].id}')">Delete</button>
                    </div>
                </div>
    `;
    }
  }
  document.querySelector(".tasks").innerHTML = resultHTML;
}

function makeId() {
  return "_" + Math.random().toString(36).substr(2, 9);
}

function Check(id) {
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList[i].isComplete = !taskList[i].isComplete;
      break;
    }
  }
  console.log(taskList);
  render()
}


function del(id){
  for (let i = 0; i < taskList.length; i++) {
    if (taskList[i].id === id) {
      taskList.splice(i,1)
      break;
    }
  }
  console.log(taskList);
  filter(ev)
}






let underLine = document.getElementById("underLine")
menu.forEach(menu => menu.addEventListener("click",(e) => underLineIndicator(e)))

function underLineIndicator(e){
  underLine.style.left = e.currentTarget.offsetLeft + "px";
  underLine.style.width = e.currentTarget.offsetWidth + "px";
  underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight +"px";
}
