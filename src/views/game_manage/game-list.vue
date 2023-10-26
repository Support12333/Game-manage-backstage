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
      <el-button type="primary" style="float: right;margin-bottom: 20px;" @click="addClick">添加游戏</el-button>
      <div class="table">
        <el-table :data="tableData" border style="width: 100%;" align="center" :header-cell-style="{
          height: '56px', color: '#101010', fontSize: '16px', 'text-align': 'center'
        }" :row-style="{ 'height': '20px', 'padding': '0' }">
         <el-table-column label="序号" type="index" width="100" align="center">
          <template scope="scope">
            <span>{{ (params.page - 1) * params.pageSize + scope.$index + 1 }}</span>
          </template>
        </el-table-column>
          <template v-for="(item, index) in cols">
            <el-table-column :key="index" :prop=item.prop :label="item.label" :min-width="item.width"
              :align="item.align" />
          </template>
          <!-- <el-table-column fixed="right" label="操作" min-width="140" align="center">
            <template slot-scope="scope">
              <el-button @click="toAdd(scope.row)" type="text" size="small">植入广告</el-button>
              <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
            </template>
          </el-table-column> -->
        </el-table>
        <el-pagination v-if="paginationParams.totals >= 10"  @size-change="handleSizeChange" @current-change="handleCurrentChange"
          :current-page="1" :page-sizes="[10, 20, 50, 100]" :page-size="paginationParams.pages"
          layout="->,total, sizes, prev, pager, next, jumper" :total="paginationParams.totals">
        </el-pagination>
      </div>

    </div>
  </div>
</template>
<script>
import { GetpageByGame } from '@/api/game'
export default {
  data() {
    return {
      options: [],
      cols: [ {
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
      total: 1,
      params: {
        page: 1,
        pageSize: 10
      },
      paginationParams: {
        pages: 1,
        totals: 1,
        size: 1,
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
    },
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getpageByGame()
    },
    handleCurrentChange(val) {
      this.params.page = val
      this.getpageByGame()

    },
    toAdd(row) {
      this.$router.push({ path: '/add-Implantation', query: row })
    },
    handleClick(row) {

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
.table {
  // background: #fff;

  .el-pagination {
    padding: 20px 40px;
    background: #fff;
  }
}
</style>
