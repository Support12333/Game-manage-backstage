<template>
  <div>
    <inquire />
    <user-table />
  </div>
</template>

<script>
import Inquire from './components/Inquire.vue'
import UserTable from './components/UserTable.vue'
import GetUserInfoList from '@/api/page'
export default {
  data() {
    return {
      params: {
        page: 1,
        pageSize: 10,
      }
    }
  },
  components: {
    Inquire,
    UserTable
  },
  created() {
    console.log(66);
    this.getUserInfoList()
  },
  methods: {
    //获取列表数据
    async getUserInfoList() {
      const res = await GetUserInfoList(this.params)
      console.log(res, 'list');
    }
  }
}
</script>
<style lang="scss" scoped></style>
