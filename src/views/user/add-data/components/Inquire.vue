<template>
  <div class="inquire">
    <div class="title">新增用户分析</div>
    <el-row>
      <el-col :xs="12" :sm="12" :lg="3">
        <el-select v-model="channel" placeholder="全部渠道" @change="getChannelValue">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="3">
        <el-select v-model="edition" placeholder="全部版本" @change="getEditionValue">
          <el-option v-for="item in options2" :key="item.value" :label="item.label" :value="item.value">
          </el-option>
        </el-select>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="14">
        <div class="date-select">
          <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期"
            end-placeholder="结束日期" value-format="yyyy-MM-dd">
          </el-date-picker>
          <el-button type="primary" @click="inquire">查询</el-button>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      options: [{
        value: '1',
        label: 'Google Play'
      }, {
        value: '2',
        label: 'FaceBook'
      }, {
        value: '3',
        label: 'TikTok'
      }],
      options2: [{
        value: '1',
        label: '1.0.2'
      }, {
        value: '2',
        label: '1.0.3'
      }, {
        value: '3',
        label: '1.0.4'
      }],
      channel:'',
      edition:'',
      date: ''
    }
  },
  methods: {
    getChannelValue(val) {
      console.log('全部渠道' + val);
    },
    getEditionValue(val) {
      console.log('全部版本' + val);
    },
    inquire() {
      const star = this.value[0]
      const end = this.value[1]
      // console.log('开始时间:', star, '结束时间:', end);
      this.$emit('DateSelect', star, end);
    }
  }
};
</script>
<style lang="scss" scoped>
.inquire {
  background: #fff;
  padding: 20px 32px;

  .title {
    font-size: 16px;
    color: #101010;
    font-weight: bold;
    margin-bottom: 20px;
  }

  .date-select {
    .el-button {
      margin-left: 26px;
    }
  }

  .el-col {
    margin-right: 26px;
  }
}
</style>
