<template>
  <div class="from">
    <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="200px">
      <el-form-item label="游戏名称：">
        <el-input type="text" class="input" v-model="gameData.gameName" :readonly="true">123456</el-input>
      </el-form-item>
      <el-form-item label="游戏类型：">
        <el-input type="text" class="input" v-model="gameData.gameType" :readonly="true">123456</el-input>
      </el-form-item>
      <el-form-item label="游戏LOGO：">
        <el-image style="width: 100px; height: 100px" :src="url"></el-image>
      </el-form-item>
      <el-form-item label="广告位置" prop="positionId">
        <el-select v-model="ruleForm.positionId" placeholder="请选择活动区域">
          <el-option v-for="item in advPosition" :key="item.id" :label="item.advPositionName"
            :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="广告内容" prop="advId">
        <el-select v-model="ruleForm.advId" placeholder="请选择活动区域">
          <el-option v-for="item in advCentent" :key="item.id" :label="item.advName" :value="item.id"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="广告时间">
        <el-date-picker v-model="date" type="daterange" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期" value-format="yyyy-MM-dd hh:mm:ss" @change="getdate">
        </el-date-picker>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')">提交</el-button>
        <el-button style="margin-left: 30px;" @click="Back">返回</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import { GetADPosition, GetAdvListForGame } from '@/api/tool'
import { GameAdv } from '@/api/game'
export default {
  data() {
    return {
      advPosition: [],
      advCentent: [],
      ruleForm: {
        gameId: 1,
        advId: '',
        positionId: '',
        advStartTime: '',
        advEndTime: ''
      },
      rules: {
        positionId: [
          { required: true, message: '请选择广告位置', trigger: 'blur' },
        ],
        advId: [
          { required: true, message: '请选择广告内容', trigger: 'change' }
        ],
        advEndTime: [
          { required: true, message: '请选择广告时间', trigger: 'change' }
        ]
      },
      value1: '',
      date: '',
      gameData: {},
      url: 'https://www.makemoneyonlineok.xyz/static22/2023/jp/gp/0920/02/lALPM4rHnPdVnKDNAqPNAgo_522_675.png'
    }
  },
  created() {
    console.log(this.$route.query,'6666');
    this.gameData = this.$route.query
    this.ruleForm.gameId = JSON.parse(this.gameData.id)
    console.log(this.gameData);
    //广告位置
    GetADPosition().then(res => {
      this.advPosition = res.data
    })
    //广告内容
    GetAdvListForGame().then(res => {
      this.advCentent = res.data
    })
  },
  methods: {
    getdate() {
      this.ruleForm.advStartTime = this.date[0]
      this.ruleForm.advEndTime = this.date[1]
    },
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          GameAdv(this.ruleForm).then(res => {
            this.Back()
          })
        } else {
          return false;
        }
      })
    },
    //返回
    Back() {
      this.$router.go(-1)
    }
  }
};
</script>
<style lang="scss" scoped>
.from {
  padding: 32px;
  background-color: #fff;

  .el-form {


    .el-form-item {
      margin-bottom: 20px;
    }

    .el-radio {
      margin-right: 50px;
    }

    .el-form-item__label {
      font-size: 16px;
      color: #131414;
      padding-right: 28px;
    }

    .el-button {
      width: 150px;
      padding: 12px 20px;
      margin-top: 40px;
    }

    .logo {
      .el-upload {
        width: 100px;
        height: 100px;
        line-height: 100px;
      }

      .avatar-uploader>.el-upload-list>.el-upload-list__item {
        width: 100px;
        height: 100px;
      }

      .avatar-uploader>.el-upload-list>.el-upload-list__item>img {
        width: 100px;
        height: 100px;
      }
    }
  }
}
</style>
