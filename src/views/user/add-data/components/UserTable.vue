<template>
<div class="usertable">
  <el-table :data="tableData" style="width: 100%;" :row-class-name="tableRowClassName" :header-cell-style="{
  background:'#e3e3e3',height:'56px',color:'#101010',fontSize:'16px',padding:'0 40px'}" :cell-style="{'padding':'0 40px', 'height': '50px'}">
    <el-table-column prop="date" label="日期" min-width="100%">
    </el-table-column>
    <el-table-column prop="name" label="姓名" min-width="100%">
    </el-table-column>
  </el-table>
</div>
</template>
<script>
import { backgroundColor } from 'echarts/lib/theme/dark';

export default {
  methods: {
    tableRowClassName({ row, rowIndex }) {
      if (rowIndex === 1) {
        return 'warning-row';
      } else if (rowIndex === 3) {
        return 'success-row';
      }
      return '';
    }
  },
  data() {
    return {
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄',
      }, {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }]
    }
  }
}
</script>
<style lang="scss" scoped>
.usertable{
  margin-top: 30px;


}
.el-table__header{
    border: 1px solid red;
  }
</style>
