<template>
  <div class="tabs">
    <div class="tab" v-for="(item, index) in tabs" :key="index"  :class="{ active: item.value === select }" @click="goto(item.value)">
      {{item.title}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'Tabs',

  props: {
    select: String
  },

  data: ()=> {
    return {
      tabs: [
        {
          title: '我的工作台',
          value: 'workBench'
        },
        {
          title: '业务专题',
          value: 'business'
        },
        {
          title: '公示',
          value: '2'
        },
        {
          title: '督办代办',
          value: '3'
        },
        {
          title: '监控名单',
          value: '4'
        },
        {
          title: '双随机',
          value: '5'
        },
        {
          title: '专家库',
          value: '6'
        },
        {
          title: '用户管理',
          value: '7'
        }
      ]
    }
  },

  methods: {
    goto(value) {
      if (value !== this.select) {
        document.location = `./${value}.html`;
      }
    }
  }
}
</script>

<style scoped>
  .tabs {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .tab {
    width: 200px;
    height: 55px;
    margin: 0 15px;
    background-image: url('../assets/tab.png');
    background-size: cover;
    text-align: center;
    color: #fff;
    font-size: 28px;
    line-height: 55px;
    cursor: pointer;
  }

  .tab:hover {
    background-image: url('../assets/tab-active.png');
    background-size: cover;
  }

  .active {
    background-image: url('../assets/tab-active.png');
    background-size: cover;
  }

</style>
<style>

</style>

