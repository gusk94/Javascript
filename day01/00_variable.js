// 한 줄 주석
/*
여러 줄 주석
*/
// 값을 재할당 할 수 있는 변수를 선언하는 키워드
let x = 1
// print(x) : 실제 출력
// print == console.log
// 블록 유효 범위(block scope)를 갖는다.
console.log(x)
// JS에서 모든 변수는 재선언 불가능 (let x = 3 : 불가능)
x = 3

if (x === 3){
// 안에서 선언된 변수는 block에서만 정의될 수 있음 => 밖으로 벗어나면 정의 x
let message = '안녕하세요'
console.log(message)
// let x = 'hi' // 가능
console.log(x)
}

// console.log(message) // : error -> message is not defined

// y = 2 // var
let y

console.log(y) // undifined
console.log("=============================")

// 값이 변하지 않는 상수 선언 키워드 -> 재할당 불가능
// block scope
// "모든" 선언에서 가능한 상수를 사용해야 한다.
// 초기화 필수
const MY_FAV = 20
// MY_FAV = 15 // error -> 재할당 불가능

if (MY_FAV === 20){
    const MY_FAV = 30
    console.log(MY_FAV)
}

console.log(MY_FAV)

// 식별자
// 변수명은 식별자라고 불린다.
// 1. 반드시 문자, 달러($), 밑줄(_)로 시작해야 한다.
// 2. 대소문자를 구분하고 class 이름을 제외하고는 대문자로 시작하지 않는걸 권장
// 3. 예약어 사용 불가(const, let, class, return, case...)


// 카멜 케이스(CamelCase) - 객체, 함수, 변수
// event handler : 'on' 으로 시작
const onClick = () => {}

// boolean 값 : 'is' 로 시작
let isAvailable = false

// 함수이름
function getUsername () {}


// 파스칼 케이스(PascalCase) - 클래스, 생성자(UpperCamelCase)
class User {}


// 대문자 스네이크 케이스 : 상수
const API_KEY = 'apikey'
