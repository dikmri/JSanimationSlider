//スライダー値を取得して表示
const setValue = ()=> {
    let value = iRange.value;
    opRange.textContent = value;
}

//起動時の処理
window.addEventListener("load", ()=> {
    //スライダー、スライダー値DOM
    let iRange = document.getElementById("iRange");
    let opRange = document.getElementById("opRange");
    let tlRange = document.getElementById("tlRange");

    //スライドさせたときの処理
    iRange.addEventListener("input",setValue);

    //スライダー初期値を表示
    setValue();
})

// TODO tlRangeが動くようにする 20230130
function range(){
    let iRange = document.getElementById("iRange");
    let tlRange = document.getElementById("tlRange");

    tlRange.value = iRange.value;
}