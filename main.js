let userInput = document.getElementById("userInput");
let userInputBtn = document.getElementById("userInputBtn");
let taskList = [];
let resultHTML = ``;
let mode = "all";
let filterList = [];
let list = [];
let ev = '';


let menuArea = document.querySelectorAll(".menuArea div");
// 메뉴버튼

for (let i = 1; i < menuArea.length; i++) {
    menuArea[i].addEventListener("click", function (event) {
        filter(event);
        ev = event;
        // console.log(event.target.id)
    });
}


// menuArea.forEach((menuArea) =>
//   menuArea.addEventListener("click", (e) => {
//     filter(e);
//   })
// );

function filter(e) {
  mode = e.target.id;
  //   console.log(mode);
  filterList = [];

  //all일때
  if (mode === "all") {
    render();

    // ing 일때
  } else if (mode === "ing") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === false) {
        filterList.push(taskList[i]);
      }
    }
    render();
    console.log("진행중", filterList);
    // ing 일때
  } else if (mode === "done") {
    for (let i = 0; i < taskList.length; i++) {
      if (taskList[i].isComplete === true) {
        filterList.push(taskList[i]);
      }
    }
    render();
  }

  console.log(filterList);
}

userInputBtn.addEventListener("click", add);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function render() {
  list = [];
  console.log("render함수 mode : ", mode);


 if(mode==="all"){
    list = taskList
 }else if(mode === "ing" || mode === "done"){
    list = filterList
 }

  resultHTML = ``;
  for (let i = 0; i < list.length; i++) {
    if (list[i].isComplete === true) {
      resultHTML += `<div class="list">
                    <div class="done">${list[i].content}</div>
                        <div>
                            <button onclick="check('${list[i].id}')">check</button>
                            <button onclick="del('${list[i].id}')">delete</button>
                        </div>
                    </div>`;
    } else {
      resultHTML += `<div class="list">
                    <div>${list[i].content}</div>
                        <div>
                            <button onclick="check('${list[i].id}')">check</button>
                            <button onclick="del('${list[i].id}')">delete</button>
                        </div>
                    </div>`;
    }
  }

  document.querySelector(".lists").innerHTML = resultHTML;
}
function add() {
  let userText = {
    id: generateID(),
    content: userInput.value,
    isComplete: false,
  };

  taskList.push(userText);

  render();
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
//   render();
  filter(ev)
}
