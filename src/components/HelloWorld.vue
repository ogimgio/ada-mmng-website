<template>
  <div>
    <h1 style="margin-bottom: 30px">ADA Quotebank Project - The AI Politologist</h1>
    <div class="hsg">
      <div style="margin-bottom: 50px">Our project consist in the analysis of the political inclination of a politician. Here we illustrate it below.</div>
    <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>
      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>

      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>

      <apexchart type="line" height="350" :options="chartOptions" :series="series"></apexchart>

    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
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
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.hsg{
  max-width: 1080px;
  margin: 0 auto;
  padding: 0 1rem;
  box-sizing: content-box;
}
</style>
