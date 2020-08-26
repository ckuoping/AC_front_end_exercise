/*
=======================================================
宣告RGB各輸入框
=======================================================
*/

const red_value = document.querySelector("#red-value");
const green_value = document.querySelector("#green-value");
const blue_value = document.querySelector("#blue-value");

/*
=======================================================
鍵盤偵測數字改變各別顏色
=======================================================
*/
red_value.addEventListener("keyup", function(event) {
    squareShow("#red-square")
});

green_value.addEventListener("keyup", function(event) {
    squareShow("#green-square")

});

blue_value.addEventListener("keyup", function(event) {
    squareShow("#blue-square")
});

/*
=======================================================
滑鼠偵測數字改變各別顏色
=======================================================
*/

red_value.addEventListener("click", function(event) {
    squareShow("#red-square")
});

green_value.addEventListener("click", function(event) {
    squareShow("#green-square")

});

blue_value.addEventListener("click", function(event) {
    squareShow("#blue-square")
});

function squareShow(squareId) {
    let square = document.querySelector(squareId);
    console.log(this)
    console.log(event.target)
    console.log(event.target.value)

    // 判斷輸入值有無超出範圍
    if (event.target.value >= 255) {
        event.target.value = 255;
    } else if (event.target.value < 0) {
        event.target.value = 0;
    }

    // 分別賦予顏色
    let color = ``
    if (squareId == "#blue-square") {
        color = `rgb(0,0,${event.target.value})`
    } else if (squareId == "#red-square") {
        color = `rgb(${event.target.value},0,0)`
    } else if (squareId == "#green-square") {
        color = `rgb(0,${event.target.value},0)`
    } else {
        color = `rgb(0,0,0)`
    }

    square.style.backgroundColor = color;
}

/*
=======================================================
按下convert轉換顏色
=======================================================
*/

// 宣告各顯示框
const btn = document.querySelector(".covert-btn");
const color_resultTxt = document.querySelector(".color-output")
const color_result = document.querySelector(".color-result");

// 點擊換顏色
btn.addEventListener("click", function(event) {

    if (red_value.value === "" || green_value.value === "" || blue_value.value === "") {
        alert("請輸入空缺數值");
    } else {

        // 圖案顯示     
        color_result.style.backgroundColor = `rgb(${red_value.value},${green_value.value},${blue_value.value})`;

        // 文字顯示     
        color_resultTxt.value = '#' + `${Number(red_value.value).toString(16).padStart(2, '0')}` + `${Number(green_value.value).toString(16).padStart(2, '0')}` + `${Number(blue_value.value).toString(16).padStart(2, '0')}`
    }
});