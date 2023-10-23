<template>
  <div class="details">
    <div class="box">
      <div class="title">基本信息</div>
      <div class="centent">
        <el-row :gutter="20">
          <el-col :span="3">
            <div class="avatar"><img
                src="https://www.makemoneyonlineok.xyz/static22/2023/jp/gp/0920/02/lALPM4rHnPdVnKDNAqPNAgo_522_675.png"
                alt=""></div>
          </el-col>
          <el-col :span="6" class="article">
            <div>用户id：123</div>
            <div>注册时间：123</div>
            <div>登录方式：邮箱/手机</div>
          </el-col>
          <el-col :span="6" class="article">
            <div>昵称：123</div>
            <div>最近登录时间：123</div>
            <div>邮箱账户：邮箱/手机</div>
          </el-col>
          <el-col :span="6" class="article">
            <div>性别：女</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box" style="margin-top: 46px;">
      <div class="title">游戏信息</div>
      <div class="centent">
        <el-row :gutter="20">
          <el-col :span="6" class="article">
            <div>注册游戏：123</div>
            <div>游戏时长：123</div>
          </el-col>
          <el-col :span="6" class="article">

          </el-col>
          <el-col :span="6" class="article">

          </el-col>
          <el-col :span="6" class="article">
          </el-col>
        </el-row>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
    }
  },
};
</script>
<style lang="scss" scoped>
.details {
  .title {
    font-size: 18px;
    color: #101010;
    font-weight: bold;
    padding: 14px 20px;
    background: rgba(245, 247, 250, 1);
    border-radius: 6px 6px 0 0;
  }

  .centent {
    padding: 32px;
    background: #fff;

    .avatar img {
      width: 100px;
    }

    .article {
      font-size: 16px;

      >div+div {
        margin-top: 26px;
      }
    }
  }
}
</style>
