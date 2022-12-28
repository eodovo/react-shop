# React & Redux를 활용한 쇼핑몰 PC 웹사이트

## https://eodovo.cafe24.com/react

## 01. 프로젝트 개요

### (01) 프로젝트 목적
해당 프로젝트는 리액트 학습 후 리액트 훅과 컴포넌트 재사용, props 이해, 라우터를 이용한 SPA 웹사이트 구현, 리덕스를 통해
전역 state 관리 등 전체적인 리액트 라이브러리 사용 흐름에 목적을 둔 프로젝트 입니다. 

* state 관리, 업데이트
* props 전달, propsdrliing 피하기
* SPA의 이해
* 리액트 훅
* 컴포넌트 이해
* 리덕스를 통한 전역 상태 관리

### (02) 프로젝트 스택
* 언어 : HTML5, CSS3, JAVASCRIPT
* 라이브러리 : React, React Router, Redux, Styled component, Axios, React Bootstrap

### (03) 프로젝트 리스트
* 라우터를 이용한 SPA 웹 구현하기
* 리액트 부트스트랩을 이용해 기본적인 UI 구성하기
* ES6의 반복문 map을 활용한 상품 리스트 출력하기
* 출력된 리스트를 활용하여 응용 하는 법 구현 (상품 가격순 정렬, 상세 페이지 구현)
* 라이브러리 AXIOS를 사용하여 깃허브의 JSON 파일 불러오기 
* 리액트 훅을 이용한 화면 전환 애니메이션 구현
* 리덕스를 이용한 장바구니 시스템 구현

## 02. 프로젝트 학습

### (01) 프로젝트 진행방식
  1. 프로젝트 생성 및 환경 설정
  * npx create-react-app 을 통한 프로젝트 생성
  * 필요한 라이브러리 설치  
  
  2. UI 디자인
  * 국내 외식 브랜드 프렌차이즈 UI 참고
  
  3. 컴포넌트 계획
  * 내용이 자주 변경될 것 같은 것
  * 반복적인 html 구성이 예상될 때
  * 페이지 어디에서든 보이는 UI (header, footer)
  * 크기(size)가 큰 UI
  
## 03. 프로젝트 고찰
  1. AXIOS로 데이터를 불러왔지만 상세페이지에서 확인이 안됨.
  *  axios로 json 데이터(객체 3개)가 있는데 상품리스트에서는 확인되오나 상품 클릭 후 detail 페이지로 이동시 오류가 발생함.<br>
     이유 -> detail 페이지에서 data.js를 이용하는데 이 json과 get으로 불러올 데이터가 같은 데이터가 아님.<br>
     detail 페이지에서 data.js가 maping 되었기 때문에 axios로 불러온 데이터는 maping 밖의 데이터이기 때문에 위와 같은 오류가 발생했다.<br>
     그 후 axios의 원리, promise의 원리를 이해하고 넘어감.
     
  2. state의 불변성 유지
  * useState 훅을 사용후 변수를 재사용 할 일
     

