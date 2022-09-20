const dateToDisplay = document.querySelector('input[type="month"]');
const table = document.getElementById("calendar");
const forReset = document.body.innerHTML;

//更新ボタンを押したときの動作
//ユーザーが選択した年月(dateToDisplay)から１日目の曜日(firstDayOfTheMonth)、月(theMonth)、年(theYear)を取得
//その月が全部で何日あるのか(俗に言う大の月小の月)を判定→numberOfDaysと宣言
function update(){
    console.log(dateToDisplay.value);
    const fullDate = new Date(dateToDisplay.value);
    console.log(fullDate);
    const firstDayOfTheMonth = fullDate.getDay();
    const theMonth = fullDate.getMonth() + 1;
    const theYear = fullDate.getFullYear();
    console.log(firstDayOfTheMonth);


    const rowOfFirstDate = table.rows[1];
    const placeOfFirstDate = rowOfFirstDate.cells[firstDayOfTheMonth];
    console.log(placeOfFirstDate);
    const shortMonth = [2,4,6,9,11]
    

    const numberOfDays = ((theMonth) => {
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
        })(theMonth);  //ここに(theMonth)をつけたら値がうまくいったのマジで謎

console.log(numberOfDays);


   //placeOfFirstDate.firstChild.nodeValue = "1";  //とりあえず1ヵ所の書き換えに成功。ただし記述方法を変更。


// 一旦表を非表示にする
table.style.display = 'none';
//document.body.innerHTML = forReset; //表を初期状態にリセットするために記述したが、下の書き換えが正しく機能しなくなった。


// 非表示状態で要素を更新する


for(days = 1, i = 1, j = firstDayOfTheMonth; days <= numberOfDays; days++){
     table.rows[i].cells[j].innerText = days; //firstChild.nodeValueではダメだったがinnerTextだと上手くいく。
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