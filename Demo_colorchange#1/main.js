/*
=======================================================
宣告RGB各slider
=======================================================
*/

let red_value = document.querySelector("#red-value")
let green_value = document.querySelector("#green-value")
let blue_value = document.querySelector("#blue-value")

/*
=======================================================
各slider被移動的偵聽事件
=======================================================
*/
red_value.addEventListener('input', function(event) {
    numColor()
})

green_value.addEventListener('input', function(event) {
    numColor()
})

blue_value.addEventListener('input', function(event) {
    numColor()
})

function numColor() {
    if (event.target.id == "blue-value") {
        blue_value.value = event.target.value
        blue_value.nextElementSibling.innerHTML = blue_value.value
    } else if (event.target.id == "red-value") {
        red_value.value = event.target.value
        red_value.nextElementSibling.innerHTML = red_value.value
    } else if (event.target.id == "green-value") {
        green_value.value = event.target.value
        green_value.nextElementSibling.innerHTML = green_value.value
    }

    //因為每次個別bar被移動，因此除了個別的數字改變，也會改變背景顏色
    //因此改變個別數字與背景顏色也需要寫入此函式內
    document.querySelector(".color-outcome").innerHTML = `#` + `${Number(red_value.value).toString(16).padStart(2, '0')}` + `${Number(green_value.value).toString(16).padStart(2, '0')}` + `${Number(blue_value.value).toString(16).padStart(2, '0')}`

    document.body.style.backgroundColor = `rgb(${red_value.value},${green_value.value},${blue_value.value})`;

}