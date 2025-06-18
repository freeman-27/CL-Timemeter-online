//Служебные функции секундомера
////===========================

let TimemeterReturn;
var TimemeterGetFromDate;
var getStartEventTimemeter;
var getStopEventTimemeter;
let ZeroTimemeterStringReturn;

//задать нулевые значения
var ZeroTimeLabel = new Date();
ZeroTimeLabel.setSeconds("00");
ZeroTimeLabel.setMinutes("00");
ZeroTimeLabel.setHours("00");
//ZeroTimeLabel.setSeconds("11");
//ZeroTimeLabel.setMinutes("11");
//ZeroTimeLabel.setHours("11");

//задать переменную сравнения для цикла
var CheckTime = new Date();
SetCheckTimeValue = CheckTime.setSeconds("59");
CheckTimeValue = CheckTime.getSeconds();
//счетчик цикла
var i;
var TimeCounterS = Date();
CounterZeroValue = TimeCounterS.setSeconds("00");
TimeCounter = TimeCounterS.getSeconds();
//ZeroTimemeterStringReturn = ZeroTimeLabel;

function StartZeroTimemeter() {
    //установить интервал
    setInterval(StartZeroTimemeter, 1000);
    //test string
    //document.getElementById("MainTimeMeterLabel").innerHTML = ZeroTimeLabel.getHours() + ":" + ZeroTimeLabel.getMinutes() + ":" + ZeroTimeLabel.getSeconds();
    document.getElementById("MainTimeMeterLabel").innerHTML = TimeCounter + ":" + CheckTimeValue;



    //testIncr = "01"; //TO DO 2values summ => to string
    //while (TimeCounter < CheckTimeValue) {
        
    //    document.getElementById("MainTimeMeterLabel").innerHTML = ":" + 'newSet:' + newSet;//+ '<br>oneSecPlus:'; //+ oneSecPlus;
    //    //ZeroTimeLabel.setSeconds(oneSecPlus);
    //    ///ZeroTimeLabel.setSeconds(testIncr);
    //    newSet++;
    //    //oneSecPlus++;
    //    //testIncr++;
    //    i++;
    // }
}

//function DisplayTimemeter() {
//    ZeroTimemeterStringReturn = "00-00-00";
//    if (getStartEventTimemeter = true) {
//        document.getElementById("LocalTimemeterLabel").innerHTML = TimemeterStringReturn;
//    } else if (getStopEventTimemeter = true) {
//        ZeroTimemeterStringReturn = "00-00-00";
//        document.getElementById("LocalTimemeterLabel").innerHTML.replace = ZeroTimeStringReturn;
//    }
//}