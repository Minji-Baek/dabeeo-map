# dabeeo-map

## Dabeeo F/E Developer coding test 1type


**page: https://minji-baek.github.io/dabeeo-map/** 


### 1. map 1024 X 768 사이즈로 고정 표출
### 2. drag로 이미지 이동 및 이미지 끝엔 이동 불가
- vue-dragscroll 사용하여 drag 스크롤 기능 사용
- 동시 방향 이동 가능,
- div 크기 벗어나지 않게 img 표출

### 3. 마우스 우클릭 시 좌표에 마커 생성, 반복 생성 가능
- @mousedown.right 사용하여 click event에 offsetX, offsetY좌표 사용 가능.
- 받은 좌표에 맞게 마커 생성.
- click 시 마다 생성.

### 4. reset 버튼 클릭 시 모든 마커 삭제
- reset 버튼 클릭 시 마커 class의 element만 select하여 삭제 해줌

<img src="/1.png">


 