const btn_action = document.querySelector("#action")
const lb_time = document.querySelector("#timer")
const lb_state = document.querySelector("#state")
const lb_section = document.querySelector("#sections")

let counting = false

let state = "Work";

let sections = 0
let Totalsections = 4
let WorktimeM = 25
let WorktimeS = 0
let timeM = WorkTimeM
let timeS = WorkTimeS

function render(){
    lb_time.textContent = String(timeM).padStart(2, "0") + ":" + String(timeS).padStart(2, "0") 
    lb_state.textContent = state
    lb_section.textContent = sections + "/" + Totalsections
}

function count(){
    if(!counting){return}

    if(timeM == 0 && timeS == 0){
        newSection()
        render()
        setTimeout(count, 1000);
        return
    }

    if(timeS === 0){
        timeM -= 1
        timeS = 59
    }else{
        timeS -= 1
    }

    render()
    setTimeout(count, 1000);
}

btn_action.addEventListener("click", () =>{
    if(!counting){
        btn_action.innerHTML = "Stop"
        counting = true
    }else{
        btn_action.innerHTML = "Play";
        counting = false
    }
})