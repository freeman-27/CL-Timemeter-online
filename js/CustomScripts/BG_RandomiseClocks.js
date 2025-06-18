//Функции random background colour for CLOCKS ELEMENT
//==================================
//START CLOCKS ELEMENT
function BG_Randomise_Clocks() {

    //добавить элемент в HTML
    //var ExtendElement = document.createElement("p");
    //ExtendElement.innerHTML = "тест функции: BG_Randomise_Clocks";
    //// Append to another element:
    //document.getElementById("Clocks_ContainerBackgr").appendChild(ExtendElement);


    //Случайные значения для подстановки в BackgroundColor по два значения в формат HEX colour: #RRGGBB
    var varR1 = Math.floor(Math.random() * 8) + 1; // R добавить шестнадцатеричные
    var varR2 = Math.floor(Math.random() * 8) + 1; // R
    var varG1 = Math.floor(Math.random() * 8) + 1; // G
    var varG2 = Math.floor(Math.random() * 8) + 1; // G
    var varB1 = Math.floor(Math.random() * 8) + 1; // B
    var varB2 = Math.floor(Math.random() * 8) + 1; // B

    //массив 16 номеров для пространства цветов HEX colour: #RRGGBB
    const Array_RGB_numbers = ["0","1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "A",
    "B",
    "C",
    "D",
    "E",
    "F"]

    //случайный номер для выбора по индексу из массива Array_RGB_numbers
    var genIndexNumber1 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber2 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber3 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber4 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber5 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    var genIndexNumber6 = Math.floor(Math.random() * 16); //генерировать случайный номер от 1 до 15
    //выбор из массива по случайному номеру:
    var select_R1 = Array_RGB_numbers[genIndexNumber1];
    var select_R2 = Array_RGB_numbers[genIndexNumber2];
    var select_G1 = Array_RGB_numbers[genIndexNumber3];
    var select_G2 = Array_RGB_numbers[genIndexNumber4];
    var select_B1 = Array_RGB_numbers[genIndexNumber5];
    var select_B2 = Array_RGB_numbers[genIndexNumber6];

    var RedChanel = Math.floor(Math.random() * 200) + 1;
    var GreenChanel = Math.floor(Math.random() * 200) + 1;
    var BlueChanel = Math.floor(Math.random() * 200) + 1;




    //объединение значений в формат HEX
    //var setHexColourBG = "#" + varR1 + "" + varR2 + "" + varG1 + "" + varG2 + "" + varB1 + "" + varB2; // значения от #11 до #99
    //var HexColour_Random = "#" + select_R1 + "" + select_R2 + "" + select_G1 + "" + select_G2 + "" + select_B1 + "" + select_B2; // значения от #00 до #FF
    //объединение значений в формат RGB
    var RGB_Colour_Random = "rgb(" + RedChanel + "," + GreenChanel + "," + BlueChanel + ")"; //RGB значения от 200 до 0;

    //задать фон по случайному значению:
    //document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = setHexColourBG;
    //document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = HexColour_Random;
    document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = RGB_Colour_Random;


    //=====================проверка значений (вывод)
    ////var RGBtestElement = document.createElement("p");
    ////RGBtestElement.innerHTML = "тест RGB" + ": #" + varR1 + "" + varR2 + "" + varG1 + "" + varG2 + "" + varB1 + "" + varB2;
    ////document.getElementById("Clocks_ContainerBackgr").appendChild(RGBtestElement);

    //var Test_HexColour_Random = document.createElement("p");
    //Test_HexColour_Random.innerHTML = HexColour_Random;
    //document.getElementById("Clocks_ContainerBackgr").appendChild(Test_HexColour_Random);

    //var Test_RGB_Colour_Random = document.createElement("p");
    //Test_RGB_Colour_Random.innerHTML = RGB_Colour_Random;
    //document.getElementById("Clocks_ContainerBackgr").appendChild(Test_RGB_Colour_Random);

 
    document.getElementById("RGBValueLabel").innerHTML = RGB_Colour_Random;

    //change color once
    //document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = "var(--maincolour)";
}
//===========================================
//STOP CLOCKS ELEMENT
function SetDefaultBG_Cocks() {
    //set default color once
    //document.getElementById("Clocks_ContainerBackgr").style.backgroundColor = "var(--lightcolour)";
    document.getElementById("RGBValueLabel").innerHTML = "rgb(-, -, -)";

}
