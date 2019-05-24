<template>
  <div id="app" style="minWidth: 1200px">
    <Head></Head>
    <div class=content>
      <Tabs select="business"></Tabs>
      <div class="top">
        <div class="left">
          <div class="title">
            <p>
              客运
            </p>
          </div>
          <div class="section">
            <div class="section-item" v-for="(item, index) in sectionLeftList" :key="index" :style="{backgroundImage:'url(' + item.imgUrl + ')'}">
              <p>{{item.title}}</p>
            </div>
          </div>
        </div>
        <div class="right">
          <div class="right-section">
            <p>客运能力分析</p>
          </div>
        </div>
      </div>
      <div class="bottom bottom-for-icon">
        <Icon type="ios-arrow-back" />
        <div class="bottom-section">
          <div class="bottom-section-item" v-for="(item, index) in sectionBottomList" :key="index" :style="{backgroundImage:'url(' + item.imgUrl + ')'}">
            <P>{{item.title}}</P>
          </div>
        </div>
        <Icon type="ios-arrow-forward" />
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../../components/Head.vue'
import Tabs from '../../components/Tabs.vue'
import {Icon} from 'iview';

export default {
  name: 'app',
  components: {
    Head,
    Tabs,
    Icon
  },
   data: () => {
    return {
      sectionLeftList: [
        {
          title: '黑名单',
          imgUrl: require('../../assets/business_12.png'),
        },
        {
          title: '从业人员',
          imgUrl: require('../../assets/business_14.png'),
        },
        {
          title: '客运业户',
          imgUrl: require('../../assets/business_16.png'),
        },
        {
          title: '业户经营状态',
          imgUrl: require('../../assets/business_10.png'),
        }
        ,
        {
          title: '客运能力',
          imgUrl: require('../../assets/business_22.png'),
        }
        ,
        {
          title: '车辆年审状态',
          imgUrl: require('../../assets/business_24.png'),
        }
        ,
        {
          title: '客运场站',
          imgUrl: require('../../assets/business_26.png'),
        }
        ,
        {
          title: '省市际班车',
          imgUrl: require('../../assets/business_28.png'),
        }
      ],
      sectionBottomList: [
        {
          title: '运政协同管理系统',
          imgUrl: require('../../assets/business_36.png'),
        },
        {
          title: '行政审批平台',
          imgUrl: require('../../assets/business_38.png'),
        },
        {
          title: '信用信息系统',
          imgUrl: require('../../assets/business_40.png'),
        },
        {
          title: '大数据分析系统',
          imgUrl: require('../../assets/business_42.png'),
        },
        {
          title: '重点营运车辆联网联控系统',
          imgUrl: require('../../assets/business_44.png'),
        }
      ]
    };
  }
}
</script>

<style>
  .content {
    margin: 0 45px;
  }

  .top {
    margin: 20px 0 40px 0;
    display: flex;
    justify-content: space-between;
    align-content: center;
    height: 790px;
  }

  .left {
    width: 1120px;
    height: 80px;
    margin-right: 30px;
  }

  .title {
    width: 260px;
    height: 50px;
    background-image: url('../../assets/business_03.png');
    background-size: 100% 100%;
    margin-bottom: 22px;
  }

  .title p {
    line-height: 50px;
    color: #fff;
    font-size: 22px;
    margin-left: 75px;
  }

  .section {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
  }

  .section-item {
    width: 257px;
    height: 345px;
    background-size: 100% 100%;
    margin-bottom: 25px;
  }

  .section-item p {
    line-height:80px;
    color: #fff;
    font-size: 22px;
    margin-left: 85px;
  }

  .right {
    width: 690px;
  }

  .right-section {
    width: 690px;
    height: 790px;
    background-size: 100% 100%;
    background-image: url('../../assets/business_06.png')
  }

  .right-section p {
    padding-top: 40px;
    font-size: 24px;
    color: #fff;
    text-align: center;
  }

  .bottom {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 40px;
  }

  .bottom-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 1575px;
  }

  .bottom-section-item {
    width: 300px;
    height: 60px;
    background-size: 100% 100%;
  }

  .bottom-section-item p {
    font-size: 20px;
    color: #fff;
    text-align: start;
    width: 175px;
    margin-left: 70px;
    margin-top: 16px;
  }

  .bottom-section-item:last-child p {
    margin-top: 5px;
    font-size: 18px;
  }
</style>
<style>
 
.bottom-for-icon .ivu-icon {
  width:40px;
  font-size: 40px
}

</style>

