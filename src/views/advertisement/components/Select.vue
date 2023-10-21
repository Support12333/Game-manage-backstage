<template>
  <div>
    <div class="inquire">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value" placeholder="综合排序" @change="getSynthesisValue">
            <el-option v-for="item in synthesis" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value2" placeholder="全部游戏" @change="getCarrierValue">
            <el-option v-for="item in carrier" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="5">
          <el-input v-model="input" placeholder="用户昵称/ID/邮箱/手机号"></el-input>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="2">
          <el-button type="primary" @click="inquire">查询</el-button>
        </el-col>
      </el-row>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      synthesis: [{
        value: '1',
        label: '广告展示'
      }, {
        value: '2',
        label: '广告点击'
      }, {
        value: '3',
        label: '应用下载'
      }, {
        value: '4',
        label: '导流'
      }, {
        value: '5',
        label: '分享'
      }],
      carrier: [{
        value: '1',
        label: '安卓'
      }, {
        value: '2',
        label: 'H5'
      }],
      input: '',
      value: '',
      value2: '',
    }
  },
  methods: {
    getSynthesisValue(val) {
      console.log('全部游戏' + val);
    },
    getCarrierValue(val) {
      console.log('全部游戏' + val);
    },
    inquire() {
      const input = this.input
      console.log(input);
    }
  },
};
</script>
<style lang="scss" scoped></style>
