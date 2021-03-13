<template>
  <div id="app" class="mt-4">
    <!-- 父元件切換資料內容，並重新渲染圖表 -->
    <select v-model="chartdataloaded">
      <option v-for="(item, index) in test" :key="index" :value="item">
         {{ index + 2020 }}
      </option>
    </select>
    <!--
      Chart.vue 模組
      chart_loaded 是當圖表資料為 API 非同步行為時，增加的"讀取後顯示判斷"
    -->
    <div id="Chart">
      <Chart v-if="chart_loaded" :chart-data="chartdataloaded" />
    </div>
  </div>
</template>

<script>
import Chart from '@/components/Chart.vue'

export default {
  components: {
    Chart
  },
  data () {
    return {
      chart_loaded: true /* 圖表讀取 */,
      chartdataloaded: {
        labels: [
          '一月',
          '二月',
          '三月',
          '四月',
          '五月',
          '六月',
          '七月',
          '八月',
          '九月',
          '十月',
          '十一月',
          '十二月'
        ],
        datasets: [
          {
            label: '每月業績流量',
            borderColor: 'red',
            pointBackgroundColor: 'red',
            borderWidth: 1,
            pointBorderColor: 'white',
            data: [40, 35, 10, 40, 39, 80, 40, 50, 80, 60, 75, 90]
          }
        ]
      },
      test: [
        {
          labels: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ],
          datasets: [
            {
              label: '每月業績流量',
              borderColor: 'red',
              pointBackgroundColor: 'red',
              borderWidth: 1,
              pointBorderColor: 'white',
              data: [40, 35, 10, 40, 39, 80, 40, 50, 80, 60, 75, 90]
            }
          ]
        },
        {
          labels: [
            '一月',
            '二月',
            '三月',
            '四月',
            '五月',
            '六月',
            '七月',
            '八月',
            '九月',
            '十月',
            '十一月',
            '十二月'
          ],
          datasets: [
            {
              label: '產品銷售數量',
              borderColor: 'skyblue',
              pointBackgroundColor: 'skyblue',
              borderWidth: 1,
              pointBorderColor: 'white',
              data: [20, 10, 30, 15, 35, 22, 20, 20, 10, 30, 15, 35, 22, 20]
            }
          ]
        }
      ]
    }
  }
}
</script>
