const numbers = [1, 2, 3, 4]

numbers[0] // 1
numbers[-1] // undefined
numbers.length // 4

// 배열 뒤집기
// numbers 도 바뀐다.
numbers.reverse() // [4, 3, 2, 1]
numbers // [4, 3, 2, 1]

// 배열에 아이템 추가하기(마지막)
numbers.push(5) // 길이값 반환 => 5
numbers // [4, 3, 2, 1, 5]
numbers.push('a') // 6
numbers // [4, 3, 2, 1, 5, 'a']

// 가장 마지막 요소 삭제 후 반환
numbers.pop() // 'a'
numbers // [4, 3, 2, 1, 5]

// 가장 앞에 요소 추가
numbers.unshift('a') // 5 (길이 반환)
numbers // ['a', 4, 3, 2, 1, 5]

// 첫번째 요소 삭제 후 반환
numbers.shift() // 'a'
numbers // [4, 3, 2, 1, 5]

// 포함
numbers.includes(0) // false
numbers.includes(1) // true

// 특정 아이템의 index 찾아서 반환
// 아이템이 다수일 경우 첫번째 인덱스 반환
numbers.indexOf(1) // 3
numbers.indexOf(0) // -1 -> 없을 경우

// 배열의 아이템을 seperator 을 받아 문자열로 반환
numbers.join() // "4,3,2,1,5"
numbers.join('') // "43215"
numbers.join('-') //"4-3-2-1-5"
numbers // [4, 3, 2, 1, 5]


// Object

const name = 'ssafy'

const me = {
    name, // -> 변수의 이름과 키의 이름이 같다면 (name: name) name 하나로 생략 가능
    'phone number': '010-1234-5678',
    appleProducts: {
        iPhone: '8',
        airpod: '2'
    }
}
me.name // "ssafy"
me['name'] // "ssafy"
me[name] // undefined
me['phone number'] // -> me.phone number 불가능

// JSON

const jsonData = JSON.stringify(me) // 직렬화 => JS Object 를 String 값으로
const parsedData = JSON.parse(jsonData) // 역직렬화 => String 을 JS Object로
