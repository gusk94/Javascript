function sleep_3() {
    setTimeout(function(){
        console.log('Wake Up!')
    }, 3000)
}
 
console.log('Start sleeping')
sleep_3() // 비동기함수
console.log('End of Program')
// Start sleeping
// End of Program
// Wake Up! => 3초 뒤에 console.log 찍음 => 실행하고 다음 라인으로 넘어감(끝을 기다리지 않음) => 콜백함수 필요
