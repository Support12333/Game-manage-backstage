<template>
  <div>
    <el-form ref="ruleForm" :rules="rules" :model="ruleForm" label-width="200px">
      <el-form-item label="游戏名称:" prop="gameName">
        <el-input v-model="ruleForm.gameName" placeholder="请输入游戏名称" style="width: 400px;"></el-input>
      </el-form-item>
      <el-form-item label="游戏载体:" prop="carrierId">
        <el-radio-group v-model="ruleForm.carrierId" v-for="item in CarrierList" :key="item.id">
          <el-radio :label=item.id>{{ item.carrierName }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="游戏类型:" prop="gameType">
        <el-radio-group v-model="ruleForm.gameType" v-for="item in GameTypeList" :key="item.id">
          <el-radio :label=item.id>{{ item.typeName }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="游戏语言:" prop="languageId">
        <el-radio-group v-model="ruleForm.languageId" v-for="item in LanguageList" :key="item.id">
          <el-radio :label=item.id>{{ item.languageName }}</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="广告位置" prop="advPositionIds">
        <el-checkbox-group v-model="advPositionIds">
          <el-checkbox label="选项一" name="ad_position"></el-checkbox>
          <el-checkbox label="选项二" name="ad_position"></el-checkbox>
          <el-checkbox label="选项三" name="ad_position"></el-checkbox>
          <el-checkbox label="选项四" name="ad_position"></el-checkbox>
        </el-checkbox-group>
      </el-form-item>
      <el-form-item label="游戏LOGO:" prop="gameLogo" class="logo">
        <upload :limit="1" :file-list="logoImgList" @getUrl="getLogoUrl($event)" />
      </el-form-item>
      <el-form-item label="游戏主图:" prop="gameImg">
        <upload :limit="1" :file-list="mapImgList" @getUrl="getMasterUrl($event)" />
      </el-form-item>
      <el-form-item label="活动描述" prop="gameDesc">
        <el-input type="textarea" resize="none" :rows="4" v-model="ruleForm.gameDesc" style="width: 400px;"></el-input>
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
      return{
      }
    },
  };
</script>
<style lang="less" scoped>
</style>
