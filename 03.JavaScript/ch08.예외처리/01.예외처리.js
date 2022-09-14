try {
    error.error.error();
} catch(e) {
    console.log(e.name);
    console.log(e.message);
}
console.log('end')

function callThreeTimes(callback) {
    if (typeof(callback) == 'function') {
        for (let i=0; i<3; i++)
            callback();
    }
    else {
        console.log('callback 함수를 정의하세요')
    }   
}

function myFunc() {
    console.log('호출되었음');
}

callThreeTimes(myFunc);
callThreeTimes();

function callThreeTimes2(callback) {
    try {
        for (let i=0; i<3; i++)
            callback();
    } catch(e) {
        console.log('callback 함수를 정의하세요')
    }   
}
callThreeTimes2()