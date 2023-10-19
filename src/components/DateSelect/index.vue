<template>
  <div class="date-select">
    <el-date-picker v-model="value" type="daterange" range-separator="至" start-placeholder="开始日期" end-placeholder="结束日期" value-format="yyyy-MM-dd">
    </el-date-picker>
    <el-button type="primary" @click="inquire">查询</el-button>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value:''
    };
  },
  methods: {
    inquire() {
      const star = this.value[0]
      const end = this.value[1]
      // console.log('开始时间:', star, '结束时间:', end);
      this.$emit('DateSelect', star,end);
    }
  },
};
</script>
<style lang="scss" scoped>
.date-select {
  .el-button{
    margin-left: 26px;
  }
}

</style>
