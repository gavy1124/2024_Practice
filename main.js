// 유저가 값을 입력한다.
// + 버튼을 클릭하면, 할일이 추가된다.

// 유저가 delete버튼을 누르면 할일이 삭제된다.
// 유저가 check버튼을 누르면 할일에 밑줄이 그어진다.
// 유저가 진행중 탭을 누르면, 언더바가 이동한다.
// 유저가 끝남 탭을 누르면  끝난 아이템만,   진행중탭 > 진행중 아이템만
// 유저가 전체탭을 누르면 다시 전체 아이템으로 돌아옴.




let taskInput = document.getElementById("taskInput")
let addBtn = document.getElementById("addBtn")
let taskList = []
addBtn.addEventListener("click", addTask)


function addTask() {
    let taskContent = taskInput.value;
    taskList.push(taskContent)
    console.log(taskList)
    render();
}


function render() {
    let resultHTML = '';

    for (let i = 0; i < taskList.length; i++) {
        resultHTML += `<div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                        <button>Check</button>
                        <button>Complete</button>
                    </div>
                </div>`;

    }
    document.getElementById("taskBoard").innerHTML = resultHTML;
}




