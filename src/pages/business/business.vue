<template>
  <div id="app" style="minWidth: 1200px">
    <Head></Head>
    <div class='content business'>
      <Tabs select="business"></Tabs>
      <div class="top">
        <div class="left">
          <div class="title">
            <p>
              客运
            </p>
          </div>
          <div class="section">
            <section-card>
              <template v-slot:title-icon>
                <div class="section-card-icon" :style="{backgroundImage:'url(' + sectionLeftList[0].imgUrl + ')'}"></div>
              </template>
              <template v-slot:title-name>
                <p>{{sectionLeftList[0].title}}</p>
              </template>
              <template v-slot:card-content>
                <div class="row">
                  <div class="name">
                    黑名单
                  </div>
                  <div class="value">
                    <div class="black-value">
                      <p>{{blackListNum}}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    重点监控名单
                  </div>
                  <div class="value">
                    <div class="black-value">
                      <p>{{blackVipNum}}</p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    业务督办
                  </div>
                  <div class="value">
                    <div class="black-value can-click">
                      <p @click="goto('supervision')">发起</p>
                    </div>
                  </div>
                </div>
              </template>
            </section-card>
            <section-card>
              <template v-slot:title-icon>
                <div class="section-card-icon" :style="{backgroundImage:'url(' + sectionLeftList[1].imgUrl + ')'}"></div>
              </template>
              <template v-slot:title-name>
                <p>{{sectionLeftList[1].title}}</p>
              </template>
              <template v-slot:card-content>
                <div class="row">
                  <div class="name">
                    数量
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{workPeopleNum}}<span>人</span></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    持证
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{workPeopleIn}}<span>人</span></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    同比
                  </div>
                  <div class="value">
                    <div class="work-value work-radio">
                      <p>+{{workPeoRa}}%</p>
                    </div>
                  </div>
                </div>
              </template>
            </section-card>
            <section-card>
              <template v-slot:title-icon>
                <div class="section-card-icon" :style="{backgroundImage:'url(' + sectionLeftList[2].imgUrl + ')'}"></div>
              </template>
              <template v-slot:title-name>
                <p>{{sectionLeftList[2].title}}</p>
              </template>
              <template v-slot:card-content>
                <div class="row">
                  <div class="name">
                    总数
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{carOwnerNum}}<span>家</span></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    出租车总数
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{taxiOwnerNum}}<span>家</span></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    网约车占比
                  </div>
                  <div class="value">
                    <div class="work-value work-radio">
                      <p>+{{netRa}}%</p>
                    </div>
                  </div>
                </div>
              </template>
            </section-card>
            <section-card>
              <template v-slot:title-icon>
                <div class="section-card-icon" :style="{backgroundImage:'url(' + sectionLeftList[3].imgUrl + ')'}"></div>
              </template>
              <template v-slot:title-name>
                <p>{{sectionLeftList[3].title}}</p>
              </template>
              <template v-slot:card-content>
                <div class="pie" id='pieOne'></div>
              </template>
            </section-card>
            <section-card>
              <template v-slot:title-icon>
                <div class="section-card-icon" :style="{backgroundImage:'url(' + sectionLeftList[4].imgUrl + ')'}"></div>
              </template>
              <template v-slot:title-name>
                <p>{{sectionLeftList[4].title}}</p>
              </template>
              <template v-slot:card-content>
                <div class="row">
                  <div class="name">
                    车辆数
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{netRa}}<span>万辆</span></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    出租车总数
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{texiNum}}<span>万辆</span></p>
                    </div>
                  </div>
                </div>
              </template>
            </section-card>
            <section-card>
              <template v-slot:title-icon>
                <div class="section-card-icon" :style="{backgroundImage:'url(' + sectionLeftList[5].imgUrl + ')'}"></div>
              </template>
              <template v-slot:title-name>
                <p>{{sectionLeftList[5].title}}</p>
              </template>
              <template v-slot:card-content>
                <div class="pie" id='pieTwo'></div>
              </template>
            </section-card>
            <section-card>
              <template v-slot:title-icon>
                <div class="section-card-icon" :style="{backgroundImage:'url(' + sectionLeftList[6].imgUrl + ')'}"></div>
              </template>
              <template v-slot:title-name>
                <p>{{sectionLeftList[6].title}}</p>
              </template>
              <template v-slot:card-content>
                <div class="row">
                  <div class="name">
                    总数
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{stationNum}}<span>家</span></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    同比
                  </div>
                  <div class="value">
                    <div class="work-value work-radio">
                      <p>{{stationRa}}%</p>
                    </div>
                  </div>
                </div>
              </template>
            </section-card>
            <section-card>
              <template v-slot:title-icon>
                <div class="section-card-icon" :style="{backgroundImage:'url(' + sectionLeftList[7].imgUrl + ')'}"></div>
              </template>
              <template v-slot:title-name>
                <p>{{sectionLeftList[7].title}}</p>
              </template>
              <template v-slot:card-content>
                <div class="row">
                  <div class="name">
                    班车总数
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{cityBusNum}}<span>辆</span></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    线路总数
                  </div>
                  <div class="value">
                    <div class="work-value">
                      <p>{{cityLineNum}}<span>条</span></p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">
                    日发班次
                  </div>
                  <div class="value">
                    <div class="work-value work-radio">
                      <p>{{dayCityNum}}<span>次</span></p>
                    </div>
                  </div>
                </div>
              </template>
            </section-card>
          </div>
        </div>
        <div class="right">
          <div class="right-section">
            <p>客运能力分析</p>
            <div id="histogram"></div>
          </div>
        </div>
      </div>
      <div class="bottom bottom-for-icon">
        <Icon type="ios-arrow-back" @click="goLeft" style="cursor:pointer"/>
        <div class="bottom-section">
          <div class="bottom-section-item" v-for="(item, index) in sectionBottomList" :key="index" :style="{backgroundImage:'url(' + item.imgUrl + ')'}">
            <p>{{item.title}}</p>
          </div>
        </div>
        <Icon type="ios-arrow-forward" @click="goRight" style="cursor:pointer"/>
      </div>
    </div>
  </div>
</template>

<script>
import Head from '../../components/Head.vue'
import Tabs from '../../components/Tabs.vue'
import SectionCard from '../../components/SectionCard.vue'
import {Icon} from 'iview';
import echarts from "echarts";

export default {
  name: 'app',
  components: {
    Head,
    Tabs,
    Icon,
    'section-card': SectionCard
  },
   data: () => {
    return {
      sectionLeftList: [
        {
          title: '黑名单',
          imgUrl: require('../../assets/black-list.png'),
        },
        {
          title: '从业人员',
          imgUrl: require('../../assets/work-people.png'),
        },
        {
          title: '客运业户',
          imgUrl: require('../../assets/cars.png'),
        },
        {
          title: '业户经营状态',
          imgUrl: require('../../assets/business.png'),
        }
        ,
        {
          title: '客运能力',
          imgUrl: require('../../assets/bus.png'),
        }
        ,
        {
          title: '车辆年审状态',
          imgUrl: require('../../assets/year-check.png'),
        }
        ,
        {
          title: '客运场站',
          imgUrl: require('../../assets/station.png'),
        }
        ,
        {
          title: '省市际班车',
          imgUrl: require('../../assets/city-cars.png'),
        }
      ],
      blackListNum: 3,
      blackVipNum: 6,
      workPeopleNum: 30000,
      workPeopleIn: 12000,
      workPeoRa: 80,
      carOwnerNum: 500,
      taxiOwnerNum: 127,
      netRa: 22,
      carNum: 553,
      texiNum: 127,
      stationNum: 2142,
      stationRa: 17,
      cityBusNum: 2856,
      cityLineNum: 10036,
      dayCityNum: 420,
      sectionBottomList: [],
      sectionBottomListAll: [
        {
          index: 0,
          title: '运政协同管理系统',
          imgUrl: require('../../assets/business_36.png'),
        },
        {
          index: 1,
          title: '行政审批平台',
          imgUrl: require('../../assets/business_38.png'),
        },
        {
          index: 2,
          title: '信用信息系统',
          imgUrl: require('../../assets/business_40.png'),
        },
        {
          index: 3,
          title: '大数据分析系统',
          imgUrl: require('../../assets/business_42.png'),
        },
        {
          index: 4,
          title: '重点营运车辆联网联控系统',
          imgUrl: require('../../assets/business_44.png'),
        },
        {
          index: 5,
          title: '运政协同管理系统',
          imgUrl: require('../../assets/business_36.png'),
        },
        {
          index: 6,
          title: '行政审批平台',
          imgUrl: require('../../assets/business_38.png'),
        },
        {
          index: 7,
          title: '信用信息系统',
          imgUrl: require('../../assets/business_40.png'),
        },
        {
          index: 8,
          title: '大数据分析系统',
          imgUrl: require('../../assets/business_42.png'),
        },
        {
          index: 9,
          title: '重点营运车辆联网联控系统',
          imgUrl: require('../../assets/business_44.png'),
        }
      ],
      businessStatusData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1111 },
          { '日期': '1/2', '访问用户': 9393 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 1723 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      carCheckData: {
        columns: ['日期', '访问用户'],
        rows: [
          { '日期': '1/1', '访问用户': 1393 },
          { '日期': '1/2', '访问用户': 3333 },
          { '日期': '1/3', '访问用户': 2923 },
          { '日期': '1/4', '访问用户': 5555 },
          { '日期': '1/5', '访问用户': 3792 },
          { '日期': '1/6', '访问用户': 4593 }
        ]
      },
      chartData: {
        columns: ['日期', '访问用户', '下单用户', '下单率'],
        rows: [
          { '日期': '1/1', '访问用户': 1393, '下单用户': 1093, '下单率': 0.32 },
          { '日期': '1/2', '访问用户': 3530, '下单用户': 3230, '下单率': 0.26 },
          { '日期': '1/3', '访问用户': 2923, '下单用户': 2623, '下单率': 0.76 },
          { '日期': '1/4', '访问用户': 1723, '下单用户': 1423, '下单率': 0.49 },
          { '日期': '1/5', '访问用户': 3792, '下单用户': 3492, '下单率': 0.323 },
          { '日期': '1/6', '访问用户': 4593, '下单用户': 4293, '下单率': 0.78 }
        ]
      },
      chartSettings: {
        legendLimit: 0,
        radius: 50,
        label: {
          show: false
        },
        offsetY: 100,
        offsetX: 50
      },
      start: 0,
      end: 5
    };
  },
  methods: {
    goto(value) {
      document.location = `./${value}.html`
    },
    drawChart() {
      let myChart = echarts.init(document.getElementById("histogram"));
      let option = {
        title: {
          show: false
        },
        tooltip: {},
        legend: {
          show: false
        },
        xAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          data: ['1月','2月','3月','4月','5月','6月','7月','8月','9月','10月','11月','12月']
        },
        yAxis: {
          axisLine: {
            lineStyle: {
              color: '#fff'
            }
          },
          name: '单位'
        },
        series: [
          {
            type: "bar",
            itemStyle: {
              normal: {
                color: new echarts.graphic.LinearGradient(0,0,0,1,[
                  {offset: 0, color: '#75b1ff'},
                  {offset: 1, color: '#0367e4'}
                ])
              }
            },
            data: [5, 20, 36, 10, 10, 20, 30, 20, 40, 10, 33, 54]
          }
        ]
      };
      myChart.setOption(option);
    },
    drawPieChartOne() {
      let myChart = echarts.init(document.getElementById("pieOne"));
      let option = option = {
          title : {
            show: false
          },
          tooltip : {
              trigger: 'item',
          },
          legend: {
            show :false
          },
          series : [
            {
              name: '业户经营状态',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:335, name:'状态1'},
                  {value:310, name:'状态2'},
                  {value:234, name:'状态3'},
                  {value:135, name:'状态4'},
                  {value:1548, name:'状态5'}
              ],
              itemStyle: {
                normal : {
                  label : {
                    show : false   //隐藏标示文字
                  },
                  labelLine : {
                    show : false   //隐藏标示线
                  }
                }
              }
            }
          ]
      };
      myChart.setOption(option);
    },
    drawPieChartTwo() {
      let myChart = echarts.init(document.getElementById("pieTwo"));
      let option = option = {
          title : {
            show: false
          },
          tooltip : {
              trigger: 'item',
          },
          legend: {
            show :false
          },
          series : [
            {
              name: '车辆年审状态',
              type: 'pie',
              radius : '55%',
              center: ['50%', '60%'],
              data:[
                  {value:535, name:'状态1'},
                  {value:120, name:'状态2'},
                  {value:434, name:'状态3'},
                  {value:822, name:'状态4'},
                  {value:1548, name:'状态5'}
              ],
              itemStyle: {
                normal : {
                  label : {
                    show : false   //隐藏标示文字
                  },
                  labelLine : {
                    show : false   //隐藏标示线
                  }
                }
              }
            }
          ]
      };
      myChart.setOption(option);
    },
    goLeft() {
      if (this.start === 0) {
        alert('没有更多数据');
        return
      }
      this.start = this.start - 1;
      this.end = this.end - 1;
      this.getSectionBottomList(this.start, this.end);
    },
    goRight() {
      if (this.end === this.sectionBottomListAll.length -1) {
        alert('没有更多数据');
        return
      }
      this.start = this.start + 1;
      this.end = this.end + 1;
      this.getSectionBottomList(this.start, this.end);
    },
    getSectionBottomList(start, end) {
      this.sectionBottomList = this.sectionBottomListAll.slice(start, end);
    }
  },
  created() {
    this.getSectionBottomList(this.start, this.end);
  },
  mounted() {
    this.drawChart();
    this.drawPieChartOne();
    this.drawPieChartTwo();
  }
}
</script>

<style lang="scss" scoped>
  .content {
    margin: 0 45px;
  }

  .business {
    .can-click {
      cursor: pointer;
    }
    .top {
      margin: 20px 0 40px 0;
      display: flex;
      justify-content: space-between;
      align-content: center;
      height: 790px;
      .left {
        width: 1120px;
        margin-right: 30px;
          .title {
            width: 260px;
            height: 50px;
            background-image: url('../../assets/business_03.png');
            background-size: 100% 100%;
            margin-bottom: 22px;
            p {
              line-height: 50px;
              color: #fff;
              font-size: 22px;
              margin-left: 75px;
            }
          }
          .section {
            display: flex;
            flex-wrap: wrap;
            justify-content: space-between;
            align-items: center;
            .row {
              display: flex;
              justify-content: space-between;
              align-items: center;
              height: 25px;
              margin-top: 20px;
              .name {
                font-size: 16px;
                color: #97a0c5;
              }
              .value {
                color: #fff;
                .black-value {
                  height: 24px;
                  background-color: #3a6bba;
                  border-radius: 5px;
                  p {
                    line-height: 24px;
                    padding: 0 8px;
                  }
                }
                .work-value {
                  p {
                    color: #f4b822;
                    font-size: 20px;
                    font-weight: 700;
                    span {
                      color: #fff;
                      font-size: 16px
                    }
                  }
                  &.work-radio {
                    p {
                      color: #d83300;
                    }
                  }
                }
              }
            }
          }
      }
      .right {
        width: 690px;
        .right-section {
          width: 690px;
          height: 790px;
          background-color: #11225a;
          border: 1px solid #1e50ce;
          #histogram {
            width: 690px;
            height: 700px;
          }
          p {
            padding-top: 40px;
            font-size: 24px;
            color: #fff;
            text-align: center;
          }
        }
      }
    }
    .bottom {
      display: flex;
      justify-content: space-around;
      align-items: center;
      margin-bottom: 40px;
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
        display: flex;
        align-items: center;
        p {
          font-size: 20px;
          color: #fff;
          text-align: start;
          width: 175px;
          margin-left: 70px;
        }
      }
    }
  }
</style>

<style>
 
.bottom-for-icon .ivu-icon {
  width:40px;
  font-size: 40px;
}

</style>

