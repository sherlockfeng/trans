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
      model3: '',
      model4: '',
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
      ]
    };
  },
  methods: {
    apply() {

    },
    search() {

    }
  }
}
</script>

<style lang="scss" scoped>

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
</style>