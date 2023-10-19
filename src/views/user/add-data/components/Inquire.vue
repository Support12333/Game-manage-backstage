<template>
  <div class="inquire">
    <div class="title">新增用户分析</div>
    <el-row>
      <el-col :xs="12" :sm="12" :lg="3">
        <Select :title="'全部渠道'" :options="options" @sclectchange="getChannelValue"></Select>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="3">
        <Select :title="'全部版本'" :options="options2" @sclectchange="getEditionValue"></Select>
      </el-col>
      <el-col :xs="12" :sm="12" :lg="12">
        <dateSelect @DateSelect="getDateSelect" />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Select from '@/components/Select'
import DateSelect from '@/components/DateSelect'
export default {
  data() {
    return {
      options: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }],
      options2: [{
        value: '选项1',
        label: '黄金糕'
      }, {
        value: '选项2',
        label: '双皮奶'
      }, {
        value: '选项3',
        label: '蚵仔煎'
      }, {
        value: '选项4',
        label: '龙须面'
      }, {
        value: '选项5',
        label: '北京烤鸭'
      }]
    }
  },
  components: {
    Select,
    DateSelect
  },
  methods: {
    getChannelValue(val) {
      console.log('全部渠道' + val);
    },
    getEditionValue(val) {
      console.log('全部版本' + val);
    },
    getDateSelect(star, end) {
      console.log(star, end);
    }
  }
};
</script>
<style lang="scss" scoped>
.inquire {
  background: #fff;
  padding: 20px 40px;

  .title {
    margin-bottom: 20px;
  }

  .el-col {
    margin-right: 26px;
  }
}
</style>
