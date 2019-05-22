<template>
  <div id="app">
    <Head></Head>
    <div class=content>
      <Tabs select="supervision"></Tabs>
      <div class="content-all">
        <div class="title">
          <p>督办</p>
        </div>
        <div class="handles">
          <Button size="large" class="startSuper" @click="download" icon="md-cloud-upload">发起督办</Button>
          <Select v-model="model3" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
        <Select v-model="model3" style="width:100px">
            <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
        </Select>
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
      cityList: [
        {
            value: 'New York',
            label: 'New York'
        },
        {
            value: 'London',
            label: 'London'
        },
        {
            value: 'Sydney',
            label: 'Sydney'
        },
        {
            value: 'Ottawa',
            label: 'Ottawa'
        },
        {
            value: 'Paris',
            label: 'Paris'
        },
        {
            value: 'Canberra',
            label: 'Canberra'
        }
      ],
    };
  },
  methods: {

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
      padding: 30px 35px 35px;
    }
  }
</style>

<style lang="scss">


</style>