<template>
  <div>
    <div class="inquire">
      <div class="title">用户管理</div>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :lg="5">
          <el-input v-model="params.userInfo" placeholder="用户昵称/ID/邮箱/手机号"></el-input>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value" placeholder="属性" @change="getstatsIdValue">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="16">
          <div class="date-select">
            <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期"
              end-placeholder="结束日期" value-format="yyyy-MM-dd">
            </el-date-picker>
            <el-button type="primary" @click="inquire">查询</el-button>
          </div>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" border style="width: 100%;margin-top: 30px;" align="center" :header-cell-style="{
      background: '#e3e3e3', height: '56px', color: '#101010', fontSize: '16px', 'text-align': 'center'
    }" :row-style="{ 'height': '20px', 'padding': '0' }">
      <el-table-column prop="id" label="ID" min-width="120">
      </el-table-column>
      <el-table-column prop="userName" label="昵称" min-width="200" align="center">
      </el-table-column>
      <el-table-column prop="userImg" label="图像" min-width="200" align="center">
      </el-table-column>
      <el-table-column prop="userSex" label="性别" min-width="140" align="center">
      </el-table-column>
      <el-table-column prop="userStatsName" label="属性" min-width="160" align="center">
      </el-table-column>
      <el-table-column prop="gameTimeAll" label="游戏时长" min-width="200" align="center">
      </el-table-column>
      <el-table-column prop="signTime" label="注册时间" min-width="240" align="center">
      </el-table-column>
      <el-table-column fixed="right" label="操作" min-width="140" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row.id)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { GetUserInfoList } from '@/api/page'
export default {
  data() {
    return {
      options: [],
      tableData: [],
      date: '',
      input: '',
      value: '',
      params: {
        userInfo: '',
        statsId: 0,
        startTime: '',
        endTime: '',
        page: 1,
        pageSize: 10,
      }
    }
  },
  created() {
    this.getUserInfoList()
  },
  methods: {
    //获取列表数据
    getUserInfoList() {
      GetUserInfoList(this.params).then(res => {
        this.tableData = res.data
      })
    },
    getstatsIdValue(val) {
      console.log('全部渠道' + val);
    },
    handleClick(id) {
      this.$router.push({ path: '/details', query: { id: id } })
    },
    //时间筛选
    inquire() {
      this.params.startTime=this.date[0]
      this.params.endTime = this.date[1]
      this.getUserInfoList()
    }
  }
}
</script>
<style lang="scss" scoped>
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
      margin-left: 20px;
    }
  }
}
</style>
