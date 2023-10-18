<template>
  <div class="panelgroup">
    <el-row>
      <el-col :xs="12" :sm="12" :lg="{ span: '24-5' }" v-for="(item, index) in datalist" :key="index"
        class="card-panel-col">
        <div class="content">
          <div class="title">{{ item.title }}</div>
          <div class="totality">{{ item.totality }}</div>
          <div class="card-time">
            <div class="card-left">
              <div class="text">今日</div>
              <div class="today">{{ item.today }}</div>
            </div>
            <div class="card-right">
              <div class="text">昨日</div>
              <div class="yesterday">{{ item.yesterday }}</div>
            </div>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
export default {
  name: '',
  data() {
    return {
      datalist: [{
        title: "活跃在线用户数",
        totality: '418000',
        today_text:'今日',
        today: '9577',
        yesterday_text:'昨日',
        yesterday: '10056'
      },
      {
        title: "活跃在线用户数",
        totality: '418000',
        today_text:'今日',
        today: '9577',
        yesterday_text:'昨日',
        yesterday: '10056'
      }, {
        title: "活跃在线用户数",
        totality: '418000',
        today_text:'今日',
        today: '9577',
        yesterday_text:'昨日',
        yesterday: '10056'
      }, {
        title: "活跃在线用户数",
        totality: '418000',
        today_text:'今日',
        today: '9577',
        yesterday_text:'昨日',
        yesterday: '10056'
      }, {
        title: "活跃在线用户数",
        totality: '418000',
        today_text:'今日',
        today: '9577',
        yesterday_text:'昨日',
        yesterday: '10056'
      }],
      colors: ['#bc8ef7', '#f18f99', '#8098f2', '#c3c34a', '#448787']
    }
  }
}
</script>
<style lang="scss" scoped>
.panelgroup {
  margin: 0 -10px;
  .card-panel-col {
    padding: 0 10px;
    margin: 8px 0;
    .content {
      height: 148px;
      font-size: 14px;
      color: #fff;
      padding: 16px 30px;
      background: #bc8ef7;
      border-radius: 10px;

      .totality{
        font-size: 22px;
        font-weight: bold;
        margin-top: 8px;
      }

      .card-time{
        display: flex;
        justify-content: space-between;
        margin-top: 20px;

        .text{
          margin-bottom: 8px;
        }
      }
    }
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
