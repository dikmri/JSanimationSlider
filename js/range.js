//起動時の処理
window.addEventListener("load", ()=> {
    //スライダー、スライダー値DOM
    let posRange = document.getElementById("posRange");
    let tlRange = document.getElementById("tlRange");
    let posArea = document.getElementById("posArea");
    let tlArea = document.getElementById("tlArea");
    

    //スライドさせたときの処理
    posRange.addEventListener("input",setValue);
    tlRange.addEventListener("input",setValue);


    //スライダー初期値を表示
    setValue();
})

//スライダー値を取得して表示
const setValue = ()=> {
    posArea.textContent = posRange.value;
    tlArea.textContent = tlRange.value;
}

// TODO スライダーの位置を合わせる20220202
