const btn_action = document.querySelector("#action")
const lb_time = document.querySelector("#timer")
const lb_state = document.querySelector("#state")
const lb_section = document.querySelector("#sections")
const show_configs = document.querySelector("#configs")
const state_panne = document.querySelector(".show-state")
const form_options = document.querySelector("#form-options")
const audio = new Audio("assets/alarm.mp3")
const configs_panne = document.querySelector("#content-configs")

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

function setStateStyle(){
    let state_show = "work"
    if(state == "Work"){
        state_show = "work"
    }else if(state == "Short Break"){
        state_show = "break"
    }else if(state == "Long Break"){
        state_show = "long-break"
    }
    state_panne.className = "show-state " + state_show
}

function nextState(){
    if(state == "Work"){
        sections += 1

        if (sections >= Totalsections){
            state = "Long Break"
            timeM = LongBreakTimeM
            timeS = LongBreakTimeS
            sections = 0
            audio.volume = 0.5
            audio.play()
        }else{
            state = "Short Break"
            timeM = BreakTimeM
            timeS = BreakTimeS
            audio.volume = 0.5
            audio.play()
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
    setStateStyle()
    render()
}

function count(){
    if(!counting){return}

    if(timeM == 0 && timeS == 0){
        if(auto_start_timer){
            setTimeout(count, 1000)
        }else{
            btn_action.innerHTML = "Play"
            counting = false
        }
        nextState()
        render()
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
        configs_panne.classList.toggle("open")


})

form_options.addEventListener("submit", e =>{
    e.preventDefault()
    if(cycles.value == "" || min_break.value == "" || min.value == ""){
        alert("You need to fill all the inputs")
        return
    }
    if(counting){
        alert("Stop the counter to change settings")
        return
    }

    // Atualizar configurações do script.js
    WorkTimeM = parseInt(min.value)
    BreakTimeM = parseInt(min_break.value)
    LongBreakTimeM = parseInt(min_longbreak.value)
    Totalsections = parseInt(cycles.value)
    auto_start_timer = auto_start.checked
    render()
    updateConfig(WorkTimeM, BreakTimeM, LongBreakTimeM, Totalsections)

    alert("Configurações salvas!")
})