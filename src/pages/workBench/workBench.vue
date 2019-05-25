<template>
  <div id="app" style="minWidth: 1300px">
    <Head></Head>
    <div class="content workbench">
      <Tabs select="workBench"></Tabs>
      <div class="bottom">
        <div class="left">
          <Card>
            <template v-slot:title-name>
              <p>{{sectionList[0].title}}</p>
            </template>
            <template v-slot:card-content>
              <div class="bus-card-content">
                <div class="row">
                  <div class="name">经营业户</div>
                  <div class="value">
                    <div class="bus-value">
                      <p>
                        {{busOwnerNum}}
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">从业人员</div>
                  <div class="value">
                    <div class="bus-value">
                      <p>
                        {{busJoinNum}}
                        <span>人</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">线路总数</div>
                  <div class="value">
                    <div class="bus-value">
                      <p>
                        {{busLinerNum}}
                        <span>条</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">车辆总数</div>
                  <div class="value">
                    <div class="bus-value">
                      <p>
                        {{busTotalNum}}
                        <span>辆</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template v-slot:title-name>
              <p>{{sectionList[1].title}}</p>
            </template>
            <template v-slot:card-content>
              <div class="taxi-card-content">
                <div class="row">
                  <div class="name">经营业户</div>
                  <div class="value">
                    <div class="taxi-value">
                      <p>
                        {{taxiOwnerNum}}
                        <span>户</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">从业人员</div>
                  <div class="value">
                    <div class="taxi-value">
                      <p>
                        {{taxiJoinNum}}
                        <span>人</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">公交数量</div>
                  <div class="value">
                    <div class="taxi-value">
                      <p>
                        {{taxiTotalNum}}
                        <span>辆</span>
                      </p>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">网约车数量</div>
                  <div class="value">
                    <div class="taxi-value">
                      <p>
                        {{netTotalNum}}
                        <span>辆</span>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template v-slot:title-name>
              <p>{{sectionList[2].title}}</p>
            </template>
            <template v-slot:card-content>
              <div class="truck-card-content">
                <div class="row">
                  <div class="name">经营业户</div>
                  <circle-progress
                    :width="circleOption.width"
                    :radiusInside="circleOption.radiusInside"
                    :radiusOuter="circleOption.radiusOuter"
                    :progress="truckOwnerNProgress"
                    :barColor="circleOption.barColor"
                    :backgroundColor="circleOption.backgroundColor"
                    :duration="circleOption.duration"
                    :textColor="circleOption.textColor"
                    :id="1"
                  ></circle-progress>
                  <div class="info-content">
                    <div>普货</div>
                    <div>{{truckOwnerN}}户</div>
                  </div>
                  <circle-progress
                    :width="circleOption.width"
                    :radiusInside="circleOption.radiusInside"
                    :radiusOuter="circleOption.radiusOuter"
                    :progress="truckOwnerNDrogress"
                    :barColor="circleOption.barColor"
                    :backgroundColor="circleOption.backgroundColor"
                    :duration="circleOption.duration"
                    :textColor="circleOption.textColor"
                    :id="2"
                  ></circle-progress>
                  <div class="info-content">
                    <div>危货</div>
                    <div>{{truckOwnerN}}户</div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">从业人员</div>
                  <circle-progress
                    :width="circleOption.width"
                    :radiusInside="circleOption.radiusInside"
                    :radiusOuter="circleOption.radiusOuter"
                    :progress="truckJoinNProgress"
                    :barColor="circleOption.barColor"
                    :backgroundColor="circleOption.backgroundColor"
                    :duration="circleOption.duration"
                    :textColor="circleOption.textColor"
                    :id="3"
                  ></circle-progress>
                  <div class="info-content">
                    <div>普货</div>
                    <div>{{truckJoinN}}人</div>
                  </div>
                  <circle-progress
                    :width="circleOption.width"
                    :radiusInside="circleOption.radiusInside"
                    :radiusOuter="circleOption.radiusOuter"
                    :progress="truckJoinNDrogress"
                    :barColor="circleOption.barColor"
                    :backgroundColor="circleOption.backgroundColor"
                    :duration="circleOption.duration"
                    :textColor="circleOption.textColor"
                    :id="4"
                  ></circle-progress>
                  <div class="info-content">
                    <div>危货</div>
                    <div>{{truckJoinD}}人</div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">车辆总数</div>
                  <circle-progress
                    :width="circleOption.width"
                    :radiusInside="circleOption.radiusInside"
                    :radiusOuter="circleOption.radiusOuter"
                    :progress="truckNumNProgress"
                    :barColor="circleOption.barColor"
                    :backgroundColor="circleOption.backgroundColor"
                    :duration="circleOption.duration"
                    :textColor="circleOption.textColor"
                    :id="5"
                  ></circle-progress>
                  <div class="info-content">
                    <div>普货</div>
                    <div>{{truckNumN}}辆</div>
                  </div>
                  <circle-progress
                    :width="circleOption.width"
                    :radiusInside="circleOption.radiusInside"
                    :radiusOuter="circleOption.radiusOuter"
                    :progress="truckNumNDrogress"
                    :barColor="circleOption.barColor"
                    :backgroundColor="circleOption.backgroundColor"
                    :duration="circleOption.duration"
                    :textColor="circleOption.textColor"
                    :id="6"
                  ></circle-progress>
                  <div class="info-content">
                    <div>危货</div>
                    <div>{{truckNumD}}辆</div>
                  </div>
                </div>
                <div class="row">
                  <div class="name">运力吨位</div>
                  <circle-progress
                    :width="circleOption.width"
                    :radiusInside="circleOption.radiusInside"
                    :radiusOuter="circleOption.radiusOuter"
                    :progress="truckWeightNProgress"
                    :barColor="circleOption.barColor"
                    :backgroundColor="circleOption.backgroundColor"
                    :duration="circleOption.duration"
                    :textColor="circleOption.textColor"
                    :id="7"
                  ></circle-progress>
                  <div class="info-content">
                    <div>普货</div>
                    <div>{{truckWeightN}}户</div>
                  </div>
                  <circle-progress
                    :width="circleOption.width"
                    :radiusInside="circleOption.radiusInside"
                    :radiusOuter="circleOption.radiusOuter"
                    :progress="truckWeightNDrogress"
                    :barColor="circleOption.barColor"
                    :backgroundColor="circleOption.backgroundColor"
                    :duration="circleOption.duration"
                    :textColor="circleOption.textColor"
                    :id="8"
                  ></circle-progress>
                  <div class="info-content">
                    <div>危货</div>
                    <div>{{truckWeightD}}户</div>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template v-slot:title-name>
              <p>{{sectionList[3].title}}</p>
            </template>
            <template v-slot:card-content>
              <div class="board-content">
                <div class="board" v-for="(item, index) in boardList" :key="index">
                  <p class="board-title">{{item.title}}</p>
                  <div
                    class="board-num"
                    :style="{backgroundImage:'url(' + item.imgUrl + ')'}"
                  >{{item.num}}</div>
                </div>
              </div>
            </template>
          </Card>
          <Card>
            <template v-slot:title-name>
              <p>{{sectionList[4].title}}</p>
            </template>
            <template v-slot:card-content>
              <div id="repair-content"></div>
            </template>
          </Card>
          <Card>
            <template v-slot:title-name>
              <p>{{sectionList[5].title}}</p>
            </template>
            <template v-slot:card-content>
              <div class="safety-content">
                <div class="safety-circles">
                  <div>
                    <circle-progress
                      :width="65"
                      :radiusInside="6"
                      :radiusOuter="10"
                      :progress="65"
                      :barColor="'#ffba1c'"
                      :backgroundColor="'#00a2d2'"
                      :duration="circleOption.duration"
                      :textColor="'#fff'"
                      :id="9"
                      :textFontSize="20"
                    ></circle-progress>
                    <p>GPS安装率</p>
                  </div>
                  <div>
                    <circle-progress
                      :width="65"
                      :radiusInside="6"
                      :radiusOuter="10"
                      :progress="48"
                      :barColor="'#ffba1c'"
                      :backgroundColor="'#00a2d2'"
                      :duration="circleOption.duration"
                      :textColor="'#fff'"
                      :id="9"
                      :textFontSize="20"
                    ></circle-progress>
                    <p>GPS轨道完成度</p>
                  </div>
                </div>
                <div class="safety-infos">
                  <div class="safety-info-item">
                    <span class="title">危货车辆数</span>
                    <div class="for-bg"></div>
                    <span class="num">428辆</span>
                  </div>
                  <div class="safety-info-item">
                    <span class="title">事故发生数</span>
                    <div class="for-bg"></div>
                    <span class="num">45123起</span>
                  </div>
                </div>
              </div>
            </template>
          </Card>
          <Card class="data-last">
            <template v-slot:title-name>
              <p>{{sectionList[6].title}}</p>
            </template>
            <template v-slot:card-content>
              <div class="data-content">
                <div class="data-content-item">
                  <div class="for-title">
                    <div class="pie" id="pieOne"></div>
                    <div class="title-info">
                      <p>19523</p>
                      <p>人员总数</p>
                    </div>
                  </div>
                  <div class="data-type-title">从业人员</div>
                  <div class="data-type-num">
                    1.95
                    <span>万人</span>
                  </div>
                </div>
                <div class="data-content-item">
                  <div class="pie" id="pieTwo"></div>
                  <div class="data-type-title">运营车辆</div>
                  <div class="data-type-num">
                    1.21
                    <span>万辆</span>
                  </div>
                </div>
                <div class="data-content-item">
                  <div class="pie" id="pieThree"></div>
                  <div class="data-type-title">经营业户</div>
                  <div class="data-type-num">
                    1.03
                    <span>万户</span>
                  </div>
                </div>
                <div class="data-content-item">
                  <div class="pie" id="pieFour"></div>
                  <div class="data-type-title">线路总数</div>
                  <div class="data-type-num">
                    1.19
                    <span>万条</span>
                  </div>
                </div>
              </div>
            </template>
          </Card>
        </div>
        <div class="right">
          <div class="section">
            <div class="title">
              <p>地图总览</p>
            </div>
            <div class="section-content">
              <div id="map"></div>
              <div class="map-info">
                <div class="map-info-title">{{mapInfo.name}}</div>
                <div class="map-info-item">
                  <div class="map-info-item-name">经营业户：</div>
                  <div class="map-info-item-content">
                    <span>{{mapInfo.owner}}</span>万户
                  </div>
                </div>
                <div class="map-info-item">
                  <div class="map-info-item-name">营运车辆：</div>
                  <div class="map-info-item-content">
                    <span>{{mapInfo.cars}}</span>万辆
                  </div>
                </div>
                <div class="map-info-item">
                  <div class="map-info-item-name">从业人员：</div>
                  <div class="map-info-item-content">
                    <span>{{mapInfo.join}}</span>万户
                  </div>
                </div>
                <div class="map-info-item">
                  <div class="map-info-item-name">线路管理：</div>
                  <div class="map-info-item-content">
                    <span>{{mapInfo.lines}}</span>条
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="section-right">
            <div class="section-right-title">
              <p>
                公示信息
              </p>
            </div>
            <div class="section-right-content">
              <div class="row">
                <div class="item-one">事项</div>
                <div class="item-two">时间</div>
                <div class="item-three">更多</div>
              </div>
              <div class="row">
                <div class="item-one">公示公告名称1</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
              <div class="row">
                <div class="item-one">公示公告名称2</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
              <div class="row">
                <div class="item-one">公示公告名称3</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
            </div>
          </div>
          <div class="section-right">
            <div class="section-right-title">
              <p>
                待办事项
              </p>
            </div>
            <div class="section-right-content">
              <div class="row">
                <div class="item-one">事项</div>
                <div class="item-two">时间</div>
                <div class="item-three">更多</div>
              </div>
              <div class="row">
                <div class="item-one">具体待办事项1</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
              <div class="row">
                <div class="item-one">具体待办事项2</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
              <div class="row">
                <div class="item-one">具体待办事项3</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
            </div>
          </div>
          <div class="section-right">
            <div class="section-right-title">
              <p>
                督察督办
              </p>
            </div>
            <div class="section-right-content">
              <div class="row">
                <div class="item-one">事项</div>
                <div class="item-two">时间</div>
                <div class="item-three">更多</div>
              </div>
              <div class="row">
                <div class="item-one">督察督办事项1</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
              <div class="row">
                <div class="item-one">督察督办事项2</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
              <div class="row">
                <div class="item-one">督察督办事项3</div>
                <div class="item-two">20180901</div>
                <div class="item-three"><div class="more-icon"></div></div>
              </div>
            </div>
          </div>
          <div class="section-right">
            <div class="section-right-title">
              <p>
                重点关注名单
              </p>
            </div>
            <div class="section-right-content">
              <Select v-model="select1" class="select">
                <Option value="0">客运</Option>
                <Option value="1">出租</Option>
                <Option value="2">滴滴</Option>
              </Select>
              <div class="focus-list">
                <div class="focus-left">
                  <div class="focus-item">
                    <div class="focus-title">
                      人数总数：
                    </div>
                    <div class="focus-content">
                      <span style="color:#018fd2">4523</span>人
                    </div>
                  </div>
                  <div class="focus-item">
                    <div class="focus-title">
                      新增人生：
                    </div>
                    <div class="focus-content">
                      <span style="color:#ff0035">18</span>人
                    </div>
                  </div>
                   <div class="focus-button">
                    <button class="focus-button-item">
                      黑名单
                    </button>
                  </div>
                </div>
                <div class="focus-right">
                  <div class="focus-item">
                    <div class="focus-title">
                      人数总数：
                    </div>
                    <div class="focus-content">
                      <span style="color:#00bd45">1801</span>人
                    </div>
                  </div>
                  <div class="focus-item">
                    <div class="focus-title">
                      新增人生：
                    </div>
                    <div class="focus-content">
                      <span style="color:#fff100">62</span>人
                    </div>
                  </div>
                  <div class="focus-button">
                    <button class="focus-button-item">
                      重点关注
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../../components/Head.vue";
import Tabs from "../../components/Tabs.vue";
import Card from "../../components/Card.vue";
import CircleProgress from "../../components/Circles.vue";
import echarts from "echarts";
import HighCharts from "highcharts";
import sichuan from "../../components/sichuan.js";

export default {
  name: "app",
  components: {
    Head,
    Tabs,
    Card,
    "circle-progress": CircleProgress
  },
  data: () => {
    return {
      select1: '0',
      mapInfo: {
        name:'', 
        owner: '',
        cars: '',
        join: '',
        lines: ''
      },
      busOwnerNum: 288,
      busJoinNum: 182,
      busLinerNum: 118,
      busTotalNum: 822,

      taxiOwnerNum: 4523,
      taxiJoinNum: 2356,
      taxiTotalNum: 1248,
      netTotalNum: 78158,

      truckOwnerN: 246,
      truckOwnerD: 425,
      truckOwnerNProgress: 25,
      truckOwnerNDrogress: 75,

      truckJoinN: 169,
      truckJoinD: 642,
      truckJoinNProgress: 45,
      truckJoinNDrogress: 55,

      truckNumN: 841,
      truckNumD: 614,
      truckNumNProgress: 20,
      truckNumNDrogress: 80,

      truckWeightN: 126,
      truckWeightD: 294,
      truckWeightNProgress: 35,
      truckWeightNDrogress: 65,

      circleOption: {
        isShow: true,
        width: 30,
        radiusInside: 3,
        radiusOuter: 3,
        barColor: "#3fecff",
        backgroundColor: "#113c65",
        duration: 0,
        textColor: "#edc504",
        textFontSize: "12"
      },
      sectionList: [
        {
          title: "客运"
        },
        {
          title: "公交和出租"
        },
        {
          title: "货运"
        },
        {
          title: "驾培和从业"
        },
        {
          title: "维修"
        },
        {
          title: "安稽"
        },
        {
          title: "数据总览"
        }
      ],
      boardList: [
        {
          title: "驾培业务",
          num: 628,
          imgUrl: require("../../assets/workbench-board-1.png")
        },
        {
          title: "培训车辆",
          num: 102152,
          imgUrl: require("../../assets/workbench-board-2.png")
        },
        {
          title: "教练人员",
          num: 452,
          imgUrl: require("../../assets/workbench-board-3.png")
        },
        {
          title: "培新人员",
          num: 71256,
          imgUrl: require("../../assets/workbench-board-4.png")
        }
      ]
    };
  },
  created() {
    HighCharts.maps["cn/sichuan"] = sichuan;
  },
  mounted() {
    this.drawChart();
    this.drawPieChartOne();
    this.drawPieChartTwo();
    this.drawPieChartThree();
    this.drawPieChartFour();
    this.drawMap();
    this.handleMapOver({name:'成都',owner: '5.56', cars: '6.32', join: '51.36', lines: '3248'});
  },
  methods: {
    handleMapOver(data) {
      this.mapInfo = data
    },
    drawMap() {
      let data = [
        { name: "成都",
          data: {name:'成都', owner: '5.56', cars: '6.32', join: '51.36', lines: '3248'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "自贡",
          data: {name:'自贡', owner: '6.56', cars: '1.32', join: '31.36', lines: '1233'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "攀枝花",
          data: {name:'攀枝花', owner: '53.56', cars: '43.32', join: '43.36', lines: '4343'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "泸州",
          data: {name:'泸州',owner: '135.4', cars: '43.32', join: '3.36', lines: '4342'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "德阳",
          data: {name:'德阳',owner: '35.56', cars: '53.32', join: '23.36', lines: '6765'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "绵阳",
          data: {name:'绵阳',owner: '45.56', cars: '54.32', join: '53.36', lines: '524'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "广元",
          data: {name:'广元',owner: '243', cars: '6.54', join: '4757', lines: '765'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "遂宁",
          data: {name:'遂宁',owner: '43.56', cars: '46.32', join: '12.36', lines: '654'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "内江",
          data: {name:'内江',owner: '46.56', cars: '46.32', join: '5641', lines: '432'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "乐山",
          data: {name:'乐山',owner: '2.56', cars: '66.32', join: '65.32', lines: '321'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "南充",
          data: {name:'南充',owner: '5.56', cars: '6.32', join: '51.36', lines: '3248'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "眉山",
          data: {name:'眉山',owner: '42.6', cars: '13.23', join: '3.36', lines: '7683'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "宜宾",
          data: {name:'宜宾',owner: '5.56', cars: '6.32', join: '51.36', lines: '235'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "广安",
          data: {name:'广安',owner: '5.56', cars: '6.32', join: '51.36', lines: '7567'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "达州",
          data: {name:'达州',owner: '5.56', cars: '6.32', join: '51.36', lines: '234'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "雅安",
          data: {name:'雅安',owner: '5.56', cars: '6.32', join: '51.36', lines: '23423'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "巴中",
          data: {name:'巴中',owner: '5.56', cars: '6.32', join: '51.36', lines: '34536'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "资阳",
          data: {name:'资阳',owner: '5.56', cars: '6.32', join: '51.36', lines: '8568'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "阿坝羌族",
          data: {name:'阿坝羌族',owner: '5.56', cars: '6.32', join: '51.36', lines: '4234'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "甘孜",
          data: {name:'甘孜',owner: '5.56', cars: '6.32', join: '51.36', lines: '6542'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        },
        { name: "凉山彝族",
          data: {name:'凉山彝族',owner: '5.56', cars: '6.32', join: '51.36', lines: '53452'},
          events: {
            mouseOver:(event) => {
              this.handleMapOver(event.target.data);
            }
          }
        }
      ];
      // eslint-disable-next-line
      new Highcharts.Map("map", {
        title: {
          text: null
        },
        credits: {
          enabled: false
        },
        chart: {
          backgroundColor: "#0a233f",
          borderColor: '#3baae5'
        },
        series: [
          {
            data: data,
            name: "随机数据",
            // eslint-disable-next-line
            mapData: Highcharts.maps["cn/sichuan"],
            joinBy: "name", // 根据 name 属性进行关联
            showInLegend: false,
            borderColor: '#3baae5'
          }
        ],
        tooltip: {
          enabled: false
        },
        colors: ['#1b2e78', '#c3aa25'],
        plotOptions: {
        series: {
          events: {
            mouseOut: () => {
              this.handleMapOver({name:'成都',owner: '5.56', cars: '6.32', join: '51.36', lines: '3248'});
            }
          }
        }
      },
      });
    },
    drawChart() {
      let myChart = echarts.init(document.getElementById("repair-content"));
      let option = {
        color: ["#159148", "#f98a4c", "#f76b86", "#317ab0"],
        tooltip: {
          trigger: "axis",
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: "shadow" // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          textStyle: {
            color: "#fff"
          },
          bottom: 0,
          data: ["维修业户", "汽车维修", "危货维修", "排放检测"]
        },
        grid: {
          top: "20px"
        },
        xAxis: [
          {
            show: false,
            data: [""]
          }
        ],
        yAxis: [
          {
            show: false
          }
        ],
        series: [
          {
            name: "维修业户",
            type: "bar",
            barGap: "0.1px",
            data: [553],
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff"
                  },
                  formatter: "{c}家"
                }
              }
            }
          },
          {
            name: "汽车维修",
            type: "bar",
            data: [820],
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff"
                  },
                  formatter: "{c}次"
                }
              }
            }
          },
          {
            name: "危货维修",
            type: "bar",
            data: [650],
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff"
                  },
                  formatter: "{c}次"
                }
              }
            }
          },
          {
            name: "排放检测",
            type: "bar",
            data: [980],
            itemStyle: {
              normal: {
                label: {
                  show: true, //开启显示
                  position: "top", //在上方显示
                  textStyle: {
                    //数值样式
                    color: "#fff"
                  },
                  formatter: "{c}次"
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawPieChartOne() {
      let myChart = echarts.init(document.getElementById("pieOne"));
      let option = {
        color: [
          "#fdd100",
          "#3fecff",
          "#4c63f2",
          "#ed5400",
          "#03bc8c",
          "#ff4873",
          "#1fb5a5"
        ],
        title: {
          show: false
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          show: false
        },
        series: [
          {
            name: "业户经营状态",
            type: "pie",
            radius: ["50%", "70%"],
            center: ["50%", "48%"],
            data: [
              { value: 335, name: "状态1" },
              { value: 310, name: "状态2" },
              { value: 234, name: "状态3" },
              { value: 135, name: "状态4" },
              { value: 1548, name: "状态5" }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false //隐藏标示文字
                },
                labelLine: {
                  show: false //隐藏标示线
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
      let option = {
        color: [
          "#fdd100",
          "#3fecff",
          "#4c63f2",
          "#ed5400",
          "#7351e3",
          "#ff4873",
          "#1fb5a5"
        ],
        title: {
          show: false
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          show: false
        },
        series: [
          {
            name: "车辆年审状态",
            type: "pie",
            radius: ["20%", "70%"],
            center: ["50%", "48%"],
            data: [
              { value: 535, name: "状态1" },
              { value: 120, name: "状态2" },
              { value: 434, name: "状态3" },
              { value: 822, name: "状态4" },
              { value: 1548, name: "状态5" }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false //隐藏标示文字
                },
                labelLine: {
                  show: false //隐藏标示线
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawPieChartThree() {
      let myChart = echarts.init(document.getElementById("pieThree"));
      let option = {
        color: [
          "#fdd100",
          "#3fecff",
          "#4c63f2",
          "#ed5400",
          "#7351e3",
          "#ff4873",
          "#1fb5a5"
        ],
        title: {
          show: false
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          show: false
        },
        series: [
          {
            name: "车辆年审状态",
            type: "pie",
            radius: ["20%", "70%"],
            center: ["50%", "48%"],
            data: [
              { value: 535, name: "状态1" },
              { value: 120, name: "状态2" },
              { value: 434, name: "状态3" },
              { value: 822, name: "状态4" },
              { value: 1548, name: "状态5" }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false //隐藏标示文字
                },
                labelLine: {
                  show: false //隐藏标示线
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    },
    drawPieChartFour() {
      let myChart = echarts.init(document.getElementById("pieFour"));
      let option = {
        color: [
          "#fdd100",
          "#3fecff",
          "#4c63f2",
          "#ed5400",
          "#7351e3",
          "#ff4873",
          "#1fb5a5"
        ],
        title: {
          show: false
        },
        tooltip: {
          trigger: "item"
        },
        legend: {
          show: false
        },
        series: [
          {
            name: "车辆年审状态",
            type: "pie",
            radius: ["20%", "70%"],
            center: ["50%", "48%"],
            data: [
              { value: 535, name: "状态1" },
              { value: 120, name: "状态2" },
              { value: 434, name: "状态3" },
              { value: 822, name: "状态4" },
              { value: 1548, name: "状态5" }
            ],
            itemStyle: {
              normal: {
                label: {
                  show: false //隐藏标示文字
                },
                labelLine: {
                  show: false //隐藏标示线
                }
              }
            }
          }
        ]
      };
      myChart.setOption(option);
    }
  }
};
</script>

<style lang="scss" scoped>
.content {
  margin: 0 45px;
}

.bottom {
  display: flex;
  .left {
    display: flex;
    height: 900px;
    width: 880px;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: center;
    .section-card {
      .section-card-content {
        .bus-card-content {
          padding: 28px 35px 0 35px;
          .row {
            margin-bottom: 8px;
            .value {
              .bus-value {
                p {
                  color: #fdd100;
                  font-size: 30px;
                  font-weight: 700;
                  span {
                    color: #fff;
                    font-size: 20px;
                  }
                }
              }
            }
          }
        }
        .taxi-card-content {
          padding: 28px 35px 0 15px;
          .row {
            margin-bottom: 8px;
            .name {
              width: 100px;
              text-align: end;
            }
            .value {
              .taxi-value {
                p {
                  color: #00ffff;
                  font-size: 30px;
                  font-weight: 700;
                  span {
                    color: #fff;
                    font-size: 20px;
                  }
                }
              }
            }
          }
        }
        .truck-card-content {
          padding: 20px 12px 0 15px;
          justify-content: space-between;
          .row {
            .info-content {
              font-size: 12px;
              color: #fff;
            }
            margin-bottom: 10px;
          }
        }
        .board-content {
          display: flex;
          flex-wrap: wrap;
          padding: 18px 20px 0 20px;
          height: 200px;
          justify-content: space-between;
          align-content: space-between;
          .board {
            text-align: center;
            width: 105px;
            height: 80px;
            .board-title {
              font-size: 18px;
              color: #fff;
              height: 20px;
              line-height: 20px;
              margin-bottom: 10px;
            }
            .board-num {
              background-size: 100% 100%;
              height: 55px;
              padding-bottom: 30px;
              line-height: 55px;
              color: #fff;
              font-size: 26px;
              font-weight: 700;
            }
          }
        }
        #repair-content {
          width: 275px;
          height: 230px;
          padding: 20px 0;
        }
        .safety-content {
          padding: 25px 20px 0 20px;
          .safety-circles {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .circle {
              margin: 0 auto;
            }
            p {
              color: #fff;
              font-size: 18px;
              text-align: center;
              margin-top: 10px;
            }
          }
          .safety-infos {
            margin-top: 15px;
            color: #fff;
            font-size: 18px;
            .safety-info-item {
              &:first-child {
                .for-bg {
                  background-image: url("../../assets/safety-1.png");
                  background-size: 100% 100%;
                  width: 40px;
                  height: 10px;
                  display: inline-block;
                }
                .num {
                  color: #01f0f2;
                }
              }
              &:last-child {
                .for-bg {
                  background-image: url("../../assets/safety-2.png");
                  background-size: 100% 100%;
                  width: 65px;
                  height: 10px;
                  display: inline-block;
                }
                .num {
                  color: #efa804;
                }
              }
            }
          }
        }
        .row {
          display: flex;
          justify-content: space-between;
          align-items: center;
          height: 40px;
          margin-bottom: 25px;
          .name {
            font-size: 20px;
            color: #fff;
          }
          .value {
            color: #fff;
          }
        }
        .data-content {
          display: flex;
          padding: 0 30px 0 30px;
          justify-content: space-between;
          .data-content-item {
            .for-title {
              position: relative;
            }
            .title-info {
              color: #fff;
              position: absolute;
              top: 50%;
              left: 50%;
              transform: translate(-50%, -50%);
              text-align: center;
              p:first-child {
                font-size: 24px;
              }
              p {
                font-size: 14px;
              }
            }
            .data-type-title {
              text-align: center;
              color: #fff;
              font-size: 20px;
              margin-top: -20px;
            }
            .data-type-num {
              text-align: center;
              color: #fdd100;
              font-size: 30px;
              font-weight: 700;
              span {
                font-size: 16px;
                font-weight: 600;
                color: #fff;
              }
            }
          }
          #pieOne {
            width: 200px;
            height: 180px;
          }
          #pieTwo {
            width: 200px;
            height: 180px;
          }
          #pieThree {
            width: 200px;
            height: 180px;
          }
          #pieFour {
            width: 200px;
            height: 180px;
          }
        }
      }
    }
    .data-last {
      flex-grow: 1;
    }
  }
  .right {
    margin-left: 50px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-content: space-between;
    width: 890px;
    height: 900px;
    .section {
      .title {
        width: 210px;
        background-image: url("../../assets/section-title.png");
        background-size: 100% 100%;
        height: 30px;
        margin-bottom: 10px;
        p {
          font-size: 22px;
          color: #fff;
          line-height: 30px;
          margin-left: 40px;
        }
      }
      .section-content {
        width: 890px;
        background-color: #0a2340;
        display: flex;
        justify-content: space-between;
        #map {
          height: 415px;
          width: 570px;
        }
        .map-info {
          width: 260px;
          height: 300px;
          background-color: #122847;
          margin: 60px 35px 0 0;
          padding: 30px 20px 0 25px;
          .map-info-title {
            text-align: center;
            color: #62f1f0;
            font-size: 28px;
            margin-bottom: 28px;
          }
          .map-info-item {
            display: flex;
            justify-content: space-between;
            align-items: center;
            color: #fff;
            font-size: 18px;
            span {
              font-size: 30px;
              color: #eecd1e;
            }
          }
        }
      }
    }
    .section-right {
      width: 420px;
      height: 200px;
      margin-bottom: 16px;
      background-image: url('../../assets/section-right-bg.png');
      background-size: 100% 100%;
      .section-right-title {
        background-image: url('../../assets/section-right-title-bg.png');
        background-size: 100% 100%;
        height: 30px;
        width: 230px;
        p {
          color: #fff;
          font-size: 24px;
          margin-left: 35px;
          line-height: 30px;
        }
      }
      .section-right-content {
        padding: 20px 20px 0 20px;
        position: relative;
        .row {
          display: flex;
          align-items: center;
          justify-content: space-between;
          border-bottom: 1px solid #213953;
          div {
            text-align: center;
            color: #fff;
            font-size: 20px;
            height: 35px;
            line-height: 35px;
          }
          &:first-child {
            font-size: 16px;
            border-bottom: none;
          }
          .item-one {
            width: 180px;
          }
          .item-two {
            width: 100px
          }
          .item-three {
            width: 40px;
            color: #00ffff;
            .more-icon {
              background-image: url('../../assets/more-icon.png');
              background-size: 100% 100%;
              width: 25px;
              height: 25px;
              margin: 0 auto;
            }
          }
        }
        .select {
          position: absolute;
          width: 160px;
          right: 20px;
          top: -10px;
        }
        .focus-list {
          padding: 20px 0 0 0;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: space-between;
          .focus-left {
            width: 170px;
          }
          .focus-right {
            width: 170px;
          }
          .focus-item {
            display: flex;
            align-items: center;
            justify-content: space-between;
            height: 35px;
            .focus-title {
              font-size: 20px;
            }
            .focus-content {
              span {
                font-size: 24px;
              }
            }
          }
          .focus-button {
            text-align: center;
            margin-top: 10px;
            .focus-button-item {
              width: 100px;
              height: 35px;
              color: #fff;
              font-size: 20px;
              background-color: #163e80;
              border: none;
              border-radius: 5px;
            }
          }
        }
      }
    }
  }
}

</style>
<style lang="scss">
  .workbench {
    .section-right-content {
      .ivu-select {
        .ivu-select-selection {
          background-color: #0d2a4f;
          border-color: #0d2a4f;
          color: #fff;
        }
        .ivu-select-arrow {
          color: #fff;
        }
      }
    }
  }
</style>
