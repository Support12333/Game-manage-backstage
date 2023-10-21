<template>
  <div class="analysis">
    <div class="title">游戏分析</div>
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
        width: '100',
        align: "center"
      }, {
        prop: 'type',
        label: '类型',
        width: '120',
        align: "center"
      }, {
        prop: 'game_name',
        label: '游戏名称',
        width: '140',
        align: "center"
      }, {
        prop: 'user_number',
        label: '用户数',
        width: '120',
        align: "center"
      }, {
        prop: 'ad_count',
        label: '广告数',
        width: '120',
        align: "center"
      }, {
        prop: 'advertising',
        label: '广告展示（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'game_analysis',
        label: '游戏分析（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'download',
        label: '应用下载（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'river_diversion',
        label: '导流数（次）',
        width: '120',
        align: "center"
      }],
      tableData: [{
        ranking: 1,
        type: '竞技',
        game_name: 'COC',
        user_number: 1000,
        ad_count: 1000,
        advertising: 10,
        game_analysis: 99,
        download: 1009,
        river_diversion:123,
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
.analysis {
  background: #fff;
  padding: 32px;

  .title{
    display: flex;
    align-items: center;
    font-size: 18px;
    color: #101010;
    font-weight: bold;
    margin-bottom: 32px;
  }
}
</style>
