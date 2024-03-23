// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.
// (객체개념)
// 유저가 check버튼을 누르면 할일에 밑줄이 그어진다.




// 유저가 delete버튼을 누르면 할일이 삭제된다.

// 유저가 진행중 탭을 누르면, 언더바가 이동한다.
// 유저가 끝남 탭을 누르면  끝난 아이템만,   진행중탭 > 진행중 아이템만
// 유저가 전체탭을 누르면 다시 전체 아이템으로 돌아옴.

let list = []
let taskInput = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = []
let tabs = document.querySelectorAll(".menuArea div")
let mode = 'all';
let filterList = [];
let ev ='';





//menu버튼
function filter(event) {
    
    mode = event.target.id;
    
    
    filterList = []
    if (mode === "all") {
        render();


    } else if (mode === "onGoing") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === false) {
                filterList.push(taskList[i])
            }
        }

    } else if (mode === "done") {
        for (let i = 0; i < taskList.length; i++) {
            if (taskList[i].isComplete === true) {
                filterList.push(taskList[i])
            }
        }
    }
    render()
}



// 화면출력 함수
function render() {
    //내가선택한 탭에따라서 리스트를 달리 보여준다.
    list = []
    if (mode === 'all') {
        list = taskList;
    } else if (mode === 'onGoing' || mode === 'done') {
        list = filterList;
    }

    let resultHTML = '';
    for (let i = 0; i < list.length; i++) {

        if (list[i].isComplete == true) {
            resultHTML += `<div class="task">
            <div class = "taskDone">${list[i].taskContent}</div>
            <div>
                <button onClick="toggleComplete('${list[i].id}')">Check</button>
                <button onClick="deleteTask('${list[i].id}')">delete</button>
            </div>
        </div>`;
        } else {
            resultHTML += `<div class="task">
            <div>${list[i].taskContent}</div>
            <div>
                <button onClick="toggleComplete('${list[i].id}')">Check</button>
                <button onClick="deleteTask('${list[i].id}')">delete</button>
            </div>
        </div>`;
        }
    }
    document.getElementById("taskBoard").innerHTML = resultHTML;
    //console.log(taskList)
}
// Delete 함수
function deleteTask(id) {
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList.splice(i, 1)
        }
    }
    //render()
    filter(ev);
}






// +버튼
function addTask() {
    //let userTask = taskInput.value;
    let task = {
        id: randomIdGenerate(),
        taskContent: taskInput.value,
        isComplete: false
    }
    taskList.push(task)
    render();
}







// 각 task의 check버튼함수
function toggleComplete(id) {
    //console.log(id)
    for (let i = 0; i < taskList.length; i++) {
        if (taskList[i].id == id) {
            taskList[i].isComplete = !taskList[i].isComplete;
            break;
        }

    }
    console.log(taskList)
    render()
    //filter();
}


// 객체의 id만들기
function randomIdGenerate() {
    return '_' + Math.random().toString(36).substr(2, 9);
}



// + 클릭 리스너
addBtn.addEventListener("click", addTask)
taskInput.addEventListener("focus", function () { taskInput.value = '' })

for (let i = 1; i < tabs.length; i++) {
    tabs[i].addEventListener("click", function (event) {
        filter(event)
        ev = event;
    })

}


