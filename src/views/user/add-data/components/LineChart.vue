<template>
  <div id="maychar" style="height:400px;width:100%"></div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
  mounted() {
    // 在通过mounted调用即可
    this.getCharts();
  },
  methods: {
    getCharts() {
      const chartBox = this.$echarts.init(document.getElementById("maychar"));
      const option = {
        xAxis: {
          type: 'category',
          data: ['A', 'B', 'C']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 250, 150],
            type: 'line',
            lineStyle: {
              normal: {
                color: '#5c8fed',
              }
            }
          }
        ]
      };
      chartBox.setOption(option);
      // 根据页面大小自动响应图表大小
      window.addEventListener("resize", function () {
        chartBox.resize();
      });
    }

  }
};
</script>
<style lang="scss" scoped></style>
