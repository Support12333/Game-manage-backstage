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
<style lang="scss" scoped>
.new-trend {
  margin-top: 30px;

  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 40px;
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
