<template>
  <div id="app">
    <Head></Head>
    <div class=content>
      <Tabs select="publicity"></Tabs>
      <div class="content-all">
        <div class="top">
          公示 > {{text}}
        </div>
        <div class="content-bottom">
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
      text: '发布公示信息'
    };
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    min-width: 1900px;
    overflow-x: auto;
    background: url('../../assets/bg.png');
  }

  .content-all {
    margin: 30px auto;
    height: 885px;
    width: 1830px;
    background-color: #09243a;
    border: 1px solid #25616d;
  }

  .top {
    font-size: 30px;
    color: #fff;
    margin: 35px 45px;
  }
</style>