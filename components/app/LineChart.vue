<script>
import { Line } from 'vue-chartjs'

export default {
  extends: Line,
  props: {
    chartdata: {
      type: Object, 
      default() {
        return {
          labels: ['Aug','Sep','Oct'],
          datasets: [
          ]
        }
      }
    },
  },
  mounted () {
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
              display: 0,
              // gridLines: 0,
              // ticks: {
              //   display: false
              // },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
              }
            }],
            xAxes: [{
              // display: 0,
              // gridLines: 0,
              ticks: {
                // display: false,
                fontFamily: "Rajdhani",
              },
              gridLines: {
                zeroLineColor: "transparent",
                drawTicks: false,
                display: false,
                drawBorder: false
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