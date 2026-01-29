const auto_start = document.querySelector("#auto-start")
const min = document.querySelector("#min")
const cycles = document.querySelector("#pomodoros")
const min_break = document.querySelector("#min-break")
const save = document.querySelector("#save")

save.addEventListener("click", () =>{
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
    Totalsections = parseInt(cycles.value)
    auto_start_timer = auto_start.checked
    
    alert("Configurações salvas!")
})
