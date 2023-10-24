<template>
  <div class="analysis">
    <div class="title">游戏分析</div>
    <div class="table">
      <el-table :data="tableData" border style="width: 100%;" align="center" :header-cell-style="{
        height: '56px', color: '#101010', fontSize: '16px', 'text-align': 'center'
      }" :row-style="{ 'height': '20px', 'padding': '0' }">
        <template v-for="(item, index) in cols">
          <el-table-column :key="index" :prop=item.prop :label="item.label" :min-width="item.width" :align="item.align" />
        </template>
      </el-table>
    </div>
  </div>
</template>
<script>
import { GetPageByGameAnalysis } from '@/api/game'
export default {
  data() {
    return {
      cols: [{
        prop: 'rank',
        label: '排名',
        width: '100',
        align: "center"
      }, {
        prop: 'typeName',
        label: '类型',
        width: '120',
        align: "center"
      }, {
        prop: 'gameName',
        label: '游戏名称',
        width: '140',
        align: "center"
      }, {
        prop: 'userNum',
        label: '用户数',
        width: '120',
        align: "center"
      }, {
        prop: 'advNum',
        label: '广告数',
        width: '120',
        align: "center"
      }, {
        prop: 'advGameNum',
        label: '广告展示（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'gameShareNum',
        label: '游戏分析（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'downloadNum',
        label: '应用下载（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'diversionNum',
        label: '导流数（次）',
        width: '120',
        align: "center"
      }],
      tableData: [],
      params:{ page: 1, pageSize: 10,}
    }
  },
  created() {
    GetPageByGameAnalysis(this.params).then(res => {
      console.log(res);
      this.tableData = res.data
    })
  },
  methods: {

  },
}
</script>
<style lang="scss" scoped>
.analysis {
  background: #fff;
  padding: 32px;

  .title {
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #101010;
    font-weight: bold;
    margin-bottom: 32px;
  }
}
</style>
