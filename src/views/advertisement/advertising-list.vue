<template>
  <div class="table">
    <div class="inquire">
      <div class="title">广告列表</div>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value" placeholder="全部游戏" @change="getValue">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <el-button type="primary" style="float: right;margin-bottom: 8px;" @click="addClick">添加广告</el-button>
    <el-table :data="tableData" border style="width: 100%;" align="center" :header-cell-style="{
      height: '56px', color: '#101010', fontSize: '16px', 'text-align': 'center'
    }" :row-style="{ 'height': '20px', 'padding': '0' }">
      <template v-for="(item, index) in cols">
        <el-table-column :key="index" :prop=item.prop :label="item.label" :min-width="item.width" :align="item.align" />
      </template>
    </el-table>
  </div>
</template>
<script>
import { GetAdvList } from '@/api/advertisement'
export default {
  data() {
    return {
      options: [{
        value: '1',
        label: '羊了个羊'
      }, {
        value: '2',
        label: '忍着神'
      }, {
        value: '3',
        label: '米兔环境'
      }],
      cols: [{
        prop: 'sort',
        label: '排序',
        width: '100',
        align: "center"
      }, {
        prop: 'id',
        label: '广告ID',
        width: '100',
        align: "center"
      }, {
        prop: 'advTypeId',
        label: '类型',
        width: '120',
        align: "center"
      }, {
        prop: 'advName',
        label: '广告名称',
        width: '120',
        align: "center"
      }, {
        prop: 'advImg',
        label: '广告封面',
        width: '140',
        align: "center"
      }, {
        prop: 'ad_address',
        label: '游戏名称',
        width: '140',
        align: "center"
      }, {
        prop: 'add_time',
        label: '添加时间',
        width: '120',
        align: "center"
      }],
      tableData: [],
      params: {
        page: 1,
        pageSize: 10
      }
    }
  },
  created() {
    this.getPageByGameAdv()
  },
  methods: {
    getValue(val) {
      console.log('全部游戏' + val);
    },
    addClick() {
      this.$router.push({ path: '/add-game' })
    },
    getAdvList() {
      GetAdvList(this.params).then(res => {
        this.tableData = res.data
      })
    }
  }
};
</script>
<style lang="scss" scoped>
.inquire {
  background: #fff;
  padding: 20px 32px;
  margin-bottom: 26px;

  .title {
    font-size: 16px;
    color: #101010;
    font-weight: bold;
    margin-bottom: 20px;
  }
}
</style>
