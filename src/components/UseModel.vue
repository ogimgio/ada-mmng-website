<template>
  <div class="container">
    <img :src="require('@/assets/chartecco.jpeg')" alt="Snow" style=" width: 100%;
  z-index: 0;height: 500px;object-fit: cover;filter: blur(10px);">
    <!--<h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">The social network for epic content</h1>-->
    <h2 style="font-weight: 900;font-size: 75px; color: #212F3E;" class="centered">
      HOW CAN WE USE OUR MODEL?
      <hr>
    </h2>
  </div>
</template>

<script>
export default {
  name: "Capitolo1"
}
</script>

<style scoped>
hr {
  width: 50%;
  margin:auto;
  border: none;
  height: 5px;
  /* Set the hr color */
  color: #333; /* old IE */
  background-color: #333;
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

</style>

