let userInput = document.getElementById("userInput");
let inputBtn = document.getElementById("inputBtn");
let taskList = [];
let isComplete = false;

inputBtn.addEventListener("click", add);
userInput.addEventListener("focus", function () {
    userInput.value = "";
});

function add() {
    let user = {
        
      id : makeId(),
      content : userInput.value,
      isComplete : false
    }


    taskList.push(user);
    
    console.log(taskList);

  render()
}

function render() {
    let resultHTML = ``;
    for (let i = 0; i < taskList.length; i++) {
      
    resultHTML += `
                <div class="task">
                    <div>${taskList[i].content}</div>
                    <div>
                        <button>Check</button>
                        <button>Delete</button>
                    </div>
                </div>
    `;
}
document.querySelector(".tasks").innerHTML = resultHTML;

}


function makeId(){
    return '_' + Math.random().toString(36).substr(2, 9);
}