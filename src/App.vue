<template>
  <v-app id="app">
    <div class="header">
      <div class="progress-bar progress-container" id="myBar" v-if="showBar">
      </div>
    </div>
    <div class="container">
      <img alt="Vue logo" src="./assets/main_img_rep_dem.jpeg" style=" width: 100%;
  z-index: 0;height: 500px;object-fit: cover;" class="img-wrap"/>
      <!--<h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">The social network for epic content</h1>-->
      <h1 style="font-size: 75px; text-align: center;color: white;" class="centered">
        <span class="first-letter">A</span>MERICAN <span class="first-letter">D</span>ATA
        <span class="first-letter">A</span>NALYSIS
      </h1>
    </div>
    <!--<img alt="Vue logo" src="./assets/main_img_rep_dem.jpeg" style="margin-bottom: 50px;z-index: 1" class="img-wrap">-->
    <HelloWorld/>
  </v-app>
</template>

<script>
import HelloWorld from './components/HelloWorld';
export default {
  name: 'App',
  components: {
    HelloWorld,
  },
  data(){
    return{
      showBar: false
    }
  },
  created () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed () {
    window.removeEventListener('scroll', this.handleScroll);
  },
  methods:{
    handleScroll(){
      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      var scrolled = (winScroll / height) * 100;
      this.showBar = scrolled > 5
      if(this.showBar){try {
        document.getElementById("myBar").style.width = scrolled + "%";
      }
      catch (e){console.log(e)
      }}},
  }
};
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  font-size: 1.25rem;
}
.img-wrap {
  width: 50%;
  height: 600px;
  position: relative;
  display: block;
  margin-left: auto;
  margin-right: auto;
  overflow: hidden;
  min-width: 100%;
  text-align: center;
  filter: brightness(60%);
}
.header {
  position: fixed;
  top: 0;
  z-index: 1;
  width: 100%;
  background-color: #f1f1f1;
}
.progress-container {
  width: 100%;
  height: 8px;
  background: #ccc;
}
.progress-bar {
  height: 6px;
  background: #2c3e50;
  width: 0%;
}
.container {
  position: relative;
  text-align: center;
  color: white;
}
.centered {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display:inline;
}
.first-letter {
  font-size: 100px;
  line-height: 70px;
  font-weight: bold;
}
</style>
