<template>
  <div id="app">
    <Head></Head>
    <div class="content">
      <Tabs select="workBench"></Tabs>
      <div class="bottom">
        <div class="left">
          <div class="section" v-for="(item, index) in sectionList" :key="index">
            <div class="title">
              <p>{{item.title}}</p>
            </div>
            <div class="section-content" :style="{backgroundImage:'url(' + item.imgUrl + ')'}"></div>
          </div>
        </div>
        <div class="right">
          <div class="section">
            <div class="title">
              <p>地图总览</p>
            </div>
            <div class="section-content"></div>
          </div>
          <div class="section-right" v-for="(item, index) in sectionRightList" :key="index" :style="{backgroundImage:'url(' + item.imgUrl + ')'}">
            <div class="title">
              <p>{{item.title}}</p>
            </div>
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
    Tabs
  },
  data: () => {
    return {
      sectionList: [
        {
          title: '客运',
          imgUrl: require('../../assets/section_0.png'),
        },
        {
          title: '公交和出租',
          imgUrl: require('../../assets/section_1.png'),
        },
        {
          title: '货运',
          imgUrl: require('../../assets/section_2.png'),
        },
        {
          title: '驾培和从业',
          imgUrl: require('../../assets/section_3.png'),
        },
        {
          title: '维修',
          imgUrl: require('../../assets/section_4.png'),
        },
        {
          title: '安稽',
          imgUrl: require('../../assets/section_5.png'),
        },
        {
          title: '数据总览',
          imgUrl: require('../../assets/section_6.png'),
        }
      ],
      sectionRightList: [
        {
          title: '公示信息',
          imgUrl: require('../../assets/section_8.png'),
        },
        {
          title: '待办事项',
          imgUrl: require('../../assets/section_9.png'),
        },
        {
          title: '督察督办',
          imgUrl: require('../../assets/section_10.png'),
        },
        {
          title: '重点关注名单',
          imgUrl: require('../../assets/section_11.png'),
        }
      ]
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

  .content {
    margin: 0 45px;
  }

  .bottom {
    display: flex;
  }

  .left {
    display: flex;
    height: 900px;
    width: 880px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
  }

  .section {
    width: 277px;
    margin-bottom: 30px;
  }

  .title {
    background-image: url('../../assets/section-title.png');
    height: 30px;
    background-size: contain;
    width: 210px;
    margin-bottom: 10px;
  }

  .title p {
    font-size: 22px;
    color: #fff;
    line-height: 30px;
    margin-left: 40px;
  }

  .section-content {
    height: 230px;
    background-size: contain;
  }

  .left .section:last-child .section-content {
    height: 230px;
    width: 880px;
    background-size: 100% 100%;
  }

  .right{
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    width: 890px;
  }

  .right .section {
    width: 890px;
  }

  .right .section:first-child .section-content {
    height: 415px;
    width: 890px;
    background: url('../../assets/section_7.png');
    background-size: 100% 100%;
  }

  .section-right {
    width: 420px;
    height: 200px;
    margin-bottom: 16px;
  }
</style>
