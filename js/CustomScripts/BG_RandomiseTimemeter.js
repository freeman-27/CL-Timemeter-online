//Функции random background colour for Timemeter ELEMENT
//==================================
//START Timemter ELEMENT
function BG_Randomise_Timemter() {
    //Случайные значения для подстановки в BackgroundColor по два значения в формат RGB
    var Red_Ch = Math.floor(Math.random() * 200) + 1;
    var Green_Ch = Math.floor(Math.random() * 200) + 1;
    var Blue_Ch = Math.floor(Math.random() * 200) + 1;

    //объединение значений в формат RGB
    var Random_BGColour_RGB = "rgb(" + Red_Ch + "," + Green_Ch + "," + Blue_Ch + ")"; //RGB значения от 200 до 0;

    //задать фон по случайному значению:
    //document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = setHexColourBG;
    //document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = HexColour_Random;
    document.getElementById("Timemeter_ContainerBackgr").style.backgroundColor = Random_BGColour_RGB;


    //===================== проверка значений (вывод)
    //var Test_Random_BGColour_RGB = document.createElement("p");
    //Test_Random_BGColour_RGB.innerHTML = Random_BGColour_RGB;
    //document.getElementById("Clocks_ContainerBackgr").appendChild(Test_Random_BGColour_RGB);

    //вывод в форму
    document.getElementById("Label_Background_Value").innerHTML = Random_BGColour_RGB;

    //change color once
    //document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = "var(--maincolour)";
}
//===========================================
//STOP CLOCKS ELEMENT
function SetDefaultBG_Timemter() {
    //set default color once
    //document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = "var(--lightcolour)";
    document.getElementById("Label_Background_Value").innerHTML = "rgb(-, -, -)";

}