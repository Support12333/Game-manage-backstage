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
            <el-option v-for="item in carrier" :key="item.value" :label="item.label" :value="item.value">
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
    <div class="gametable">
      <el-table :data="tableData" border style="width: 100%;" align="center" :header-cell-style="{
        height: '56px', color: '#101010', fontSize: '16px', 'text-align': 'center'
      }" :row-style="{ 'height': '20px', 'padding': '0' }">
        <el-table-column prop='sort' label="排序" min-width="110" align="center" />
        <el-table-column prop='type' label="类型" min-width="110" align="center" />
        <el-table-column prop='carrier' label="载体" min-width="120" align="center" />
        <el-table-column prop='language' label="语言" min-width="120" align="center" />
        <el-table-column prop='game_name' label="游戏名称" min-width="140" align="center" />
        <el-table-column prop='ad_name' label="广告名称" min-width="140" align="center" />
        <el-table-column prop='ad_position' label="广告位置" min-width="140" align="center" />
        <el-table-column prop="ad_status" label="游戏状态" width="140" align="center">
          <template slot-scope="scope">
            <el-switch v-model="scope.row.status" :active-value="1" :inactive-value="2"
              @change="stateChanged(scope.row)" />
          </template>
        </el-table-column>
        <el-table-column prop='ad_time' label="广告时间" min-width="140" align="center" />

        <el-table-column fixed="right" label="操作" min-width="140" align="center">
          <template slot-scope="scope">
            <el-button @click="handleClick(scope.row)" type="text" size="small">详情</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
  </div>
</template>
<script>
import { GetPageByGameAdv } from '@/api/game'
export default {
  data() {
    return {
      advertisement: [{
        value: '1',
        label: '羊了个羊'
      }, {
        value: '2',
        label: '忍着神'
      }, {
        value: '3',
        label: '米兔环境'
      }],
      carrier: [{
        value: '1',
        label: '安卓'
      }, {
        value: '2',
        label: 'H5'
      }],
      game: [{
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
        prop: 'advId',
        label: '排序',
        width: '110',
        align: "center"
      }, {
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
        prop: 'game_name',
        label: '游戏名称',
        width: '140',
        align: "center"
      }, {
        prop: 'advName',
        label: '广告名称',
        width: '140',
        align: "center"
      }, {
        prop: 'ad_position',
        label: '广告位置',
        width: '140',
        align: "center"
      }, {
        prop: 'ad_status',
        label: '广告状态',
        width: '140',
        align: "center"
      }, {
        prop: 'advStartTime',
        label: '广告时间',
        width: '140',
        align: "center"
      }],
      tableData: [],
      params: {
        page: 1,
        pageSize: 10
      },
      value: '',
      value2: '',
      value3: ''
    }
  },
  created() {
    this.getPageByGameAdv()
  },
  methods: {
    getAdValue(val) {
      console.log('全部游戏' + val);
    },
    getCarrierValue(val) {
      console.log('全部游戏' + val);
    },
    getGameValue(val) {
      console.log('全部游戏' + val);
    },

    stateChanged(row) {
      console.log(row);
    },
    //列表
    getPageByGameAdv() {
      GetPageByGameAdv(this.params).then(res => {
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
