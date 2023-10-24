<template>
  <div class="container">
    <div class="inquire">
    <div class="title">新增用户分析</div>
    <el-row :gutter="20">
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
    <div class="new-trend">
      <div class="upper">
        <div class="title">新增趋势</div>
        <div class="right-btn">
          <el-button>天</el-button>
          <el-button @click="">周</el-button>
          <el-button>月</el-button>
        </div>
      </div>
      <el-row style="background-color: #fff;">
        <div id="maychar" style="height:400px;width:100%"></div>
      </el-row>
    </div>
    <el-table :data="tabledata" style="width: 100%;" :header-cell-style="{
      background: '#e3e3e3', height: '56px', color: '#101010', fontSize: '16px', padding: '0 32px'
    }" :cell-style="{ 'padding': '0 40px', 'height': '50px' }">
      <el-table-column prop="dateTime" label="日期" min-width="100%">
      </el-table-column>
      <el-table-column prop="count" label="新增用户" min-width="100%">
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import echarts from 'echarts'
import { GetAddUserDataStatistics } from '@/api/page'
export default {
  data() {
    return {
      params: {
        type: 0,
        channel: 0,
        version: 0,
        startTime: "",
        endTime: ""
      },
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
      date: '',
      tabledata: [],
      xArray: ['周一', '周二', '周三', '周四', '周五', '周六', '周日'],
      yArray:[120, 132, 101, 144, 150, 130, 110],
    }
  },
  created() {

  },
  mounted() {

    GetAddUserDataStatistics(this.params).then(res => {
      this.tabledata = res.data
      if (res.data) {
        this.xArray = []
        this.yArray =[]
        res.data.map(item => {
          this.xArray.push(item.dateTime)
          this.yArray.push(item.count)
       })
      }
      this.getCharts();
    })
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
    },

    getCharts() {
      var myChart = echarts.init(document.getElementById('maychar'));

      var option = {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow',
          },
          backgroundColor: '#fff',
          padding: [10, 15],
          textStyle: {
            color: '#333'
          },
          extraCssText: 'box-shadow:0 0 10px rgba(0,0,0,0.2)',
          snap: true,

        },
        xAxis: {
          type: 'category',
          data: this.xArray
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            name: '用户注册',
            type: 'line',
            data: this.yArray,
            color: '#6696ee'
          }
        ]
      }
      myChart.setOption(option);
    }



  },
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  color: #101010;
  font-weight: bold;
}
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
}

.new-trend {
  margin-top: 30px;

  .upper {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 56px;
    padding: 0 32px;
    background: #e3e3e3;

    .title {
      font-size: 16px;
      color: #101010;
      font-weight: bold;
    }

    .right-btn {
      .el-button+.el-button {
        margin-left: 0;
      }

      .el-button {
        padding: 10px 20px;
      }
    }
  }
}
</style>
