//スライダー値を取得して表示
const setValue = ()=> {
    const value = iRange.value;
    opRange.textContent = value;
    tlRange = value;
}

//起動時の処理
window.addEventListener("load", ()=> {
    //スライダー、スライダー値DOM
    let iRange = document.getElementById("iRange");
    let opRange = document.getElementById("opRange");
    let tlRange = document.getElementById("tl");

    //スライドさせたときの処理
    iRange.addEventListener("input",setValue);

    //スライダー初期値を表示
    setValue();
})

// TODO tlRangeが動くようにする 20230130