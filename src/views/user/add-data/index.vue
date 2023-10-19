<template>
  <div class="container">
    <inquire />
    <tendency-chart />
    <user-table />
  </div>
</template>

<script>
import Inquire from './components/Inquire.vue'
import TendencyChart from './components/TendencyChart.vue'
import UserTable from './components/UserTable.vue'
export default {
  data() {
    return {
    }
  },
  components: {
    Inquire,
    TendencyChart,
    UserTable
  },

}
</script>
<style lang="scss" scoped>
.container {
  .title {
    font-size: 18px;
    color: #101010;
    font-weight: bold;
  }
}
</style>
