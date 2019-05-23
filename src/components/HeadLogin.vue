<template>
  <div class="head">
    <div class="favicon"></div>
    <p>四川省交通运输厅道路运输管理综合业务门户</p>

  </div>
</template>

<script>

export default {
  name: 'Head',
  components: {

  },
  data: ()=> {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  $left: 40px;
  $right: 80px;
  .head {
    height: 80px;
    min-width: 50rem;
    width: 100%;
    background-image: url('../assets/login-head-bg.png');
    background-size: 100% 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    .favicon {
      background-image: url('../assets/favicon.png');
      background-size: 100% 100%;
      width: 40px;
      height: 50px;
    }
    p {
      color: #fff;
      text-align: center;
      line-height: 80px;
      font-size: 28px;
      padding-left: 45px;
    }
  }
</style>
