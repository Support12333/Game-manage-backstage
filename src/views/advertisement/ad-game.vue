<template>
  <div class="ad-game">
    <el-row :gutter="200">
      <el-col :xs="12" :sm="12" :lg="8" v-for="(item, index) in datalist" :key="index" class="card-panel-col">
        <panel :title="item.title" :totality="item.totality" :today_text="item.today_text" :today="item.today"
          :yesterday_text="item.yesterday_text" :yesterday="item.yesterday" :colors="colors[index]" />
      </el-col>
    </el-row>
    <Select class="select" />
    <div class="table">
      <el-table :data="tableData" border style="width: 100%;" align="center" :header-cell-style="{
        height: '56px', color: '#101010', fontSize: '16px', 'text-align': 'center'
      }" :row-style="{ 'height': '20px', 'padding': '0' }">
        <el-table-column prop='sort' label="排序" min-width="100" align="center" />
        <el-table-column prop='carrier' label="载体" min-width="120" align="center" />
        <el-table-column prop='game_name' label="游戏名称" min-width="140" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">游戏名称</el-button>
          </template>
        </el-table-column>
        <el-table-column prop='ad_count' label="广告数" min-width="120" align="center" />
        <el-table-column prop='ad_show' label="广告展示（次）" min-width="120" align="center" />
        <el-table-column prop='ad_click' label="广告点击（次）" min-width="120" align="center" />
        <el-table-column prop='download' label="应用下载（次）" min-width="120" align="center" />
        <el-table-column prop='game_analysis' label="游戏分享（次）" min-width="120" align="center" />
        <el-table-column prop='river' label="导流数（次）" min-width="120" align="center" />
      </el-table>
    </div>
  </div>
</template>
<script>
import Panel from './components/Panel'
import Select from './components/Select'
export default {
  data() {
    return {
      datalist: [{
        title: "活跃在线用户数",
        totality: '418000',
        today_text: '今日',
        today: '9577',
        yesterday_text: '昨日',
        yesterday: '10056'
      },
      {
        title: "活跃在线用户数",
        totality: '418000',
        today_text: '今日',
        today: '9577',
        yesterday_text: '昨日',
        yesterday: '10056'
      }, {
        title: "活跃在线用户数",
        totality: '418000',
        today_text: '今日',
        today: '9577',
        yesterday_text: '昨日',
        yesterday: '10056'
      }],
      colors: ['#8098f2', '#f18f99', '#448787'],
      cols: [{
        prop: 'sort',
        label: '排序',
        width: '100',
        align: "center"
      }, {
        prop: 'type',
        label: '类型',
        width: '100',
        align: "center"
      }, {
        prop: 'carrier',
        label: '载体',
        width: '120',
        align: "center"
      }, {
        prop: 'game_name',
        label: '游戏名称',
        width: '140',
        align: "center"
      }, {
        prop: 'ad_count',
        label: '广告数',
        width: '120',
        align: "center"
      }, {
        prop: 'ad_show',
        label: '广告展示（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'ad_click',
        label: '广告点击（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'download',
        label: '应用下载（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'game_analysis',
        label: '游戏分享（次）',
        width: '120',
        align: "center"
      }, {
        prop: 'river',
        label: '导流数（次）',
        width: '120',
        align: "center"
      }],
      tableData: [{
        sort: 1,
        type: '竞技',
        carrier: 'COC',
        game_name: 1000,
        ad_count: 1000,
        ad_show: 10,
        ad_click: 99,
        download: 1009,
        game_analysis: 213,
        river: 123
      },
      ]
    }
  },
  components: { Panel, Select }
};
</script>
<style lang="scss" scoped>
.ad-game {
  .select {
    margin: 50px 0 10px;
  }
}
</style>
