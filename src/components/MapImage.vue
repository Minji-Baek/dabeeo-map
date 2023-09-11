<script>
import { reactive } from 'vue';

export default {
  props:{
    imgSrc: String
  },
  setup () {
    const state = reactive({
      marks: [],
    });
    const setMarkStyle = (ele, event) => {
      ele.src = "../../public/marker.png";
      const centerX = event.offsetX - ele.width/2;
      const centerY = event.offsetY - ele.height;
      ele.style.left = centerX + 'px';
      ele.style.top = centerY + 'px';
      ele.style.position = 'absolute';
      ele.style.zIndex = 3;
      ele.addEventListener("contextmenu", e => e.preventDefault());
      ele.setAttribute('class', 'marking')
      ele.className = "marking"
      return ele;
    }

    const mouseDown = (event) => {
      let newimg = document.createElement("img");
      const mark = setMarkStyle(newimg, event);
      const mapEle = document.querySelector('#map');
      mapEle.appendChild(mark);
    }

    const clickReset = () => {
      const marks = document.querySelectorAll('.marking');
      marks.forEach(mark => {
        const mapEle = document.querySelector('#map');
        mapEle.removeChild(mark);
      })
    }
    
    return { 
      state, mouseDown, clickReset
    }
  }
}
</script>
<template>
  <div id="wrapper-map">
    <div id="wrapper-btn">
      <button @click="clickReset" id="reset-btn">
      <img src="/reset.png" />
    </button>
    </div>
    
    <div id="map" v-dragscroll >
      <img id="map-img" @mousedown.right="mouseDown" @contextmenu.prevent  src="/map.png"/>
    </div>
  </div>
  
</template>


<style scoped>

#wrapper-map {
  display: flex;
  justify-content: center;
  position: relative;
}

#wrapper-btn {
  position: absolute;
  display: flex;
  width: 1024px;
  height: 100%;
 
}

#map {
  width: 1024px;
  height: 768px;
  overflow: hidden;
  position: absolute;

}

#map-img {
  position: relative;
  z-index: 1;
}
button {
  border: none;
  background-color: unset;
  cursor: pointer;
}

#reset-btn {
  padding-top: 10px;
  padding-right: 10px;

  position: absolute;
  z-index: 5;
  right: 0;
}

</style>