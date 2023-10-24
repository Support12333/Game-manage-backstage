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
            <div>用户id：{{ details.id }}</div>
            <div>注册时间：{{details.signTime}}</div>
            <div>登录方式：{{details.account}}</div>
          </el-col>
          <el-col :span="6" class="article">
            <div>昵称：{{details.userName}}</div>
            <div>最近登录时间：{{details.recentLoginTime}}</div>
            <div>账户：{{details.emailAccount||'无'}} / {{ details.phoneAccount }}</div>
          </el-col>
          <el-col :span="6" class="article">
            <div>性别：{{details.userSex}}</div>
          </el-col>
        </el-row>
      </div>
    </div>
    <div class="box" style="margin-top: 46px;">
      <div class="title">游戏信息</div>
      <div class="centent">
        <el-row :gutter="20">
          <el-col :span="6" class="article">
            <div class="desc">注册游戏：
              <template v-for="item in details.gameNameAll">
                <span>{{ item }}</span>
              </template>
            </div>
            <div>游戏时长：{{details.gameTimeAll}}</div>
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
import { GetUserInfoById } from '@/api/page'
export default {
  data() {
    return {
      details: {}
    }
  },
  created() {
    const id = this.$route.query.id
    GetUserInfoById(id).then(res => {
      this.details = res.data
    })
  }
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
        margin-top: 28px;
      }
    }

    span{
        margin-right: 20px;
      }
  }
}
</style>
