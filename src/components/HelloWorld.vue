<template>
  <div style=" text-align: justify;">
    <div class="col-12" ref="introduction" style="margin-right: auto;
    margin-left: auto;padding: 50px 15px 75px;max-width: 850px;">
      <div style="text-align: center; font-style: italic">
      Is it possible to analyze politics starting exclusively from the politicians' quotations? <br>
      Is it possible to extract significant information that allows us to extract meaningful insights about American politics?</div><br><br>
      Follow us along on our journey where we apply data analysis techniques to better understand political trends of the past 5 years.<br><br>
      The ensemble of all quotations of the members of a party is an excellent representation of the ideas and values of that party. In fact, these quotations represent the very vision of the political party. Starting from this reflection, let's analyze American politics starting from the quotes found in the Quotebank dataset.
      In Quotebank there are more than 7 million quotations of American politicians, among them, more than 6 million are of can be associated to 15000 politicians affiliated either to the Democratic Party or the Republican Party. <br><br>

      We have trained a machine learning model to predict the political affiliation of the speaker of a quote. With a rather simple model we have managed to achieve a 75% accuracy, which is quite a surprising result! This goes to show how polarized American politics have become nowadays. Both parties often have very clearly opposite opinions of topics such as climate change or abortion. <br><br>

      We will also use the our model and data to explore how a politician's opinions align with their party and perform time series analysis to analyse their evolution over time. <br><br>

      TODO maybe add some more into stuff.

      So hop on and come see the surprising power of data analysis in our modern day and age!

      <!-- As we will show later some there are multiple topics that show a clear polarization between the two political parties
      We have trained a machine learning model to classify these quotes to the corresponding political party. Our model associates a score that varies from 0 to 1 to each quotation representing the probability that the quote is said by a democrat. -->
    </div>
    <!--<Introduction ref="introduction"/>-->
    <Capitolo1 id="exploration"/>
    <div class="col-12" ref="introduction" style="margin-right: auto;
    margin-left: auto;padding: 50px 15px 75px;max-width: 850px;">

      <h3>Predicting the political affinity of quotes</h3>

      <h4>The model in numbers</h4>
      The most important question: Can the model understand something? And how good are its predictions?<br>
      On the test set, our model needs 8 quotations to obtain an accuracy greater than 80% on the prediction. In addition, if we try to classify a politician, the accuracy is 98,?%.<br>
      For a single quote, the accuracy exceeds 75%. This value may seem low if you don't consider the fact that the data is noisy. As one might expect, although the majority of the quotes of a politician have to do with politics, not all quotes do. Additionally, some of the quotes might not have enough words for the model to truly understand the context.
      <br><br>
      <h4>The model in practice</h4>
      First things first let’s see how some familiar faces are positioned in our model predictions:<br><br>
      <div style="width: 100%;margin: 0 auto;">
      <iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plotly.com/~ogim/19.embed?show_link=false" height="525" width="100%"></iframe>
      </div>
      <br><br>
      We immediately see that the model manages to separate politicians into the two categories. What's even more interesting is that the score reflects the following simple idea: the more radical politicians, such as Bernie Sanders, have a higher average score. This is due to the fact that, for our model, their quotations are easier to distinguish from the opposite party ones. Now we have an interpretation for this political score that we can keep in mind for future analysis. We can note that the timeserie of Alexandria Ocasio Cortez has a really high variance in the first years and the mean seems to increase. In facts, in the first years she has not many quotes associated and she was not as much into politics until 2008. <br><br>
      To inspect the per-quote accuracy we asked ourselves the following question: what are the restrictions we have to impose to make a robust prediction of the party a politician is affiliated to? Note that our model still does perform pretty well without restriction (x % on the test set and y% on test_set)<br>
      We first started to analyze our misclassified speakers and plotting the distribution of the number of quotes a misclassified speaker has:

      <br><br>IMMAGINE<br><br>
      Taking a closer look, we realize that 46% of our misclassified politicians have only one quote associated. We plotted these on the following graph. You can place your mouse over quotes to see what they say:
      <br><br>IMMAGINE<br><br>
      Among these quotes, we can notice 4 types of quotes:
      <ul style="padding-left: 50px">
        <li>quotes that lack context (e.g. “ “), please note that the quote are empty because in our preprocessing we perform stop-word removal.</li>
        <li>quotes that have nothing to do with politics (e.g. “ “)</li>
        <li>quotes where a politician expresses an opinion that tends to belong more to his opposite party (e.g. “”)</li>
        <li>quotes that should be correctly classified but the model failed to do so</li>
      </ul>
      <br>

      The residual 64% of misclassified quotes have more than one quote. To better visualize the issue, we decided to plot the average political score of each misclassified speaker with 95% confidence intervals using bootstrapping:
      <br><br>IMMAGINE<br><br>
      Here we see that x% of these predictions reside in both labels. So the variance of these speakers predictions is too high. So in conclusion: we need to set a minimum number of quotes to make a robust prediction of a speaker.
      <br>
      To decide where to set the cutoff, we calculate the accuracy of our predictions as a function of the number of quotes we have.<br><br>
      IMMAGINE<br><br>
      By setting  the minimum required accuracy at x%, we find that the minimum number of quotes a speaker needs for the model to make a robust prediction at 5.<br><br>

      Regarding the accuracy of a prediction with respect to the length of a quote, the plot here below shows that a quote has to have at least four non-stop words.
      <br><br>IMMAGINE<br><br>
      DISCUSS:<br>
      If we visualize the distribution of the scores of the quotes by separating the two classes, we realize that we can separate them into four parts.
      <div style="margin: 25px 0 25px 0;text-align: center">
      <img  width="80%" :src="require('@/assets/graphs/img_distribution.png')" alt="distribution"/>
      </div>
      Starting from the left, an exclusively Republican side, then a predominantly republican side, a predominantly democratic one and finally an exclusively democratic one.
      Starting from this idea, we took an interest in trending words by section and the result is very interesting and significant.
      First, let's look at the trending words that are specific to each area:
      we immediately notice that they are present above all for the exclusive republican and democratic areas. Specifically in the exclusively democratic area we find the following words:
      community, health, country, city, new. For the exclusively republican we find instead: american, government, trump and states.
      With the exception of the word 'new' these words are extremely significant for the vision of parties:
      on the one hand they are words related to the homeland and patriotism (Democrats) while on the other hand they are words related to the community, people and health (Republicans).
      <div style="margin: 25px 0 25px 0;text-align: center">
      <img width="80%" :src="require('@/assets/graphs/img_1(unique).png')" alt="words(unique)"/>
      </div>
      Now let's look at the words that are shared by several areas at the same time. Here, too, the speech just made is significantly reflected, in fact,
      although these words are present in all areas, we can see a greater tendency of Republicans towards words that concern America,
      and of Democrats for those that concern the people.
      <div style="margin: 25px 0 25px 0;text-align: center">
      <img width="80%" :src="require('@/assets/graphs/img_1(shared).png')" alt="words(shared)"/>
      </div>
      OVER TIME (MAURO):
      We showed that the model is able to accurately classify the political party to which a politician belongs and that ? quotations are sufficient for this purpose.
      For this reason, if a politician has many associated quotes,
      we are able to group them into small groups of quotes close in time and create a time-series that represents the political vision of that politician.
      By themselves the quotations with their scores are already timeseries, which we resample, for example with a monthly frequency,
      in order to decrease it's political score variance. This time series will be really usefull for the extraction meaningful insights about American politics. (see next chapter)
      <br><br>IMMAGINE<br><br>
    </div>
    <UseModel id="model"/>
    <div class="col-12" ref="introduction" style="margin-right: auto;
    margin-left: auto;padding: 50px 15px 75px;max-width: 850px;">
      Let's now use the time series to perform some interesting analyzes:<br>
      For example, we can be interested in the temporal variation of the political vision of various politicians. In this way we can find out, for example, who is the Republican politician whose ideas are becoming more polarized or who is the Democrat who is taking increasingly moderate positions. To do this we made linear regressions on the time series of the 10 most influential politicians for the two parties and they are presented in the following interactive plot. To view a single politician just double click on his name, to hide / show just click on the name. By passing with the mouse we can see the slope expressed as score / months which indicates the change in political vision.
      <br><br>
      <div style="width: 100%;margin: 0 auto;text-align: center">
      <iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plotly.com/~ogim/14.embed?showlink=false" height="525" width="100%"></iframe>
      </div>
      Now we can do the same analysis but for whole parities. To understand if the general ideas of the two parties are polarizing or becoming more similar over time. We plot the trend of the timeseries of the scores of the two parties and the associated linear regressions.
      <br><br>
      <div style="width: 100%;margin: 0 auto;text-align: center">
      <iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plotly.com/~ogim/16.embed?showlink=false" height="525" width="100%"></iframe>
    </div>
      Another very interesting analysis is to see by topic how the distribution of scores within a party varies, and how it varies over time. To do this, we filter the quotations by topic, and look at the associated scores for each parity. Below we show two interesting examples but this analysis could be done much more broadly.<br>
      Non politicians?
      <br>
      Can we identify
    </div>
    <div style="width: 100%;margin: 0 auto;">
      <iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plotly.com/~ogim/25.embed" height="525" width="100%"></iframe>
    </div>
    <div style="width: 100%;margin: 0 auto;">
    <iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plotly.com/~ogim/29.embed" height="525" width="100%"></iframe>
    </div>
    <div style="width: 100%;margin: 0 auto;">
    <iframe id="igraph" scrolling="no" style="border:none;" seamless="seamless" src="https://plotly.com/~ogim/34.embed" height="525" width="100%"></iframe>
    </div>
  </div>
</template>

<script>
//import Introduction from "./Introduction";
import Capitolo1 from "./Capitolo1";
import UseModel from "./UseModel";
export default {
  name: 'HelloWorld',
  components: {Capitolo1,UseModel},
  props: {
    msg: String
  },
  data() {
    return {
      series: [{
        name: "Desktops",
        data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
      }],
      chartOptions: {
        chart: {
          height: 350,
          type: 'line',
          zoom: {
            enabled: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          curve: 'straight'
        },
        title: {
          text: 'Product Trends by Month',
          align: 'left'
        },
        grid: {
          row: {
            colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
            opacity: 0.5
          },
        },
        xaxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
        }
      },
    }
  },
  methods:{
    scrollMeTo(refName) {
      var element = this.$refs[refName];
      var top = element.offsetTop;
      window.scrollTo(0, top);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hsg{
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: content-box;
}
li{
  margin: 10px 0;
}
h4{
  font-size: 1.875rem;
}
.idgraph {
  -webkit-transform: scale(0.75);
}
</style>
