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


    firstDay.firstChild.nodeValue = "1";

}

