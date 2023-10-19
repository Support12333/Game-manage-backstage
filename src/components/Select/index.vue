<template>
  <div>
    <el-select v-model="value" :placeholder="title" @change="handleChange">
      <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
      </el-option>
    </el-select>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    }
  },
  props: {
    title: {
      type: String,
      default: false
    },
    options: {
      type: Array,
      default: false
    }
  },
  methods: {
    handleChange(val) {
      this.$emit('sclectchange', this.value);
    }
  },
};
</script>
<style lang="less" scoped></style>
