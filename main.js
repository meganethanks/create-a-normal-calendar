const theMonth = document.querySelector('input[type="month"]');


function update(){
    console.log(theMonth.value);
    const theDay = new Date(theMonth.value);
    console.log(theDay);
    const wDay = theDay.getDay();
    const month = theDay.getMonth() + 1;
    const year = theDay.getFullYear();
    console.log(wDay);


    const table = document.getElementById("calendar");
    const firstRow = table.rows[1];
    const firstDay = firstRow.cells[wDay];
    console.log(firstDay);
    const shotMonth = [2,4,6,9,11]
    

    const dateNumber = ((month) => {
        if(month === shotMonth){  //大の月小の月を判定して日数を決定
         if(month === 2){
            if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){ //うるう年ケア
                return 29
            }else{
         return 28;
            }
         }else{
             return 30;
        };
    }else{
        return 31;
    };
})(month);  //お尻に(month)をつけたら値がうまくいったのマジで謎

console.log(dateNumber);

    let i = 2, j = wDay;
    const replaceRows = table.rows[i];
    const replaceDays = replaceRows.cells[j];

    console.log(replaceDays);
    i = 3;
    j = 7;
    console.log(replaceDays); //i,jを変化させても座標は変わらず。

    /*function addNumber(){
        if(j === 6){
            i++;
            j = 0;
        }else{
            j++;
        };
    };*/  //functionとして出してみたけど結果は変わらず

    /*for(let days = 1; days <= dateNumber; days++){  //ここが本命。replaceDaysのセル番号が書き変わっていない事が問題。
        replaceDays.firstChild.nodeValue = days;
        console.log(days);
        console.log(i);
        console.log(j);
        if(j === 6){
            i++;
            j = 0;
        }else{
            j++;
        };
    };


    let tables = document.getElementById('calendar');

/*for (let row of tables.rows) {
    for(let cell of row.cells){
        cell.firstChild.nodeValue = 1;
    } //tableの要素をすべて取得する
}*/

}

