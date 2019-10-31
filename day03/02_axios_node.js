const axios = require('axios')
const url = 'https://jsonplaceholder.typicode.com/posts/1'

axios.get(url)
  .then(function(response){
    console.log(response.data)
}) // 요청이 다 끝난 경우 then() 안 쪽에 callback 함수
