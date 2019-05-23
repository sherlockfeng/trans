<template>
  <div id="app">
    <Head></Head>
    <div class='content manage'>
      <Tabs select="manage"></Tabs>
      <div class="content-all">
        <div class="title">
          <p>机构管理{{isAdd ? '> 新增' : ''}}</p>
        </div>
        <div class="left-content">
          <div class="index-title">
            <p>机构名称</p>
          </div>
          <div class="index-search">
            <Input v-model="indexName" size="large" placeholder="搜索" style="width: 200px" />
          </div>
          <div class="index-content">
            <Tree :data="data2"></Tree>
          </div>
        </div>
        <div class="right-content">
          <div class="handles" v-if='!isAdd'>
            <div class="left">
              <Button size="large" class="startSuper" @click="apply" icon="ios-add-circle">添加</Button>
            </div>
            <div class="right">
                <p class="title-right">机构名称：</p>
                <Input v-model="companyNameSearch" size="large" placeholder="请输入关键字查询" style="width: 200px" />
                <Button size="large" class="search" @click="search">查询</Button>
            </div>
          </div>
          <div class="table-content" v-if='!isAdd'>
            <Table :columns="columns1" :data="data1"></Table>
          </div>
          <div class="pages" v-if='!isAdd'>
            <p>每页显示{{single}}条</p>
            <Page :total="31456" show-elevator show-total prev-text="上一页" next-text="下一页"/>
            <p>共{{total}}页</p>
          </div>
          <div v-if='isAdd' class="add-new">
            <div class="left">
              <div class="row">
                <div class="name">机构名称:</div>
                <div class="inputs">
                  <Input v-model="companyName" size="large" placeholder="请填写机构名称" style="width: 300px" />
                </div>
              </div>
              <div class="row">
                <div class="name address">地址：</div>
                <div class="inputs">
                  <Input v-model="address" type="textarea" :autosize="{minRows: 4,maxRows: 4}"  style="width: 300px" placeholder="请填写具体的相关内容" />
                </div>
              </div>
              <div class="row">
                <div class="name">行政区别：</div>
                <div class="inputs">
                  <Input v-model="position" size="large" placeholder="请填写区域" style="width: 300px" />
                </div>
              </div>
            </div>
            <div class="right">
              <div class="row">
                <div class="name">机构代码：</div>
                <div class="inputs">
                  <Input v-model="companyNum" size="large" placeholder="请填写机构代码" style="width: 300px" />
                </div>
              </div>
              <div class="row">
                <div class="name">机构负责人：</div>
                  <div class="inputs">
                    <Input v-model="leader" size="large" placeholder="请填写机构负责人" style="width: 300px" />
                  </div>
                </div>
                <div class="row">
                  <div class="name">联系电话：</div>
                  <div class="inputs">
                    <Input v-model="phone" size="large" placeholder="请填写上级机构代码" style="width: 300px" />
                  </div>
                </div>
                <div class="row">
                  <div class="name">上级机构代码：</div>
                  <div class="inputs">
                    <Input v-model="topCompanyNum" size="large" placeholder="请填写所在单位" style="width: 300px" />
                  </div>
                </div>
              </div>
          </div>
          <div v-if='isAdd' class="buttons">
            <Button size="large" class="cancle" @click="cancle">返回</Button>
            <Button size="large" class="confirm" @click="confirm">确定</Button>
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
      companyNum: '',
      indexName: '',
      data2: [
        {
            title: '四川省交通运输厅',
            expand: true,
            children: [
                {
                    title: '厅后期中心',
                    expand: false,
                    children: [
                        {
                            title: '厅后期中心1'
                        },
                        {
                            title: '厅后期中心2'
                        }
                    ]
                },
                {
                    title: '厅监管局'
                },
                {
                    title: '江南交通局'
                },
                {
                    title: '厅应急指挥中心'
                },
                {
                    title: '厅安全处(应急办)'
                },
                {
                    title: '厅信息中心',
                    expand: true,
                    children: [
                      {
                        title: '综合办公室'
                      }
                    ]
                },
                {
                    title: '厅交战办'
                },
                {
                    title: '厅总值班室'
                },
                {
                    title: '厅公路局'
                },
                {
                    title: '厅航务局'
                },
                {
                    title: '运管局',
                    expand: false,
                    children: [
                      {
                        title: '运管局1'
                      },
                      {
                        title: '运管局2'
                      },
                      {
                        title: '运管局3'
                      }
                    ]
                },
                {
                    title: '厅高管局(执法总队)'
                },
                {
                    title: '广源市交通局'
                },
            ]
        }
      ],
      leader: '',
      company: '',
      address: '',
      position: '',
      phone: '',
      personId: '',
      isAdd: true,
      columns1: [
          {
            title: '序号',
            key: 'id',
            width: 60,
          },
          {
            title: '机构名称',
            key: 'companyName'
          },
          {
            title: '地址',
            key: 'address'
          },
          {
            title: '机构代码',
            key: 'companyNum'
          },
          {
            title: '机构负责人',
            key: 'leader'
          },
          {
            title: '联系电话',
            key: 'phone'
          },
          {
            title: '行政区别',
            key: 'area'
          },
          {
            title: '上机机构代码',
            key: 'topCompanyNum'
          },
          {
            title: '具体操作',
            key: 'action',
            width: 160,
            render: (h) => {
              return h('div', [
                h('Button', {
                        props: {
                          size: 'small',
                        }
                      }, '修改'),
                h('Button', {
                        props: {
                          size: 'small'
                        }
                      }, '查看'),
                h('Button', {
                        props: {
                          size: 'small'
                        }
                      }, '删除')
              ])
            }
          }
      ],
      data1: [
        {
          id: 1,
          companyName: '厅监管局',
          address: '四川省XXXX',
          companyNum: '1251000450',
          leader: '王胜男',
          phone: '46221210',
          area: 'XXX区',
          topCompanyNum: '155551000450',
          company: '所在单位'
        },
        {
          id: 2,
          companyName: '厅监管局',
          address: '四川省XXXX',
          companyNum: '1251000450',
          leader: '王胜男',
          phone: '46221210',
          area: 'XXX区',
          topCompanyNum: '155551000450',
          company: '所在单位'
        },
        {
          id: 3,
          companyName: '厅监管局',
          address: '四川省XXXX',
          companyNum: '1251000450',
          leader: '王胜男',
          phone: '46221210',
          area: 'XXX区',
          topCompanyNum: '155551000450',
          company: '所在单位'
        },
        {
          id: 4,
          companyName: '厅监管局',
          address: '四川省XXXX',
          companyNum: '1251000450',
          leader: '王胜男',
          phone: '46221210',
          area: 'XXX区',
          topCompanyNum: '155551000450',
          company: '所在单位'
        },
        {
          id: 5,
          companyName: '厅监管局',
          address: '四川省XXXX',
          companyNum: '1251000450',
          leader: '王胜男',
          phone: '46221210',
          area: 'XXX区',
          topCompanyNum: '155551000450',
          company: '所在单位'
        },
        {
          id: 6,
          companyName: '厅监管局',
          address: '四川省XXXX',
          companyNum: '1251000450',
          leader: '王胜男',
          phone: '46221210',
          area: 'XXX区',
          topCompanyNum: '155551000450',
          company: '所在单位'
        },
        {
          id: 7,
          companyName: '厅监管局',
          address: '四川省XXXX',
          companyNum: '1251000450',
          leader: '王胜男',
          phone: '46221210',
          area: 'XXX区',
          topCompanyNum: '155551000450',
          company: '所在单位'
        },
        {
          id: 8,
          companyName: '厅监管局',
          address: '四川省XXXX',
          companyNum: '1251000450',
          leader: '王胜男',
          phone: '46221210',
          area: 'XXX区',
          topCompanyNum: '155551000450',
          company: '所在单位'
        }
      ],
      companyName: '',
      topCompanyNum: '',
      single: 8,
      total: 386,
    };
  },
  methods: {
    apply() {
      this.isAdd = true;
    },
    search() {

    },
    confirm() {
      this.cancle();
    },
    cancle() {
      this.isAdd = false;
    }
  }
}
</script>

<style lang="scss" scoped>

  .content-all {
    margin: 30px 45px 50px;
    min-width: 1110px;
    background-color: #09243a;
    display: flex;
    justify-content: space-around;
    flex-direction: row;
    flex-wrap: wrap;
    .title {
      height: 70px;
      background-color: #0a2945;
      padding: 0 35px;
      flex: 0 1 100%;
      p {
        color: #fff;
        line-height: 70px;
        font-size: 28px;
      }
    }
    .left-content {
      margin-top: 30px;
      margin-bottom: 20px;
      width: 300px;
      background-color: #0f1937;
      .ivu-menu-vertical{
        width: 300px !important;
      }
      .index-title {
        background-color: #0d234c;
        color: #157ecf;
        height: 35px;
        line-height: 35px;
        text-align: center;
        font-size: 20px;
        margin-bottom: 10px;
      }
      .index-search {
        text-align: center;
        margin-bottom: 30px;
      }
      .index-content {
        width: 200px;
        margin-left: 20px;
        color: #1790e9;
        .ivu-tree-title {
          color: #fff;
        }
      }
    }
    .right-content {
      min-width: 1100px;
      margin-bottom: 20px;
      width: 1300px;
      margin-top: 30px;
      background-color: #152543;
      .handles {
        padding: 30px 0 35px 0;
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
          right: 0;
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
        margin-top: 20px;
        padding-bottom: 20px;
      }
    }
    
    .add-new {
      padding: 50px 40px 0px 40px;
      display: flex;
      justify-content: space-between;
      .row {
        display: flex;
        align-items: center;
        margin-bottom: 60px;
        &:last-child {
          margin-bottom: 50px;
        }
        .name {
          font-size: 20px;
          color: #7c818e;
          width: 140px;
          text-align: end;
        }
        .address {
          align-self: end;
        }
        .inputs {
          vertical-align: top;
          margin-left: 20px;
        }
      }
    }
    .buttons {
      text-align: center;
      padding-bottom: 40px;
      .cancle {
        margin-right: 40px;
        background-color: #09243a;
        border-color: #003e77;
        color: #7093b1;
      }
      .confirm {
        background-color: #003e77;
        border-color: #003e77;
        color: #fff;
      }
      button {
        width: 150px;
      }
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
  .inputs {
    input {
      background-color: #091c2e;
      border-color: #09243a;
      color: #fff;
      height: 45px;
    }
    button {
      background: #0f1635;
      border: none;
      color: #6bfdfb;
      &:hover {
        background: #0f1635;
        border: none;
      }
    }
  }

.manage {
  .left-content {
    .index-search{
      input {
        background-color: #0f1937;
        border-color: #475e9d;
        color: #fff;
      }
    }
    .index-content {
      .ivu-tree-title {
        color: #fff;
        font-size: 18px;
        &:hover {
          background-color: #003e78;
        }
      }
      .ivu-tree-title-selected {
        background-color: #003e78;
      }
    }
  }
  .handles {
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
          font-size: 20px;
          text-align: center;
        }
        td {
          background-color: #152543;
          border-bottom: 1px solid #3c4453;
          font-size: 18px;
          text-align: center;
          button {
            background: #212f4d;
            border: 1px solid #4c597a;
            color: #fff;
            margin-right: 10px;
            &:last-child {
              margin-right: 0
            }
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

  .add-new {
    textarea {
      background-color: #091d2e;
      border-color: #091d2e;
      color: #fff;
    }
    .ivu-radio-wrapper {
      font-size: 22px;
      color: #fff;
    }
    label:first-child {
      margin-right: 40px;
    }
    .select {
      .ivu-select-selection {
        background-color: #091d2e;
        border:1px solid #091d2e;
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
          border: 1px solid #091d2e;
        }
      }
      .ivu-select-arrow {
        color: #fff;
      }
    }
  }
}
</style>