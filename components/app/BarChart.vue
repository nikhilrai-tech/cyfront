<script>
import { Bar } from 'vue-chartjs'

export default {
  extends: Bar,
  props: {
    chartdata: {
      type: Object, 
      default() {
        return {
          labels: ['Aug','Sep','Oct'],
          datasets: [
          ],
          max: 9
        }
      }
    },
  },
  mounted () {
    // console.log(this.chartdata.max)
    // console.log(this.chartdata.datasets)
    // console.log(Math.max.apply(Math, this.chartdata.datasets.map(function(prog) { return prog.y; })) + 7);
    this.renderChart(this.chartdata, {
          global: {defaultFont: 'Rajdhani',},
          responsive: true,
          maintainAspectRatio: false,
          // scales: {
          //   y: {
          //       type: 'linear',
          //       min: 0,
          //       max: 4
          //   }
          // },
          scales: {
            yAxes: [{
              // display: 0,
              // gridLines: 0,
              // ticks: {
              //   display: false
              // },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              },
              ticks: {
                suggestedMin: 0,
                suggestedMax: this.chartdata.max,
                // padding: 20,
                // fontColor: "#2380f7",
              }
            }],
            xAxes: [{
              // display: 0,
              // gridLines: 0,
              ticks: {
                // display: false,
                fontFamily: "Rajdhani",
              },
              barPercentage: 0.1,
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                // display: false,
                // drawBorder: false
              }
            }]
          },
          layout: {
            padding: 15
          },
          plugins: {
              title: {display: true, text: 'Reports'},
              legend: {
              }
          }
        })
  }
}
</script>

<style>
</style>