let today = new Date();
console.log(today.toDateString());
console.log(today.toLocaleString());

function myLocalTimeFormat(date) {
    let result = ''
    year = String(date.getFullYear()).substring(2);
    month = String(date.getMonth()+1);
    month = month.length == 1 ? '0'+month : month;
    day = `${date.getDate() < 10 ? '0'+date.getDate():date.getDate()}`;
    hour = `${date.getHours() < 10 ? '0'+date.getHours():date.getHours()}`;
    minute = `${date.getMinutes() < 10 ? '0'+date.getMinutes():date.getMinutes()}`;
    sec = `${date.getSeconds() < 10 ? '0'+date.getSeconds():date.getSeconds()}`;
    return `${year}-${month}-${day}-${hour}-${minute}-${sec}`;
}
console.log(myLocalTimeFormat(today))

// Unix Time
const unixDate = new Date(1.6632e12);
console.log(unixDate.toLocaleDateString());

const strDate = new Date('2022-09-14-09-50');
console.log(unixDate.toLocaleString(strDate));

const elementDate = new Date (2022, 9-1, 14 , 9, 50);
console.log(myLocalTimeFormat(elementDate));

let hundredDay = today.setDate(today.getDate()+100);
console.log(myLocalTimeFormat(hundredDay));