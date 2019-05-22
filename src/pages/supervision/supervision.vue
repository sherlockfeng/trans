<template>
  <div id="app">
    <Head></Head>
    <div class='content supervision'>
      <Tabs select="supervision"></Tabs>
      <div class="content-all">
        <div class="title">
          <p>督办</p>
        </div>
        <div class="handles">
          <div class="left">
            <Button size="large" class="startSuper" @click="apply" icon="md-cloud-upload">发起督办</Button>
            <Select size="large" v-model="model3" class="select">
              <Option v-for="item in supervisiontype" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
            <Select size="large" v-model="model4" class="select">
                <Option v-for="item in typelist" :value="item.value" :key="item.value">{{ item.label }}</Option>
            </Select>
          </div>
          <div class="right">
              <p class="title-right">事项:</p>
              <Input v-model="title" size="large" placeholder="请输入关键字查询" style="width: 200px" />
              <p class="title-right">单位:</p>
              <Input v-model="company" size="large" placeholder="请输入关键字查询" style="width: 200px" />
              <Button size="large" class="search" @click="search">查询</Button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../../components/Head.vue'
import Tabs from '../../components/Tabs.vue'

export default {
  name: 'app',
  components: {
    Head,
    Tabs,
  },
  data: () => {
    return {
      model3: '',
      model4: '',
      supervisiontype: [
        {
            value: 'my',
            label: '我的督办'
        },
        {
            value: 'other',
            label: '其他督办'
        }
      ],
      typelist: [
        {
            value: 'ing',
            label: '进行中'
        },
        {
            value: 'end',
            label: '已办结'
        }
      ],
      title: '',
      company: ''
    };
  },
  methods: {
    apply() {

    }
  }
}
</script>

<style lang="scss" scoped>

  .content-all {
    margin: 30px 45px;
    min-width: 1110px;
    background-color: #09243a;
    .title {
      height: 70px;
      background-color: #0a2945;
      padding: 0 35px;
      p {
        color: #fff;
        line-height: 70px;
        font-size: 28px;
      }
    }
    .handles {
      padding: 30px 35px 35px 35px;;
      position: relative;
      height: 60px;
      .left {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        .select {
          margin-left: 30px;
          width:150px;
        }
        button {
          width: 150px;
          background-color: #003e78;
          font-size: 18px;
          color: #fff;
          border: none;
        }
      }
      .right {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        right: 35px;
        .title-right {
          display: inline-block;
          color: #fff;
          font-size: 18px;
          margin: 0 20px;
          transform: translate(0, 10%);
        }
        .search {
          margin-left: 20px;
        }
      }
    }
  }
</style>

<style lang="scss">
.supervision {
  .select {
    .ivu-select-selection {
      background-color: #233853;
      border:1px solid #233853;
      color: #fff;
      span.ivu-select-placeholder {
        font-size: 18px;
        color: #fff;
      }
      span.ivu-select-selected-value {
        font-size: 18px;
        color: #fff;
      }
      &:hover {
        border: 1px solid #233853;
      }
    }
    .ivu-select-arrow {
      color: #fff;
    }
    
  }

  .right {
    input {
      background-color: #233853;
      border-color: #233853;
      color: #fff;
    }
    button {
      background: #003e78;
      border: none;
      color: #fff;
      &:hover {
        background: #003e78;
        border: none;
      }
    }
  }
}
</style>