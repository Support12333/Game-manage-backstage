<template>
  <div class="home-container">
    <div class="panel">
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :lg="{ span: '24-5' }" v-for="(item, index) in datalist" :key="index"
          class="card-panel-col">
          <panel :title="item.title" :totality="item.totality" :today_text="item.today_text" :today="item.today"
            :yesterday_text="item.yesterday_text" :yesterday="item.yesterday" :colors="colors[index]" />
        </el-col>
      </el-row>
    </div>
    <el-row :gutter="20" style="margin-top: 32px;">
      <el-col :xs="12" :sm="12" :lg="16">
        <line-chart />
      </el-col>
      <el-col :xs="12" :sm="12" :lg="8" class="left-panel">
        <template v-for="(item, index) in datalist2">
          <panel :key="index" :title="item.title" :totality="item.totality" :today_text="item.today_text"
            :today="item.today" :yesterday_text="item.yesterday_text" :yesterday="item.yesterday"
            :colors="colors[index]" />
        </template>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import Panel from './components/Panel.vue'
import LineChart from './components/LineChart.vue'

export default {
  name: 'home',
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
      }, {
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
      datalist2: [{
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
      }],
      colors: ['#bc8ef7', '#f18f99', '#8098f2', '#c3c34a', '#448787']
    }
  },
  components: {
    Panel,
    LineChart
  }
}
</script>

<style lang="scss" scoped>
.home-container {
  .left-panel{

  }
}


@media (min-width: 992px) {
  .el-col-lg-24-5 {
    width: 33.3%;
  }
}

@media (min-width: 1350px) {
  .el-col-lg-24-5 {
    width: 20%;
  }
}
</style>
