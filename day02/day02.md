# JavaScript

- `dino.html`

```javascript
// html 문서 내부 선택
// '#' : id, '.' : class, '': tag name(bode, head,,,)
document.querySelector('selector')

// 할당 가능
const bg = document.querySelector('div.bg') // example -> <div class="bg">...</div>

// 할당한 값을 통해서 검색 가능
const dino = bg.querySelector('#dino') // img#dino

// 속성에 대한 값 변경
dino.src = 'https://store-images.s-microsoft.com/image/apps.38351.14426311725358695.736eb785-1d29-478c-a909-1900849773e9.4247f5ee-1daa-4c97-96c2-23868f1fbc45?mode=scale&q=90&h=200&w=200&background=%230078D7'

// style 변경
dino.style.width = '500px'

// element 삭제
// 대상을 직접 삭제
dino.remove()
document.querySelector('#dino').remove()

// 대상의 자식 요소 삭제
// bg.firstElementChild -> 첫 번째 자식
bg.firstElementChild.remove()
// 마지막 요소 삭제
bg.lastElementChild.remove()

// 자식 요소 중 하나를 지움 : removeChild
bg.removeChild(bg.firstElementChild)
bg.removeChild(bg.lastElementChild)
bg.removeChild(dino)


// 새로운 요소 추가
document.createElement('tag name(div, img,,,)')

const newDino = document.createElement('img') // <img>
newDino.id = 'newDino' // "newDino"
newDino // <img id="newDino">
newDino.src = 'https://store-images.s-microsoft.com/image/apps.38351.14426311725358695.736eb785-1d29-478c-a909-1900849773e9.4247f5ee-1daa-4c97-96c2-23868f1fbc45?mode=scale&q=90&h=200&w=200&background=%230078D7'
newDino.alt = 'dino picture'
newDino // <img id="newDino" src="https://store-images.s-microsoft.com/image/apps.38351.14426311725358695.736eb785-1d29-478c-a909-1900849773e9.4247f5ee-1daa-4c97-96c2-23868f1fbc45?mode=scale&q=90&h=200&w=200&background=%230078D7" alt="dino picture">
bg.appendChild(newDino)
```



