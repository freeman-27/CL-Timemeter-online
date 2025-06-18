//Timemeter Element - Event Functions
////===========================================
//START Functions Customize
function ActivateElement_Timemeter() {
    //change color once
    document.getElementById("Timemeter_ContainerBackgr").style.backgroundColor = "olivedrab";
    document.getElementById("SmallAppTimemeterLabel").style.color = "white";
    document.getElementById("MainTimeMeterLabel").style.color = "white";
    document.getElementById("MainTimeMeterLabel").style.fontWeight = "Bold";
    //document.getElementById("StartButtonTimemeterBG").setAttribute("class", "StopButtonBG");//switch drawing styles button (stop/start)
    document.getElementById("StartButtonTimemeter").setAttribute("class", "d-none");
    document.getElementById("PauseButtonTimemeter").setAttribute("class", "d-block BtnPauseDrawing");
    document.getElementById("StopButtonTimemeter").setAttribute("class", "d-block BtnStopDrawing");
    //switch function
    //document.getElementById("StartButtonTimemeterBG").setAttribute("onclick", "HideStopBtnTimemeter()");
}



//PAUSE Function Customize (Timemeter Only)
function PauseActivate_StyleElementTimemeter() {
    //TO DO
    //if not null do function fPause + save current variables //TO DO)
    //if zero(null) - not avaliable
    document.getElementById("Timemeter_ContainerBackgr").style.backgroundColor = "#888888";
    document.getElementById("SmallAppTimemeterLabel").style.color = "#444444";
    document.getElementById("MainTimeMeterLabel").style.color = "#444444"; 
    document.getElementById("PauseButtonTimemeter").setAttribute("class", "d-none");
    document.getElementById("PauseActivated_ButtonTimemeter").setAttribute("class", "d-block BtnPauseDrawing");
}
function PauseDeactivate_StyleElementTimemeter() {
    document.getElementById("PauseActivated_ButtonTimemeter").setAttribute("class", "d-none");
    document.getElementById("PauseButtonTimemeter").setAttribute("class", "d-block BtnPauseDrawing");
    document.getElementById("SmallAppTimemeterLabel").style.color = "white";
    document.getElementById("MainTimeMeterLabel").style.color = "white";
}
// ========
//STOP Functions Customize
function DeactivateElement_Timemeter() {
    document.getElementById("Timemeter_ContainerBackgr").style.backgroundColor = "var(--lightcolour)";
    document.getElementById("SmallAppTimemeterLabel").style.color = "black";
    document.getElementById("MainTimeMeterLabel").style.color = "black";
    document.getElementById("MainTimeMeterLabel").style.fontWeight = "lighter";
    document.getElementById("StartButtonTimemeter").setAttribute("class", "d-block BtnStartDrawing");
    document.getElementById("PauseButtonTimemeter").setAttribute("class", "d-none");
    document.getElementById("PauseActivated_ButtonTimemeter").setAttribute("class", "d-none BtnPauseDrawing");
    document.getElementById("StopButtonTimemeter").setAttribute("class", "d-none");
    
    //switch functions
    //document.getElementById("StartButtonTimemeterBG").setAttribute("onclick", "StartZeroTimemeter(); BG_Randomise_Timemeter()");
}