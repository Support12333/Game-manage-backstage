<template>
  <div class="new-trend">
    <div class="upper">
      <div class="title">新增趋势</div>
      <div class="right-btn">
        <el-button>天</el-button>
        <el-button>周</el-button>
        <el-button>月</el-button>
      </div>
    </div>
    <el-row style="background-color: #fff;">
      <div id="maychar" style="height:400px;width:100%"></div>
    </el-row>
  </div>
</template>
<script>
import echarts from 'echarts'
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
      var myChart = echarts.init(document.getElementById('maychar'));

      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          backgroundColor: '#fff',
          padding: [10, 15],
          textStyle: {
            color: '#333'
          },
          extraCssText:'box-shadow:0 0 10px rgba(0,0,0,0.2)',
          snap: true,

        },
        xAxis: {
          type: 'category',
          data: ['周一', '周二', '周三', '周四', '周五', '周六', '周日']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '销售额',
            type: 'line',
            data: [120, 132, 101, 144, 150, 130, 110],
            color: '#6696ee'
          }
        ]
      }
      myChart.setOption(option);
    }

  }
};
</script>
<style lang="scss" scoped>
.new-trend {
  margin-top: 30px;

  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 32px;
    background: #e3e3e3;

    .title {
      font-size: 16px;
      color: #101010;
      font-weight: bold;
    }

    .right-btn {
      .el-button+.el-button {
        margin-left: 0;
      }

      .el-button {
        padding: 10px 20px;
      }
    }
  }
}
</style>
