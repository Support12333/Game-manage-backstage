<template>
  <div class="from">
    <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="200px">
      <el-form-item label="广告位置" prop="positionId">
        <el-select v-model="ruleForm.positionId" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="广告内容" prop="advId">
        <el-select v-model="ruleForm.advId" placeholder="请选择活动区域">
          <el-option label="区域一" value="shanghai"></el-option>
          <el-option label="区域二" value="beijing"></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="广告时间" prop="advEndTime">
        <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
          end-placeholder="结束日期">
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
export default {
  data() {
    return {
      ruleForm: {
        id: 1,
        gameId: 1,
        advId: '',
        positionId: '',
        advStartTime: '',
        advEndTime: ''
      },
      rules: {
        positionId: [
          { required: true, message: '请输入游戏名称', trigger: 'blur' },
        ],
        advId: [
          { required: true, message: '请选择游戏载体', trigger: 'change' }
        ],
        advEndTime: [
          { required: true, message: '请选择游戏类型', trigger: 'change' }
        ]
      },
      value1: ''
    }
  },
  created() {
    const data = this.$route.query
    console.log(data);
  },
  methods: {
    ubmitForm(formName) {
      console.log('提交');
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
