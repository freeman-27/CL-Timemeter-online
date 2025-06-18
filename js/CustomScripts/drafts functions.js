
//====================================================================================================

//document.getElementById("StopButtonCanvasClocks").addEventListener("click", Cl_Int());
//function Cl_Int() {
//    clearInterval(internalInterval);
//}


//if (getStartEvent = true) {
//    function setInterv1() {
//        let internalInterval = setInterval(DisplayLocalTime, 1000);
//        return internalInterval;
//    }
//    DisplayLocalTime();
//    if (getStopEvent = true) {
//        clearInterval(internalInterval);
//        DisplayLocalTime();
//    }
//}



//else if (getStopEvent = true) {
//    Cl_Int(internalInterval);

//    DisplayLocalTime();
//}
//==============================================================================================================

setInterval(StartTimemeter, 1000);
function StartTimemeter() {

    //Output current time
    var Current_timeAll = new Date();

    var custom_seconds = new Date();
    var custom_minutes = new Date();
    var custom_hours = new Date();
    custom_seconds.setSeconds("01");
    custom_minutes.setMinutes("00");
    custom_hours.setHours("00");

    let s = custom_seconds;
    let m = custom_minutes;
    let fullMinute = new Date().setSeconds("59"); //one minute
    //let Compare_with_S = new Date().setSeconds("59"); //one minute
    let Compare_with_M = new Date().setMinutes("05") //time limit
    //let fullMinute = custom_seconds.getSeconds("59");
    //=====================================================================
    //document.getElementById("MainTimeLabel").innerHTML = Set_time.getHours() + ":" + Set_time.getMinutes() + ":" + Set_time.getSeconds();
    //while (m <= Compare_with_M) {
    //    document.getElementById("MainTimeLabel").innerHTML = custom_hours.getHours() + ":" + custom_minutes.getMinutes() + ":" + custom_seconds.getSeconds();
    //    s++;
    //    if (s == fullMinute) {
    //        custom_minutes.setMinutes("01");
    //        document.getElementById("MainTimeLabel").innerHTML = custom_hours.getHours() + ":" + custom_minutes.getMinutes() + ":" + custom_seconds.getSeconds();
    //    }
    //}
    //=================================================================

    ////


    //var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    //var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    //var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    const CustomTimeSet = new Date();
    CustomTimeSet.setHours("00");
    CustomTimeSet.setMinutes("00");


    //document.getElementById("MainTimeLabel").innerHTML = custom_hours.toLocaleTimeString() + ":" + custom_minutes.toLocaleTimeString() + ":" + custom_seconds.toLocaleTimeString();
    document.getElementById("MainTimeLabel").innerHTML = CustomTimeSet.toLocaleTimeString();



    ////Create line element
    var AddElement = document.createElement("hr");
    document.getElementById("AppContainerBackgr").appendChild = AddElement;

    //change color once
    document.getElementById("AppContainerBackgr").style.backgroundColor = "green";



    //document.getElementsByClassName("CustomBG").item = ;

    //to do for cucle - colour
    //var Random_Color = new Random();


}