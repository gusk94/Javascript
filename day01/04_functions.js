// 함수 선언식 -> 선언하기만 하면 바로 알 수 있음
function add(num1, num2){
  return num1+num2
}
add(1, 2) // 3

// 함수 표현식 -> 일반적 사용
const sub = function(num1, num2){
  return num1 - num2
}


// Arrow Function => 표현식으로만
// ES6+
let addOne = function(num){
  return num+1
}

const addTwo = (num) => {
  return num+2
}

// 중괄호 제거 -> 바로 반환
addOne =  (num) => num + 1

addOne = num => num + 1


// name 이라는 인자를 받아서 hello ${name} 을 반환하는 함수
// 선언식
function greeting(name){
  return `hello ${name}`
}

// 표현식
const greet = function(name){
  return `hello ${name}`
}

// arrow function
greeting = name => `hello ${name}`


// object 를 반환하는 arrow function
const makeObject = (value) => {
  return {'key': value}
}

const makeObject2 = value => ({'key': value})

const noArgs = () => 'No args'
