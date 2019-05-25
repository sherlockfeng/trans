<template>
  <div class="section-card">
    <div class="section-card-title">
      <div class="section-card-title-name">
        <slot name="title-name"></slot>
      </div>
    </div>
    <div class="section-card-content">
      <slot name="card-content"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Section',
  components: {

  },
  data: ()=> {
    return {
    }
  }
}
</script>

<style lang="scss" scoped>
  .section-card {
    width: 277px;
    background-color: #08112e;
    margin-bottom: 30px;
    .section-card-title {
      height: 30px;
      margin-bottom: 10px;
      width: 210px;
      background-image: url('../assets/section-title.png');
      background-size: 100% 100%;
      .section-card-title-name {
        line-height:30px;
        color: #fff;
        font-size: 22px;
        margin-left: 40px;
      }
    }
    .section-card-content {
      height: 230px;
      background-size: 100% 100%;
      background-image: url('../assets/card-content.png');
    }
  }
</style>
