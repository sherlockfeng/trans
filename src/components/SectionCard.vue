<template>
  <div class="section-card">
    <div class="section-card-title">
      <slot name="title-icon"></slot>
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
    width: 257px;
    height: 345px;
    background-color: #04091c;
    padding: 0 20px;
    margin-bottom: 25px;
    border: 1px solid #11225a;
    .section-card-title {
      display: flex;
      height: 80px;
      border-bottom: 0.5px solid #252f49;
      align-items: center;
      justify-content: flex-start;
      .section-card-icon {
        width: 40px;
        height: 40px;
        background-size: 100% 100%;
      }
      .section-card-title-name {
        line-height:80px;
        color: #fff;
        font-size: 22px;
        margin-left: 20px;
      }
    }
    .section-card-content {
      width: 217px;
      .pie {
        width: 217px;
        height: 217px;
      }
    }
  }
</style>
