// Array helper method

const colors = ['red', 'green', 'blue', 'salmon']

for (const color of colors){
    console.log(color)
}

// forEach => loop 만 돌아줌 => function 필요
colors.forEach(color => console.log(color))


// map => 배열내의 모든 요소에 대하여 주어진 함수를 호출한 결과를 모아 새로운 배열을 return
// 일정한 형식의 새로운 배열을 만들 때 사용한다.
const numbers = [1, 2, 3, 4]
const doubleNumbers = numbers.map(number => number*2)
console.log(doubleNumbers) // [2, 4, 6, 8]

// 숫자가 담긴 배열을 받아 각 수의 제곱근이 들어있는 새로운 배열을 만들어 보자!
const numbers2 = [4, 9, 16]
const sqrtnumbers = numbers2.map(number => Math.sqrt(number))
console.log(sqrtnumbers) // [2, 3, 4]

// map 헬퍼를 사용해서 distace / time (속도) 를 저장하는 배열 speeds 를 만들어라.
const trips = [
    {distace: 34, time: 10},
    {distace: 90, time: 50},
    {distace: 59, time: 25},
]

const speeds = trips.map(trip => trip.distace/trip.time)
console.log(speeds) // [3.4, 1.8, 2.36]


// filter => 주어진 함수의 테스트를 통과하는 모든 요소를 모아서 새로운 배열 반환
numbers.filter(number => number % 2 === 0)

const products = [
    {name: 'cucumber', type: 'vege' },
    {name: 'banana', type: 'fruit' },
    {name: 'carrot', type: 'vege' },
    {name: 'apple', type: 'fruit' },
]

const fruit = products.filter(product => product.type === 'fruit')
console.log(fruit)

// 나이가 50 이상인 아이템만 가지고 있는 새로운 배열
const ages = [15, 25, 35, 45, 55, 65, 75, 85, 95]

const oldAges = ages.filter((age, index, self) => {
    console.log(age, index, self)
    return age >= 50})
console.log(oldAges) // [55, 65, 75, 85, 95]


// find => 주어진 판별 함수를 만족하는 첫번째 요소의 값을 반환, 없을 경우 undefined
const users = [
    {name: 'Tony Stark', age: 45},
    {name: 'Steve Rogers', age: 32},
    {name: 'Thor', age: 40},
]

const tony = users.find(user => user.name === 'Tony Stark')
console.log(tony) // {name: "Tony Stark", age: 45}
// const tony = users.filter(user => user.name === 'Tony Stark') // [{…}] : filter : 배열에 담아서 줌


// some => 배열 안의 어떤 요소라도 (=== 가 true 인게 하나라도!) 주어진 판별 함수를 통과하는지 테스트하고 결과에 따라 boolean 값을 반환
const arr = [1, 2, 3, 4, 5]
const result = arr.some(number => {
    return number % 2 === 0
}) // true

// every => 배열 안의 모든 요소가 판별 함수를 통과해야 true
const result2 = arr.every(number => number % 2 === 0) // false

// requests 배열에서 각 요청들 중 status 가 pending 인 요청이 있는지 확인
const requests = [
    {url: '/photos', status: 'complete'},
    {url: '/albums', status: 'pending'},
    {url: '/users', status: 'failed'},
]

const isProgress = requests.some(request => request.status === 'pending')
console.log(isProgress) // true

// reduce => 배열의 각 요소에 대해 주어진 `reducer` 함수를 실행하고 하나의 값을 반환
// reduce 는 배열 내의 숫자 총합, 배열 내 평균계산 등 별의 값을 하나로 줄이는 동작을 한다
// 첫 번째 매개변수는 `누적 값(전 단계의 결과)`

const ssafytest = [90, 99, 78, 80]
const sum = ssafytest.reduce((total, score) => {
    total += score
    return total // 다음 루프로 누적 값을 넘김
}, 0) // 347

// ssafytest 배열을 doubleSsafyTest
const doubleSsafyTest = ssafytest.reduce((acc, score) => {
    acc.push(score*2)
    return acc
}, []) // [180, 198, 156, 160]
