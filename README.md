## Vue_Practice
### TodoList 만들어보기 v_1
font awesome 쓰기위해서는 public/index.html에 밑에있는 CDN을 추가합시다

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" /> 
```
### TodoList 만들어보기 v_2
전체적으로 부모, 자식 component간의 통신을 이용하여 데이터의 변화를 바로바로 볼 수 있게끔 바꾸어 

slot은 component에 일정한 ui를 재사용하기 위해서 default로 skeleton 코드를 만들어 놓은것, common이라는 폴더에 명시하여 재사용하자.
간단한 effect를 추가하기 편함(우리는 transition madal창을 추가하였다)

### TodoList 만들어보기 v_3
vuex를 이용하여 상태관리를 store.js에서 한번에 처리
state : 여러 컴포넌트에 공유되는 data
getters : 연산된 state 값을 접근하는 속성 computed
mutations : state값을 변경하는 이벤트로직 methods
actions : 비동기 로직을 선언하는 메서드 async methods

![구조](https://user-images.githubusercontent.com/12428689/136665888-cae11b1d-9dd4-449c-8d26-25df7c300f5e.PNG)

### TodoList 만들어보기 v_4 & 5
store.js 파일을 export와 import를 이용하여 모듈화하였음
이렇게 함으로써 더욱 추적하기 쉬워졌다

