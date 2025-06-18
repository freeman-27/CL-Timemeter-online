//Функции управления Clocks Element
////=================================
//Start CLOCKS ELEMENT
function ActiveElement_Clocks() {
    //change color once
    document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = "var(--maincolour)";
    document.getElementById("SmallAppClockLabel").style.color = "white";
    document.getElementById("LocalClocksLabel").style.color = "white";
    document.getElementById("LocalClocksLabel").style.fontWeight = "Bold";
    //document.getElementById("StartButtonClocksBG").setAttribute("class", "StopButtonBG");//switch drawing styles button (stop/start)
    document.getElementById("StartButtonClocks").setAttribute("class", "d-none");
    document.getElementById("StopButtonClocks").setAttribute("class", "d-block BtnStopClocksDrawing");
    //switch functions
    //document.getElementById("StartButtonClocks").setAttribute("onclick", "HideStopBtnClocks()");
    //document.getElementById("StopButtonClocks").setAttribute("onclick", "HideStopBtnClocks()");
}

//STOP CLOCKS ELEMENT
function DeactivateElement_Clocks() {
    document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = "var(--lightcolour)";
    document.getElementById("SmallAppClockLabel").style.color = "black";
    document.getElementById("LocalClocksLabel").style.color = "black";
    document.getElementById("LocalClocksLabel").style.fontWeight = "lighter";
    document.getElementById("StartButtonClocks").setAttribute("class", "d-block BtnStartDrawing");
    document.getElementById("StopButtonClocks").setAttribute("class", "d-none");
    //switch functions
    //document.getElementById("StartButtonClocks").setAttribute("onclick", "check_StartClickClocks(); BG_Randomise_Clocks()");
}