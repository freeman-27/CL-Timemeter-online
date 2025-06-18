//Служебные функции секундомера
////===========================
//переменные стартовых собитий
var GetClickStartTimemeter;
var GetClickStopTimemeter;
var StartTM;
var StopTM;

//var getStartEventTimemeter;
//var getStopEventTimemeter;
//-
//let TimemeterReturn;
//var TimemeterGetFromDate;

// нулевые значения времени
var runingSeconds = 0; //max 59
var v_Seconds = new Date();
var runingMinutes = 0; //max 59 
var v_Minutes = new Date();
var runingHours = 0; //max 23
var v_Hours = new Date();

//счетчики вызова F_Seconds, F_Minutes, F_Hours
var callCounter_S;
var callCounter_M;
var callCounter_H;

//временные интервалы для функций
var setFunctionsIntervals;

// отметки времени
//var OneMinute = new Date();
//var fullMinute = OneMinute.setSeconds("18");

//проверка вызова функций секундомера
let CoreFunc;
let CoreFuncEvent = true;
let CoreFuncCall;
let CoreFunctionsEvents; //для вызова нескольких функций одновременно за одно событие
let CallTimerCoreFunc;

//проверка событий запуска-остановки, задание начальных значений времмени
function CheckStartClick_Timemeter() {
    GetClickStartTimemeter = true;
    GetClickStopTimemeter = false;

    setInterval(CheckStartClick_Timemeter, 1000);

    //setFunctionsIntervals = (TimemeterMainF, 1000);
    //setTimemeterCoreInterval = (TimemeterCore, 1000);   

    callCounter_S = 0;
//    setInterval(F_Seconds, F_Minutes, F_Hours, 1000);
//    setInterval(testSeconds, 1000);
//    //setInterval(StartTimemeterTest1); !!!!!!!!!!!!!!!!!!
    //runingSeconds = 1;
//    runingMinutes = 0;
//    runingHours = 0;
//    callCounter_S = 1;
//    //StartTimemeterTest1(); !!!!!!!!!!!!!
//    TestSeconds();
    //    return GetClickStartTimemeter, runingSeconds, runingMinutes, runingHours, callCounter_S;

    CallTimerOutputFunc = addEventListener("click", TimemeterOutput);
    do {
        TimemeterMainF();
    }
    while (GetClickStopTimemeter == false);

    return GetClickStartTimemeter, GetClickStopTimemeter, setFunctionsIntervals;
}
function CheckStopClick_Timemeter() {
    GetClickStartTimemeter = false;
    GetClickStopTimemeter = true;
    clearInterval(setFunctionsIntervals);
    TimemeterMainF();
    return GetClickStopTimemeter, GetClickStartTimemeter, setFunctionsIntervals;
}


//функции возвращающие значения единиц времени: дни/часы/минуты/секунды/м.сек.
//_______________________________________________________________________

function F_Seconds() {
    //while (runingMinutes < 10)
    runingSeconds = 1;
    do {
        runingSeconds += 1;
        v_Seconds.setSeconds(runingSeconds);
        return v_Seconds, runingSeconds;
    }
    while (GetClickStopTimemeter != true)
        
    //v_Seconds.setSeconds("01");
}
function F_Minutes() {
    //if (runingSeconds = 59) {
    //    runingMinutes+=1;
    //}

    //v_Minutes.setMinutes(runingMinutes);    
    v_Minutes.setMinutes("30");
    return v_Minutes, runingMinutes;
}
function F_Hours() {
    //v_Hours.setHours(runingHours);
    v_Hours.setHours("23");
    return v_Hours, runingHours;
}

function TimemeterOutput() {
    document.getElementById("MainTimeMeterLabel").innerHTML = v_Hours.getHours() + ":" + v_Minutes.getMinutes() + ":" + v_Seconds.getSeconds();
    //CoreFuncCall.addEventListener.call.TimemeterCore();
    CallTimerCoreFunc.addEventListener("click", TimemeterMainF);
    //TimemeterMainF().TimemeterCore();
}

function TimemeterCore() {
    v_Hours.setHours("00");
    v_Minutes.setMinutes("00");
    //runingSeconds_NewV = runingSeconds + 1; 
    v_Seconds.setSeconds(runingSeconds);
    //callCounter_S++; //для счетчика вызова F_Seconds
    runingSeconds+=1;
    //******************************************************************************************************//
    ////minutes cycle========================================
    //if (runingSeconds = 59) {
    //    var runingMinutesNewV = new Date();
    //    var setZeroMinutes = 0;
    //    runingMinutesNewV.setMinutes(setZeroMinutes);
    //    runingMinutesNewV += 1;
    //    v_Minutes.setMinutes(runingMinutesNewV);
    //}
    ////hours cycle==========================================
    //if (runingMinutes = 59) {
    //    var runingHoursNewV = new Date();
    //    var setZeroHoures = 0;
    //    runingHoursNewV.setMinutes(setZeroHoures);
    //    runingHoursNewV += 1;
    //    v_Hours.setMinutes(runingHoursNewV);
    //}
    ////day cycle==========================================
    //if (runingHours = 23) {
    //    clearInterval(setFunctionsIntervals)
    //}
    ////Time Limits(minutes/hours/days)//todo==========================================
    //if (runingHours = 23) {
    //    clearInterval(setFunctionsIntervals)
    //}
    ////Time Limits(test)==========================================
    //if (runingHours = 2) {
    //    clearInterval(setFunctionsIntervals)
    //}
    //******************************************************************************************************//

    //CoreFunc = addEventListener.call.TimemeterCore();
    TimemeterOutput(); // !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
    return runingSeconds, v_Hours, v_Minutes, v_Seconds, CoreFunc;
    //return callCounter_S, runingSeconds, v_Hours, v_Minutes, v_Seconds;
}

// главная функция секундомера TO DO
function TimemeterMainF() {
    //setInterval(F_Seconds, F_Minutes, F_Hours, 1000);
    //setInterval(testSeconds, 1000);
    //document.getElementById("StartButtonTimemeter").addEventListener.click = true;
    //setTimemeterCoreInterval = (TimemeterCore, 1000);   

    if (GetClickStartTimemeter == true) {
        do {
            TimemeterCore();
            TimemeterOutput();
        }
        //callCounter_S = 1; //для счетчика вызова F_Seconds

        //if (CoreFuncEvent == CoreFunc) {
        //    function TimemeterOutput() {
        //        document.getElementById("MainTimeMeterLabel").innerHTML = v_Hours.getHours() + ":" + v_Minutes.getMinutes() + ":" + v_Seconds.getSeconds();
        //        addEventListener.call.TimemeterCore();
        //    }
        //    TimemeterOutput();
        //}
        while (GetClickStartTimemeter != false);
        
    } else if (GetClickStopTimemeter == true) {
        function setEmptyTimemeter() {
            clearInterval(setFunctionsIntervals);
            document.getElementById("MainTimeMeterLabel").innerHTML = "00-00-00";
        }
        setEmptyTimemeter();
    }
}