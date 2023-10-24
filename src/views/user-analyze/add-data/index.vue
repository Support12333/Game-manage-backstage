<template>
  <div class="container">
    <inquire />
    <line-chart />
    <user-table :tabledata="tabledata" />
  </div>
</template>

<script>
import Inquire from './components/Inquire.vue'
import LineChart from './components/LineChart.vue'
import UserTable from './components/UserTable.vue'
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
      tabledata:[]
    }
  },
  components: {
    Inquire,
    LineChart,
    UserTable
  },
  created() {
    GetAddUserDataStatistics(this.params).then(res => {
      this.tabledata=res.data
    })
  }
}
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  color: #101010;
  font-weight: bold;
}
</style>
