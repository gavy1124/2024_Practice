




let h_underLine = document.getElementById("h_underLine")
let h_menuArea = document.querySelectorAll(".h_menuArea a")

h_menuArea.forEach(menu => menu.addEventListener("click", (e) => h_indicator(e)))

function h_indicator(e){
    // console.log(1)
    h_underLine.style.left = e.currentTarget.offsetLeft + "px";
    h_underLine.style.width = e.currentTarget.offsetWidth + "px";
    h_underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
    console.log(h_underLine.style.left)

}





















let v_underLine = document.getElementById("v_underLine")
let v_menuArea2 = document.querySelectorAll("nav:nth-child(2) a")
console.log(v_underLine)
console.log(v_menuArea2)


v_menuArea2.forEach(menu => menu.addEventListener("click", (e) => v_indicator(e)))


function v_indicator(e){
    v_underLine.style.left = e.currentTarget.offsetLeft + "px";
    v_underLine.style.width = e.currentTarget.offsetWidth + "px";
    v_underLine.style.top = e.currentTarget.offsetTop + e.currentTarget.offsetHeight + "px";
}

