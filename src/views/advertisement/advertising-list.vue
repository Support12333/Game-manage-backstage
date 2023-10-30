<template>
  <div>
    <div class="inquire">
      <div class="title">广告列表</div>
      <el-row>
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value" placeholder="全部广告" @change="getAdValue">
            <el-option v-for="item in AdValue" :key="item.id" :label="item.advName" :value="item.id">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <el-button type="primary" style="float: right;margin-bottom: 8px;" @click="addClick">添加广告</el-button>
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
          <el-table-column :key="index" :prop=item.prop :label="item.label" :min-width="item.width" :align="item.align" />
        </template>
      </el-table>
      <el-pagination v-if="paginationParams.totals >= 10" @size-change="handleSizeChange"
        @current-change="handleCurrentChange" :current-page="1" :page-sizes="[10, 20, 50, 100]"
        :page-size="paginationParams.pages" layout="->,total, sizes, prev, pager, next, jumper"
        :total="paginationParams.totals">
      </el-pagination>
    </div>
  </div>
</template>
<script>
import { GetAdvList } from '@/api/advertisement'
import { GetAdAll} from '@/api/tool'
export default {
  data() {
    return {
      AdValue: [],
      cols: [{
        prop: 'id',
        label: '广告ID',
        width: '100',
        align: "center"
      }, {
        prop: 'advTypeName',
        label: '类型',
        width: '120',
        align: "center"
      }, {
        prop: 'advName',
        label: '广告名称',
        width: '120',
        align: "center"
      }, {
        prop: 'advImg',
        label: '广告封面',
        width: '140',
        align: "center"
      }, {
        prop: 'createTime',
        label: '添加时间',
        width: '120',
        align: "center"
      }],
      value: '',
      tableData: [],
      total: 1,
      params: {
        advId: 0,
        page: 1,
        pageSize: 10
      },
      paginationParams: {
        pages: 1,
        totals: 1,
        size: 1,
      },
    }
  },
  created() {
    //获取广告
    GetAdAll().then(res => {
      this.AdValue = res.data
    })
    this.getAdvList()
  },
  methods: {
     //广告搜索
     getAdValue(val) {
      this.params.advId = val
      this.getAdvList();
    },
    //添加广告
    addClick() {
      this.$router.push({ path: '/add-advertising' })
    },
    //获取列表
    getAdvList() {
      GetAdvList(this.params).then(res => {
        this.tableData = res.data
        this.paginationParams.totals = res.total
        this.paginationParams.size = res.size
      })
    },
    handleSizeChange(val) {
      this.params.pageSize = val
      this.getAdvList()
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.params.page = val
      this.getAdvList()

    },

  }
};
</script>
<style lang="scss" scoped>
.inquire {
  background: #fff;
  padding: 20px 32px;
  margin-bottom: 26px;

  .title {
    font-size: 16px;
    color: #101010;
    font-weight: bold;
    margin-bottom: 20px;
  }
}

.table {
  // background: #fff;

  .el-pagination {
    padding: 20px 40px;
    background: #fff;
  }
}
</style>
