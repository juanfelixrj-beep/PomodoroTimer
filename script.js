const btn_action = document.querySelector("#action")
const lb_time = document.querySelector("#timer")
const lb_state = document.querySelector("#state")
const lb_section = document.querySelector("#sections")
const show_configs = document.querySelector("#configs")
let configs_panne = document.querySelector("#content-configs")

let counting = false

let state = "Work";

let show_options = false

let sections = 0
let Totalsections = 4
let WorkTimeM = 25
let WorkTimeS = 0
let BreakTimeM = 5
let BreakTimeS = 0
let LongBreakTimeM = 30
let LongBreakTimeS = 0
let timeM = WorkTimeM
let timeS = WorkTimeS

let auto_start_timer = false

function updateConfig(newWorkTimeM, newBreakTimeM, newLongBreakTimeM, newTotalSections){
    WorkTimeM = newWorkTimeM
    BreakTimeM = newBreakTimeM
    LongBreakTimeM = newLongBreakTimeM
    Totalsections = newTotalSections
    sections = 0
    state = "Work"
    timeM = WorkTimeM
    timeS = WorkTimeS
    counting = false
    btn_action.innerHTML = "Play"
    render()
}

render()

function render(){
    lb_time.textContent = String(timeM).padStart(2, "0") + ":" + String(timeS).padStart(2, "0") 
    lb_state.textContent = state
    lb_section.textContent = sections + "/" + Totalsections
}

function nextState(){
    if(state == "Work"){
        sections += 1

        if (sections >= Totalsections){
            state = "Long Break"
            timeM = LongBreakTimeM
            timeS = LongBreakTimeS
            sections = 0
        }else{
            state = "Short Break"
            timeM = BreakTimeM
            timeS = BreakTimeS
        }
    }else if(state == "Short Break"){
        state = "Work"
        timeM = WorkTimeM
        timeS = WorkTimeS        
    }else if(state == "Long Break"){
        state = "Work"
        timeM  = WorkTimeM
        timeS = WorkTimeS
    }
    render()
}

function count(){
    if(!counting){return}

    if(timeM == 0 && timeS == 0){
        nextState()
        render()
        if(auto_start_timer){
            setTimeout(count, 1000)
        }
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
        count()
    }else{
        btn_action.innerHTML = "Play";
        counting = false
    }
})

show_configs.addEventListener("click", () =>{
    if(!show_options){
        show_options = true
        configs_panne.style.visibility = "visible"
    }else{
        show_options = false
        configs_panne.style.visibility = "hidden"
    }

})