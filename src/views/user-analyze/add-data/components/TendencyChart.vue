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
      <line-chart />
    </el-row>
  </div>
</template>
<script>
import LineChart from './LineChart'
export default {
  data() {
    return {
    }
  },
  components: {
    LineChart
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
