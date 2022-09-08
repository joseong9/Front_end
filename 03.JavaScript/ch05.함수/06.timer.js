setTimeout(function() {
    console.log('timeout 발생(3초후)');
}, 3000);

//시간 간격(interval)- 주기적 실행 함수
const si = setInterval(() => {
    console.log(new Date())
}, 1000);

setTimeout(()=> {
    clearInterval(si)
}, 5000);