<template>
  <div class="tabs">
    <div class="tab" v-for="(item, index) in tabs" :key="index">
      <div class="parent-tab" @click="goto(item.value)" :class="{ active: item.value === select }">
        {{item.title}}
      </div>
      <div class='child-tabs'>
        <div v-for="(childItem, i) in item.nextTabs" :key="i" class="child-tab-item" @click="goto(childItem.value)">
          {{childItem.title}}
        </div>
      </div>
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
          value: 'publicity'
        },
        {
          title: '督办代办',
          value: 'supervision'
        },
        {
          title: '监控名单',
          value: '4',
          nextTabs: [
            {
              title: '监控名单1',
              value: '111'
            },
            {
              title: '监控名单2',
              value: '2222'
            }
          ]
        },
        {
          title: '双随机',
          value: 'random'
        },
        {
          title: '专家库',
          value: '6'
        },
        {
          title: '用户管理',
          value: 'manage'
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

<style lang="scss" scoped>
  .tabs {
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    .tab {
      width: 200px;
      height: 55px;
      margin: 0 15px;
      text-align: center;
      color: #fff;
      font-size: 28px;
      line-height: 55px;
      cursor: pointer;
      .parent-tab {
        background-image: url('../assets/tab.png');
        background-size: 100% 100%;
        &:hover {
          background-image: url('../assets/tab-active.png');
          background-size: 100% 100%;
        }
        &:hover ~ .child-tabs {
          display: block;
        }
        &.active {
          background-image: url('../assets/tab-active.png');
          background-size: 100% 100%;
        }
      }
      .child-tabs {
        display: none;
        &:hover {
          display: block;
        }
        .child-tab-item {
          background-color: #0d234c;
          margin-bottom: 1px;
          position: relative;
          z-index: 1000;
          &:hover {
            background-color: #003e78;
          }
        }
      }
    }
  }



</style>
<style>

</style>

