const dateToDisplay: HTMLInputElement= document.querySelector<HTMLInputElement>('input[type="month"]')!;
const table: HTMLTableElement= <HTMLTableElement>document.getElementById("calendar"); //無理やりHTMLTableElement型にしてしまったがこれでよいものか？
const resetTable: string = document.getElementById("calendar")!.innerHTML;

//更新ボタンを押したときの動作
//ユーザーが選択した年月(dateToDisplay)から１日目の曜日(firstDayOfTheMonth)、月(theMonth)、年(theYear)を取得
//その月が全部で何日あるのか(俗に言う大の月小の月)を判定→numberOfDaysと宣言
function update(){
    console.log(dateToDisplay.value); 
    const fullDate: Date = new Date(dateToDisplay.value);
    console.log(fullDate);
    const firstDayOfTheMonth: number = fullDate.getDay();
    const theMonth: number = fullDate.getMonth() + 1;
    const theYear: number = fullDate.getFullYear();
    console.log(firstDayOfTheMonth);


    const rowOfFirstDate: HTMLTableRowElement = table.rows[1];
    const placeOfFirstDate: HTMLTableCellElement = rowOfFirstDate.cells[firstDayOfTheMonth];
    console.log(placeOfFirstDate);
    const shortMonth: number[] = [2,4,6,9,11];

    const numberOfDays: number = ((theMonth) => {
        if(shortMonth.includes(theMonth)){  //大の月小の月を判定して日数を決定
          if(theMonth !== 2){
             return 30;
          }else if((theYear % 4 === 0 && theYear % 100 !== 0) || theYear % 400 === 0){ //うるう年をケア
             return 29;
          }else{
             return 28;
          }
        }else{
          return 31;
        };
        })(theMonth);  //ここに(theMonth)をつけたら値がうまくいったのが理解できていない

console.log(numberOfDays);

// 一旦表を非表示にする
table.style.display = 'none';
document.getElementById("calendar")!.innerHTML = resetTable; //表を初期状態にリセットするために記述したが、記述方法が間違っていて意図を反映させられていない


// 非表示状態で要素を更新する

for(let days: number = 1, i: number = 1, j: number = firstDayOfTheMonth /*,daysText: string = String(days) 全部１になってしまった*/; days <= numberOfDays; days++){
     table.rows[i].cells[j].innerText = String(days); //firstChild.nodeValueではダメだったがinnerTextだと上手くいく。
      if(j === 6){
           j = 0;
           i++;
      }else{
           j++;
      };
     };

// 表を再表示する
table.style.display = 'table';

};