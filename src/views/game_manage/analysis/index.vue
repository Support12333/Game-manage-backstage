<template>
  <div class="analysis">
    <div class="usertable">
      <el-table :data="tableData" border style="width: 100%;" :row-class-name="tableRowClassName" align="center"
        :header-cell-style="{
          height: '56px', color: '#101010', fontSize: '16px', padding: '0 40px', 'text-align': 'center'
        }" :row-style="{ 'height': '20px', 'padding': '0' }">
        <template v-for="(item, index) in cols">
          <el-table-column :key="index" :prop=item.prop :label="item.label" :min-width="item.width" :align="item.align" />
        </template>
      </el-table>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      cols: [{
        prop: 'ranking',
        label: '排名',
        width: '120',
        align: "center"
      }, {
        prop: 'type',
        label: '类型',
        width: '120',
        align: "center"
      }, {
        prop: 'game-name',
        label: '游戏名称',
        width: '120',
        align: "center"
      }, {
        prop: 'user-number',
        label: '用户数',
        width: '120',
        align: "center"
      }, {
        prop: 'ad-count',
        label: '广告数',
        width: '120',
        align: "center"
      }, {
        prop: 'advertising',
        label: '广告展示（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'game-analysis',
        label: '游戏分析（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'download',
        label: '应用下载（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'river-diversion',
        label: '导流数（次）',
        width: '120',
        align: "center"
      }],
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
        sex: '女',
        stats: '未',
        sex1: '女',
        stats1: '未',
        sex2: '女',
        stats2: '未'
      },
      ]
    }
  },
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    },
    handleClick() {
      console.log('详情');
    }
  },
}
</script>
<style lang="scss" scoped>
.analysis {}
</style>
