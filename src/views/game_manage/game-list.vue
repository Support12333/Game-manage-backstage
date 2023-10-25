<template>
  <div>
    <div class="inquire">
      <div class="title">游戏列表</div>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value" placeholder="全部游戏" @change="getValue">
            <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <div class="gametable">
      <el-button type="primary" style="float: right;margin-bottom: 8px;" @click="addClick">添加游戏</el-button>
      <el-table :data="tableData" border style="width: 100%;" align="center" :header-cell-style="{
        height: '56px', color: '#101010', fontSize: '16px', 'text-align': 'center'
      }" :row-style="{ 'height': '20px', 'padding': '0' }">
        <template v-for="(item, index) in cols">
          <el-table-column :key="index" :prop=item.prop :label="item.label" :min-width="item.width" :align="item.align" />
        </template>
        <el-table-column fixed="right" label="操作" min-width="140" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">植入广告</el-button>
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { GetpageByGame } from '@/api/game'
export default {
  data() {
    return {
      options: [{
        value: '1',
        label: '羊了个羊'
      }, {
        value: '2',
        label: '忍着神'
      }, {
        value: '3',
        label: '米兔环境'
      }],
      cols: [{
        prop: 'id',
        label: '排序',
        width: '100',
        align: "center"
      }, {
        prop: 'typeName',
        label: '类型',
        width: '100',
        align: "center"
      }, {
        prop: 'carrierName',
        label: '载体',
        width: '120',
        align: "center"
      }, {
        prop: 'languageName',
        label: '语言',
        width: '120',
        align: "center"
      }, {
        prop: 'gameLogo',
        label: '游戏LOGO',
        width: '140',
        align: "center"
      }, {
        prop: 'gameName',
        label: '游戏名称',
        width: '140',
        align: "center"
      }, {
        prop: 'createName',
        label: '添加人',
        width: '120',
        align: "center"
      }, {
        prop: 'createTime',
        label: '添加时间',
        width: '120',
        align: "center"
      }],
      tableData: [],
      value: '',
      params: {
        page: 1,
        pageSize: 10,
      }
    }
  },

  created() {
    this.getpageByGame()
  },
  methods: {
    getValue(val) {
      console.log('全部游戏' + val);
    },
    addClick() {
      this.$router.push({ path: '/add-game' })
    },
    getpageByGame() {
      GetpageByGame(this.params).then(res => {
        console.log(res);
        this.tableData = res.data
      })
    }

  }
};
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
}

.gametable {
  margin-top: 30px;
}
</style>
