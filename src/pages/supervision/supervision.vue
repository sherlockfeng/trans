<template>
  <div id="app" style="minWidth: 1200px">
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
        <div class="table-content">
          <Table :columns="columns1" :data="data1"></Table>
        </div>
      </div>
      <div class="pages">
        <p>每页显示{{single}}条</p>
        <Page :total="31456" show-elevator show-total prev-text="上一页" next-text="下一页"/>
        <p>共{{total}}页</p>
      </div>
    </div>
    <div class="=modal2">
      <Modal v-model="modal2" 
        :closable="false"
        class-name="vertical-center-modal"
      >
        <div class="modal-contant">
            <div class="titles">
              <p class="selected">{{titleList[0]}}</p>
              <p class="notSelected" @click="change">{{titleList[1]}}</p>
              <div class="record"></div>
              <div class="close" @click="close"></div>
            </div>
            <div class="contents">
              <p class="name">督办事项</p>
              <div class="input">
                <Input v-model="value6" type="textarea" :autosize="{minRows: 2,maxRows: 4}" placeholder="请填写具体的相关事项" />
              </div>
              <p class="name">督办内容</p>
              <div class="input">
                <Input v-model="value7" type="textarea" :autosize="{minRows: 2,maxRows: 4}" placeholder="请填写具体的相关内容" />
              </div>
              <div class="selects">
                <div class="select-item">
                  <p class="name">承办单位</p>
                  <div>
                    <Select v-model="model1" style="width:150px">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  </div>
                </div>
                <div class="select-item">
                  <p class="name">协办单位</p>
                  <div>
                    <Select v-model="model2" style="width:150px">
                      <Option v-for="item in cityList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                  </Select>
                  </div>
                </div>
              </div>
              <div class="data">
                <p class="name">截止时间</p>
                <DatePicker type="date" placeholder="请选择时间" size="large" placement="top" style="width: 300px"></DatePicker>
              </div>
              <div class="confirms">
                <Button size="large" class="confirm" @click="confirm">确认</Button>
              </div>
            </div>
        </div>
      </Modal>
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
      model1: '',
      model2: '',
      model3: '',
      model4: '',
      modal2: false,
      value6: '',
      value7: '',
      single: 8,
      total: 386,
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
      company: '',
      columns1: [
          {
            title: '序号',
            key: 'id'
          },
          {
            title: '督办事项',
            key: 'name'
          },
          {
            title: '督办内容',
            key: 'content'
          },
          {
            title: '承办单位',
            key: 'unit'
          },
          {
            title: '督办状态',
            key: 'status'
          },
          {
            title: '具体操作',
            key: 'action',
            render: (h) => {
              return h('Button', {
                        props: {
                          size: 'small'
                        }
                      }, '查看')
            }
          }
      ],
      data1: [
        {
          id: 1,
          name: '黑名单',
          content: '重点监督',
          unit: '客运管理处',
          status: '已办结'
        },
        {
          id: 2,
          name: '黑名单',
          content: '重点监督',
          unit: '客运管理处',
          status: '已办结'
        },
        {
          id: 3,
          name: '黑名单',
          content: '重点监督',
          unit: '客运管理处',
          status: '已办结'
        },
        {
          id: 4,
          name: '黑名单',
          content: '重点监督',
          unit: '客运管理处',
          status: '已办结'
        },
        {
          id: 5,
          name: '黑名单',
          content: '重点监督',
          unit: '客运管理处',
          status: '已办结'
        },
        {
          id: 6,
          name: '黑名单',
          content: '重点监督',
          unit: '客运管理处',
          status: '已办结'
        },
        {
          id: 7,
          name: '黑名单',
          content: '重点监督',
          unit: '客运管理处',
          status: '已办结'
        },
        {
          id: 8,
          name: '黑名单',
          content: '重点监督',
          unit: '客运管理处',
          status: '已办结'
        }
      ],
      titleList: ['发起督办', '督办记录'],
      cityList: [
        {
            value: 'chengdu',
            label: '成都运管处'
        },
        {
            value: 'chengdu1',
            label: '成都1运管处'
        },
        {
            value: 'chengdu2',
            label: '成都2运管处'
        },
        {
            value: 'chengdu3',
            label: '成都3运管处'
        },
        {
            value: 'chengdu4',
            label: '成都4运管处'
        }
    ],
    };
  },
  methods: {
    apply() {
      this.modal2 = true;
    },
    search() {

    },
    close() {
      this.modal2 = false;
    },
    change() {
      let [a, b] = this.titleList;
      this.titleList = [b, a];
    },
    confirm() {
      this.close();
    }
  }
}
</script>

<style lang="scss" scoped>
  $left: 80px;
  $right: 25px;
  .content-all {
    margin: 30px 45px 50px;
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
    .table-content {
      padding: 0 35px;
      margin-top: 20px;
      padding-bottom: 20px;
    }

  }
  .pages {
    display: flex;
    align-items: center;
    justify-content: center;
    color: #fff;
    font-size: 18px;
    height: 50px;
    margin-bottom: 20px;
    p {
      margin-right: 20px;
    }
  }

  .modal-contant {
    background-image: url('../../assets/dubanModal.png');
    background-size: 100% 100%;
    width: 560px;
    max-height: 650px;
    margin: 0;
    .titles {
      position: relative;
      height: 60px;
      p {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
        font-size: 24px;
      }
      div {
        position: absolute;
        top: 50%;
        transform: translate(0, -50%);
      }
      .selected {
        color: #fff;
        left: $left;
      }
      .notSelected {
        color: #66fbf9;
        cursor: pointer;
        left: $left + 210;
      }
      .record {
        background-image: url('../../assets/dubanNot.png');
        background-size: 100% 100%;
        width: 25px;
        height: 18px;
        right: $right + 120;
      }
      .close {
        background-image: url('../../assets/dubanC.png');
        background-size: 100% 100%;
        width: 30px;
        height: 30px;
        right: $right;
        cursor: pointer;
      }
    }
    .contents {
      padding: 50px 55px 30px 55px;
      .name {
        color: #fff;
        font-size: 22px;
        margin-bottom: 10px;
      }
      .input {
        margin-bottom: 20px;
      }
      .selects {
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
      }
      .confirms {
        text-align: center;
        .confirm {
          width: 100px;
          margin-top: 20px;
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

  .table-content {
    .ivu-table-wrapper {
      border: none;
      .ivu-table{
        color: #fff;
        &:before {
          background-color: #07163e;
        }
        &:after {
          background-color: #07163e;
        }
        th {
          background-color: #07163e;
          border-bottom: 1px solid #07163e;
          font-size: 24px;
          text-align: center;
        }
        td {
          background-color: #152543;
          border-bottom: 1px solid #3c4453;
          font-size: 20px;
          text-align: center;
          button {
            background: #212f4d;
            border: 1px solid #4c597a;
            color: #fff;
            &:hover {
              background: #212f4d;
              border: 1px solid #4c597a;
            }
          }

        }
        tr {
          height: 50px;
        }
      }
    }
  }

  .pages {
    li {
      &.ivu-page-item-active {
        border-color: #66fbf9;
      }
      &.ivu-page-custom-text {
        a {
          margin: 10px;
        }
      }
      background-color: #001c46;
      border-color: #001c46;
      a {
        color: #fff;
      }
    }
    input {
      background-color: #001c46;
      border-color: #001c46;
      color: #fff;
    }
  }
}

.vertical-center-modal {
  .ivu-modal {
    width: 560px !important;
    .ivu-modal-content {
      background-color: #091f32;
      .ivu-modal-body {
        padding: 0;
        textarea {
          background-color: #091d2e;
          border-color: #091d2e;
          color: #fff;
        }
        input {
          background-color: #091d2e;
          border-color: #091d2e;
          color: #fff;
        }
        button {
          background: #003e77;
          border: none;
          color: #fff;
          &:hover {
            background: #003e77;
            border: none;
          }
        }
        .ivu-select {
          .ivu-select-selection {
            background-color: #091d2e;
            border-color: #091d2e;
            color: #fff;
          }
          .ivu-select-arrow {
            color: #fff;
          }
        }
      }
      .ivu-modal-footer {
        display: none;
      }
    }
  }
}
</style>