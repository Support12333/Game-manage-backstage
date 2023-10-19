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
    padding: 12px 40px;
    background: #e3e3e3;

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
