
<template>
  <div class="content">
    <div class="title">{{ item.title }}</div>
    <div class="totality">{{ item.totality }}</div>
    <div class="card-time">
      <div class="card-left">
        <div class="today_text">今日</div>
        <div class="today">{{ item.today }}</div>
      </div>
      <div class="card-right">
        <div class="yesterday_text">昨日</div>
        <div class="yesterday">{{ item.yesterday }}</div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: '',
  props: {
    title: {
      type: String,
      require: false,
      default: () => { }
    },
    totality: {
      type: String,
      require: false,
      default: () => { }
    },
    today_text: {
      type: String,
      require: false,
      default: () => { }
    }, today: {
      type: String,
      require: false,
      default: () => { }
    }, yesterday_text: {
      type: String,
      require: false,
      default: () => { }
    }, yesterday: {
      type: String,
      require: false,
      default: () => { }
    }
  }
}

</script>

<style lang="scss" scoped>
.content {
  height: 148px;
  font-size: 14px;
  color: #fff;
  padding: 16px 30px;
  background: #bc8ef7;
  border-radius: 10px;

  .totality {
    font-size: 22px;
    font-weight: bold;
    margin-top: 8px;
  }

  .card-time {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;

    .text {
      margin-bottom: 8px;
    }
  }
}
</style>
