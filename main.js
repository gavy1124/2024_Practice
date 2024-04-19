let textIn = document.getElementById("textIn");
let inputBtn = document.getElementById("inputBtn");
let taskList = []


inputBtn.addEventListener("click", add);
textIn.addEventListener("focus", function () {
  textIn.value = "";
});

function add() {
  let userInput = textIn.value;

  taskList.push(userInput)
  console.log(taskList);
  render()
}

function render() {
  let ResultHTML = ``;
  for (let i = 0; i < taskList.length; i++) {
    ResultHTML += `<div class="task">
                    <div>${taskList[i]}</div>
                    <div>
                      <button>check</button>
                      <button>delete</button>
                    </div>
                  </div>`;
  }


  document.querySelector(".tasks").innerHTML = ResultHTML;
}
