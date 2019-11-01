// Background image
const URL = 'https://source.unsplash.com/1920x1080/?nature,water'
axios.get(URL)
  .then(function(response){
    const imageUrl = response.request.responseURL
    document.querySelector('body').style.backgroundImage = `url(${imageUrl})`
  })

// time
const nowDate = new Date()
let nowHour = nowDate.getHours()
if (String(nowHour).length === 1){
  nowHour = '0' + nowHour
}
let nowMinute = nowDate.getMinutes()
if (String(nowMinute).length === 1){
  nowMinute = '0' + nowMinute
}
const time = document.querySelector('#time')
time.innerText = `${nowHour}:${nowMinute}`

// todo
const question = document.createElement('h3')
question.classList = "text-white"
question.innerText = "What is your main focus for today?"
question.style = "font-size:40px"
document.querySelector('#user-to-do').appendChild(question)
const input = document.createElement('input')
input.type = 'text'
input.id = 'writetodo'
input.classList = "text-white bg-transparent border-top-0 border-left-0 border-right-0 text-center"
input.style = "outline:none"
document.querySelector('#user-to-do').appendChild(input)
document.addEventListener('keydown', function(event){
if (event.key == 'Enter'){
  const toDo = document.querySelector('#writetodo')
  if (toDo.value){
    const todolist = document.createElement('div')
    const deletetodo = document.createElement('button')
    deletetodo.innerText = 'x'
    deletetodo.classList = 'btn btn-outline-warning btn-sm'
    todolist.innerText = toDo.value
    todolist.classList = 'text-white'
    toDo.value = ''
    todolist.appendChild(deletetodo)
    document.querySelector('#user-to-do').appendChild(todolist)
    deletetodo.addEventListener('click', ()=>todolist.remove())
    }
  }
})

// weather
const weatheUrl = 'http://api.openweathermap.org/data/2.5/weather?q=Seoul,KR&APPID=cb5b4ab8957d35f370cc1bdd030b1cca'
axios.get(weatheUrl)
  .then(function(response){
    const weather = response.data.weather[0].main
    const humidity = response.data.main.humidity
    let temp = response.data.main.temp - 273.15
    temp = temp.toFixed(2) + '°C'
    const weatherList = document.querySelector('#weatherlist')
    const p1 = document.createElement('li')
    p1.innerText = `weather : ${weather}`
    weatherList.appendChild(p1)
    const p2 = document.createElement('li')
    p2.innerText = `temp : ${temp}`
    weatherList.appendChild(p2)
    const p3 = document.createElement('li')
    p3.innerText = `humidity : ${humidity}`
    weatherList.appendChild(p3)
  })
