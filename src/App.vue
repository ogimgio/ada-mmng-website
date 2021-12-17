<template>
  <v-app id="app">
    <div class="header">
      <div class="topnav">
        <a style="" href="https://github.com/epfl-ada/ada-2021-project-mmng"><v-img style=""
            src="./assets/GitHub_Logo.png"
            max-width="70"
            contain
        ></v-img></a>
        <div class="topnav-right">
          <a href="#exploration">Exploration of results</a>
          <a href="#model">How can we use our model?</a>
        </div>
      </div>
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
    <v-footer
        dark
        padless
    >
      <v-card
          flat
          tile
          class=" lighten-1 white--text text-center flex justify-center"
          style="min-width: 100%; background-color: #2c3e50"
      >
        <v-card-text>
        </v-card-text>

        <v-card-text class="white--text pt-0" style="text-align: center">
          <div style="display: inline-block;">
            <div style="font-style: italic;">Authors:<br></div>
          <div style="text-align: left">Gioele Monopoli<v-btn class="white--text" icon href="https://www.linkedin.com/in/gioele-monopoli"><v-icon size="24px">{{linkedin}}</v-icon></v-btn><br></div>
          <div style="text-align: left">Mauro Leidi<v-btn class="white--text" icon><v-icon size="24px">{{linkedin}}</v-icon></v-btn><br></div>
          <div style="text-align: left">Micheal Rust<v-btn class="white--text" icon><v-icon size="24px">{{linkedin}}</v-icon></v-btn><br></div>
          <div style="text-align: left">Nicky Baldwin<v-btn class="white--text" icon><v-icon size="24px">{{linkedin}}</v-icon></v-btn><br></div>
          </div>
        </v-card-text>

        <v-divider></v-divider>

        <v-card-text class="white--text">
          {{ new Date().getFullYear() }} — <strong>Applied Data Analysis (ADA) - EPFL</strong><v-btn class="white--text" icon href="https://github.com/epfl-ada/ada-2021-project-mmng"><v-icon size="24px">mdi-github</v-icon></v-btn>
        </v-card-text>
      </v-card>
    </v-footer>
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
      showBar: false,
      linkedin:
        'mdi-linkedin',
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
.topnav {
  overflow: hidden;
  background-color: white;
}

/* Style the links inside the navigation bar */
.topnav a {
  color: red;
  float: left;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  font-size: 17px;
}

/* Add a color to the active/current link */
.topnav a:valid {
  background-color: #04AA6D;
  color: white;
}

/* Right-aligned section inside the top navigation */
.topnav-right {
  float: right;
}
.topnav-right a:visited{
  color: grey;
}
.topnav-right a:hover{
  color: black;
}
ul {
  margin: 0;
}
</style>
