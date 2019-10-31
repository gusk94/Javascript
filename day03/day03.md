- `XMLHttpReqeust` : 비동기적인 요청을 보내기 위해서 사용하는 객체

```javascript
const XHR = new XMLHttpRequest()
const url = 'https://jsonplaceholder.typicode.com/posts/1'
XHR.open('GET', url)
XHR.addEventListener('load', function(event) {
	console.log(event)
})
XHR.send()
// ProgressEvent {isTrusted: true, lengthComputable: false, loaded: 292, total: 0, type: "load", …}
```



- `package.json`

  ```bash
  npm init
  ```

  

  `axios`

  ```bash
  npm install axios
  ```

  