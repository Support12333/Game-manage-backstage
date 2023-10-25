<template>
  <div>
    <div class="inquire">
      <div class="title">游戏广告列表</div>
      <el-row :gutter="20">
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value" placeholder="全部广告" @change="getAdValue">
            <el-option v-for="item in advertisement" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value2" placeholder="载体" @change="getCarrierValue">
            <el-option v-for="item in CarrierList" :key="item.id" :label="item.carrierName" :value="item.id">
            </el-option>
          </el-select>
        </el-col>
        <el-col :xs="12" :sm="12" :lg="3">
          <el-select v-model="value3" placeholder="全部游戏" @change="getGameValue">
            <el-option v-for="item in game" :key="item.value" :label="item.label" :value="item.value">
            </el-option>
          </el-select>
        </el-col>
      </el-row>
    </div>
    <el-table :data="tableData" border style="width: 100%;margin-top: 30px;" align="center" :header-cell-style="{
      height: '56px', color: '#101010', fontSize: '16px', 'text-align': 'center'
    }" :row-style="{ 'height': '20px', 'padding': '0' }">
      <el-table-column prop='advId' label="排序" min-width="110" align="center" />
      <el-table-column prop='typeName' label="类型" min-width="110" align="center" />
      <el-table-column prop='carrierName' label="载体" min-width="120" align="center" />
      <el-table-column prop='languageName' label="语言" min-width="120" align="center" />
      <el-table-column prop='gameName' label="游戏名称" min-width="140" align="center" />
      <el-table-column prop='advName' label="广告名称" min-width="140" align="center" />
      <el-table-column prop='advPositionName' label="广告位置" min-width="140" align="center" />
      <el-table-column prop="states" label="游戏状态" width="140" align="center">
        <template slot-scope="scope">
          <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="0" @change="stateChanged(scope.row)" />
        </template>
      </el-table-column>
      <el-table-column prop='advStartTime' label="广告时间" min-width="140" align="center" />

      <el-table-column fixed="right" label="操作" min-width="140" align="center">
        <template slot-scope="scope">
          <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import { GetPageByGameAdv, UpdateState } from '@/api/game'
import { GetCarrier } from '@/api/tool'
export default {
  data() {
    return {
      advertisement: [],
      carrier: [],
      game: [],
      cols: [{
        prop: 'advId',
        label: '排序',
        width: '110',
        align: "center"
      },
      {
        prop: 'typeName',
        label: '类型',
        width: '110',
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
        prop: 'gameName',
        label: '游戏名称',
        width: '140',
        align: "center"
      }, {
        prop: 'advName',
        label: '广告名称',
        width: '140',
        align: "center"
      }, {
        prop: 'advPositionName',
        label: '广告位置',
        width: '140',
        align: "center"
      }, {
        prop: 'states',
        label: '广告状态',
        width: '140',
        align: "center"
      }, {
        prop: 'advStartTime',
        label: '广告时间',
        width: '140',
        align: "center"
      }
      ],
      tableData: [],
      params: {
        page: 1,
        pageSize: 10
      },
      CarrierList: [],
      value: '',
      value2: '',
      value3: ''
    }
  },
  created() {
    //获取载体
    GetCarrier().then(res => {
      this.CarrierList = res.data
    })
    this.getPageByGameAdv(this.params)
  },
  methods: {
    //广告搜索
    getAdValue(val) {
      console.log('全部游戏' + val);
    },
    //载体搜索
    getCarrierValue(val) {
      this.getPageByGameAdv({
        carrierId: val,
        page: 1,
        pageSize: 10
      });
    },
    //游戏搜索
    getGameValue(val) {
      console.log('全部游戏' + val);
    },
    //状态开关
    stateChanged(row) {
      UpdateState({ id: row.id, states: row.status }).then(res => {
      })
    },
    //列表
    getPageByGameAdv(params) {
      GetPageByGameAdv(params).then(res => {
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
</style>
