<template>
  <div class="game">
    <el-form ref="form" :model="form" label-width="200px">
      <el-form-item label="游戏名称:">
        <el-input v-model="form.name" placeholder="请选择游戏名称" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item label="游戏载体:">
        <el-radio-group v-model="form.carrier">
          <el-radio label="安卓"></el-radio>
          <el-radio label="H5"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="游戏类型:">
        <el-radio-group v-model="form.type">
          <el-radio label="三消"></el-radio>
          <el-radio label="解压"></el-radio>
          <el-radio label="跑酷"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="游戏语言:">
        <el-radio-group v-model="form.Language">
          <el-radio label="英语"></el-radio>
          <el-radio label="葡萄牙语"></el-radio>
          <el-radio label="印度语"></el-radio>
          <el-radio label="其他"></el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="游戏LOGO:">
        <upload />
      </el-form-item>
      <el-from-item>
        <el-form-item label="活动描述">
          <el-input type="textarea" resize="none" :rows="4" v-model="form.describe" style="width: 400px;"></el-input>
        </el-form-item>
      </el-from-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">提交</el-button>
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
      form: {
        name: '',
        carrier: '',
        type: '',
        Language: '',
      },
      imageUrl: '',
      describe: ''
    }
  },
  components: {
    Upload
  },
  methods: {
    onSubmit() {
      console.log('submit!');
    },
    handleAvatarSuccess(res, file) {
      this.imageUrl = URL.createObjectURL(file.raw);
    },
    beforeAvatarUpload(file) {
      const isJPG = file.type === 'image/jpeg';
      const isLt2M = file.size / 1024 / 1024 < 2;

      if (!isJPG) {
        this.$message.error('上传头像图片只能是 JPG 格式!');
      }
      if (!isLt2M) {
        this.$message.error('上传头像图片大小不能超过 2MB!');
      }
      return isJPG && isLt2M;
    }
  }
};
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
