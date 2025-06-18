//Служебные функции елемента Clocks
////================================

let LocalTimeReturn;
var LocalTimeGetFromDate;
var getStartEvent;
var getStopEvent;
let ZeroTimeStringReturn;

//интервалы вызова функций 
let internalInterval;
var setFunctionsIntervals;
var CustomiseFunctionsIntervals;

//проверить нажатие - старт
function check_StartClickClocks() {
    internalInterval = setInterval(DisplayLocalTime, 1000);
    //CustomiseFunctionsIntervals = setInterval(call_BG_RandomiseFunc_ForClocks, 10000); // интервал 10 секунд
    getStartEvent = true;
    getStopEvent = false;
    DisplayLocalTime(); // Main
    return internalInterval, getStartEvent, getStopEvent, internalInterval, CustomiseFunctionsIntervals;
}
//проверить нажатие - стоп
function check_StopClickClocks() {
    clearInterval(internalInterval);
    getStopEvent = true;
    getStartEvent = false;
    DisplayLocalTime(); // Main
    return internalInterval, getStopEvent, getStartEvent; //LocalTimeReturn;
}

//CoreFunction
//записать локальное время в переменную 
function GetLocalTime() {
    LocalTimeGetFromDate = new Date();
    LocalTimeReturn = LocalTimeGetFromDate.toLocaleTimeString();
    return LocalTimeReturn;
}

//MAIN Function
// отобразить локальное время, после check_StartClick() или check_StopClick()
function DisplayLocalTime() {
    if (getStartEvent == true) {
        GetLocalTime(); // CoreFunction
        document.getElementById("LocalClocksLabel").innerHTML = LocalTimeReturn;
    } else if (getStopEvent == true) {
        ZeroTimeStringReturn = "XX:XX:XX";
        function setEmptyValue() {
            document.getElementById("LocalClocksLabel").innerHTML = ZeroTimeStringReturn;
        }
        setEmptyValue();
    }
}

//DO test смена фона каждые 10 сек, как опция расширения. (функция включения выключения доп. опции) 
////Вызов внешних функций
//function call_BG_RandomiseFunc_ForClocks() { 
//    do {
//        BG_Randomise_Clocks();
//    } while (getStopEvent == false);
//}