<template>
  <div style="padding-top: 50px;padding-left: 150px;padding-right: 150px; padding-bottom:100px;font-size: 25px">
  Is it possible to analyze politics starting exclusively from the politicians' quotations? Is it possible to extract significant information that allows us to analyze the current situation in depth? Follow us along and we will show our attempt to do so using Quotebank dataset.<br><br>
  There is nothing that describes a political party better than the quotes of its politicians. In fact, the whole of these quotations is the very vision of the political party. Starting from this reflection, let's analyze American politics starting from the quotes found in the Quotebank dataset.<br>
  In quotebanks there are more than 7 million quotations of American politicians of which more than six million are of about fifteen thousand politicians affiliated to the Democratic Party or the Republican Party. <br><br>
  We have trained a machine learning model to classify these quotes to the corresponding political party. Sentences with fewer than x words do not contain enough meaning and have therefore been discarded. Our model therefore associates a score that varies from 0 (= 100% Republican) to 0.5 (= 100% democratic) to each quotation that is given as an input.
  </div>
  <!--<section>
    <v-parallax :src="'https://firebasestorage.googleapis.com/v0/b/endorfinevue.appspot.com/o/assets%2FNight-Club-Clubbing-Jobs-Abroad2.jpg?alt=media&token=82bbda7d-5df4-430b-9217-adaf1c8485c5'" height="600">
      <v-layout column align-center justify-center class="white--text">
        <h1 class="white--text mb-2 display-1 text-xs-center" style="font-weight: 900; text-shadow: 3px 2px #000000">The social network for epic content</h1>
        <div class="white--text subheading mb-3 text-xs-center" style="font-weight: 900; text-shadow: 2px 2px #000000">Unlesh your creativity without limitations</div>
        <v-btn class="blue lighten-2 mt-5" dark large href="/pre-made-themes">
          Get Started
        </v-btn>
      </v-layout>
    </v-parallax>
  </section>-->
</template>

<script>
export default {
  name: "Introduction"
}
</script>

<style scoped>

</style>
