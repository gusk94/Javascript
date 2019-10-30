const username = prompt('Who are you?')

let message = ''

if (username === 'ssafy'){
    message = '<h1>Welcome to SSAFY</h1>'
} else if (username == 'admin'){
    message = '<h1>Hi admin</h1>'
} else {
    message = `<h1>Welcome, ${username}</h1>`
}

document.write(message)

// switch

switch (username){
    case 'ssafy' : {
        message = '<h2>ssafy</h2>'
        break
    }
    case 'admin' : {
        message = '<h2>admin</h2>'
        break
    }
    default : {
        message = '<h2>hello</h2>'
        break
    }
}

document.write(message)

/*
break 사용 x -> case에 들어가면 아래쪽을 모두 거친다.
switch(사용자){
    case '관리자':{
        사용자.권한 += '관리자 페이지 접근'
    }
    case '일반_사용자': {
        사용자.권한 += '쓰기'
    }
    default:{
        사용자.권한 += '읽기'
    }
}
*/