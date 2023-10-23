<template>
  <div class="game">
    <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="200px">
      <el-form-item label="游戏名称:" prop="name">
        <el-input v-model="ruleForm.name" placeholder="请输入游戏名称" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item label="游戏载体:" prop="carrier">
        <el-radio-group v-model="ruleForm.carrier">
          <el-radio label="安卓"></el-radio>
          <el-radio label="H5"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="游戏类型:" prop="type">
        <el-radio-group v-model="ruleForm.type">
          <el-radio label="三消"></el-radio>
          <el-radio label="解压"></el-radio>
          <el-radio label="跑酷"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="游戏语言:" prop="Language">
        <el-radio-group v-model="ruleForm.Language">
          <el-radio label="英语"></el-radio>
          <el-radio label="葡萄牙语"></el-radio>
          <el-radio label="印度语"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="广告位置" prop="ad_position">
        <el-checkbox-group v-model="ruleForm.ad_position">
          <el-checkbox label="选项一" name="ad_position"></el-checkbox>
          <el-checkbox label="选项二" name="ad_position"></el-checkbox>
          <el-checkbox label="选项三" name="ad_position"></el-checkbox>
          <el-checkbox label="选项四" name="ad_position"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <!-- <el-form-item label="游戏LOGO:" v-model="logo">
        <upload v-model="ruleForm.logo" />
      </el-form-item>
      <el-form-item label="游戏主图:" v-model="master_map">
        <upload v-model="ruleForm.master_map"/>
      </el-form-item> -->
      <el-form-item label="活动描述" prop="describe">
        <el-input type="textarea" resize="none" :rows="4" v-model="ruleForm.describe" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm">提交</el-button>
        <!-- <el-button>取消</el-button> -->
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
import Upload from '../components/Upload.vue'

export default {
  data() {
    return {
      ruleForm: {
        name: '',
        carrier: '',
        type: '',
        Language: '',
        ad_position: [],
        describe: ''
      },
      imageUrl: '',
      describe: '',
      rules: {
        name: [
          { required: true, message: '请输入游戏名称', trigger: 'blur' },
        ],
        carrier: [
          { required: true, message: '请选择游戏载体', trigger: 'change' }
        ],
        type: [
          { required: true, message: '请选择游戏类型', trigger: 'change' }
        ],
        Language: [
          { required: true, message: '请选择游戏语言', trigger: 'change' }
        ],
        ad_position: [
          { type: 'array', required: true, message: '请至少选择一个广告位置', trigger: 'change' }
        ],
        logo: [{ required: true, message: '请上传游戏LOGO', trigger: 'change' }],
        master_map: [{ required: true, message: '请上传游戏主图', trigger: 'change' }],
        describe: [
          { required: true, message: '请填写活动描述', trigger: 'blur' }
        ]
      }
    }
  },
  components: {
    Upload
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert('submit!');
        } else {
          console.log('error submit!!');
          return false;
        }
      });
    },
    resetForm(formName) {
      this.$refs[formName].resetFields();
    }
  }
}
</script>
<style lang="scss">
.game {
  padding: 32px;
  background-color: #fff;

  .el-form {

    .el-form-item {
      margin-bottom: 32px;
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
      width: 240px;
      padding: 18px 20px;
      margin-top: 40px;
    }
  }
}
</style>
