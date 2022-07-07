## 공부할 것
---

# JSX (JavaScript + XML / HTML)
	- 필수로 사용해야하는건 아니지만 가독성이 좋고 코드가 간결해진다.
	```js
	/* EXAMPLE*/
	const element = <h1>Hello, world!</h1>;
	```

```js
/*  */
const element = (
	<h1 calssName="greeting">
		~~~
	</h1>
)
```
```js
/* without jsx */
let name = "junsyun"
React.createElement('div',null, `hello, ${name}`);
/* `` 백틱 사이에 변수를 넣고싶으면 ${변수명}, 그냥 태그안에 변수를 쓰고싶으면 중괄호 사용{} */
```
```js
/* with jsx */
<div></div>
```

### 문법 특


#

# Virtual DOM & BrowserDom ?

## Element?
```js
{
	type :'button',
	props : {
		color : 'green',
		children : {
			.
			.
			.
		}
	}
}
```

- ## 특징
	- immutable
		- Elements 생성후에는 children이나 attributes를 변경할 수 없다
	- Compoent는 class, Elements는 Object에 비유할 수 있다.

	- State : js 객체
	- Props : 값을 가지고있는 js 객체
	- 새로오운 값을 컴포넌트에 전달하여 새로 Element를 생성 (Rerender)

	- 리액트 컴포넌트는 일종의 함수로, 모든 리액트 컴포넌트는 같은 Props에 대해서는 항상 같은 return을 하는 Pure함수와 같아야한다.
	```js
	/* Pure func ex*/
	sum = (a, b) => {
		return a + b
	}
	```
	```js
	React.createElement(
		Profile,
		{
			~~ : ~~,
			~~ : ~~,
			~~ : ~~
		}
	)
	```

	- 모든 컴포넌트 이름은 대문자로 생성해야한다(일반 태그로 인식하게됨)


	- 

Hooks 은 최상위 블럭에서 실행되어야한다 ?
