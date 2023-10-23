<template>
  <div class="container">
    <inquire />
    <line-chart />
    <user-table />
  </div>
</template>

<script>
import Inquire from './components/Inquire.vue'
import LineChart from './components/LineChart.vue'
import UserTable from './components/UserTable.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    Inquire,
    LineChart,
    UserTable
  },

}
</script>
<style lang="scss" scoped>
.title {
  font-size: 18px;
  color: #101010;
  font-weight: bold;
}
</style>
