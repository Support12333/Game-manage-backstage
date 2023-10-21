
<template>
  <div class="content" :style="{ background: colors }">
    <div class="title">{{ title }}</div>
    <div class="totality">{{ totality }}</div>
    <div class="card-time">
      <div class="card-left">
        <div class="today_text">{{ today_text }}</div>
        <div class="today">{{ today }}</div>
      </div>
      <div class="card-right">
        <div class="yesterday_text">{{ yesterday_text }}</div>
        <div class="yesterday">{{ yesterday }}</div>
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
      default: false
    },
    totality: {
      type: String,
      default: false
    },
    today_text: {
      type: String,
      default: false
    },
    today: {
      type: String,
      default: false
    },
    yesterday_text: {
      type: String,
      default: false
    },
    yesterday: {
      type: String,
      default: false
    },
    colors: {
      type: String,
      default: false
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
