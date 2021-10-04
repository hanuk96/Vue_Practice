## Vue_Practice
### TodoList 만들어보기 v_1
font awesome 쓰기위해서는 public/index.html에 밑에있는 CDN을 추가합시다

```
<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.2.0/css/all.css" /> 
```
###v_2
전체적으로 부모, 자식 component간의 통신을 이용하여 데이터의 변화를 바로바로 볼 수 있게끔 바꾸어 

slot은 component에 일정한 ui를 재사용하기 위해서 default로 skeleton 코드를 만들어 놓은것, common이라는 폴더에 명시하여 재사용하자.
간단한 effect를 추가하기 편함(우리는 transition madal창을 추가하였다)
