let userInput = document.getElementById("userInput");
let userInputBtn = document.getElementById("userInputBtn");
let taskList = [];
let resultHTML =``;
userInputBtn.addEventListener("click", add);
userInput.addEventListener("focus", function () {
  userInput.value = "";
});

function add() {
  let userText = userInput.value;
  taskList.push(userText);

  console.log(taskList);
  render()
}

function render() {
    resultHTML =``;
  for (let i = 0; i < taskList.length; i++) {
    resultHTML += `<div class="list">
        <div>${taskList[i]}</div>
            <div>
                <button>check</button>
                <button>delete</button>
            </div>
        </div>`;
  }

  document.querySelector(".lists").innerHTML = resultHTML;
}
