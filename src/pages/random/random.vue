<template>
  <div id="app" style="minWidth: 1300px">
    <Head></Head>
    <div class='content random'>
      <Tabs select="random"></Tabs>
      <div class="content-all">
        <div class="title">
          <p>执法人员管理{{isAdd ? '> 新增' : ''}}</p>
        </div>
        <div class="handles" v-if='!isAdd'>
          <div class="left">
            <Button size="large" class="startSuper" @click="apply" icon="ios-add-circle">新增</Button>
          </div>
          <div class="right">
              <p class="title-right">姓名:</p>
                <Input v-model="name" size="large" placeholder="请输入关键字查询" style="width: 200px" />
              <p class="title-right">职务:</p>
                <Input v-model="work" size="large" placeholder="请输入关键字查询" style="width: 200px" />
              <Button size="large" class="search" @click="search">查询</Button>
          </div>
        </div>
        <div class="table-content" v-if='!isAdd'>
          <Table :columns="columns1" :data="data1"></Table>
        </div>
        <div v-if='isAdd' class="add-new">
          <div class="left">
            <div class="row">
              <div class="name">证件类型：</div>
              <div class="inputs">
                <Select size="large" v-model="model4" class="select" style="width: 300px">
                  <Option v-for="item in typelist" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
            </div>
            <div class="row">
              <div class="name">身份证号：</div>
              <div class="inputs">
                <Input v-model="personId" size="large" placeholder="请填写身份证号码" style="width: 300px" />
              </div>
            </div>
            <div class="row">
              <div class="name">性别：</div>
              <div class="inputs">
                <RadioGroup v-model="gender">
                  <Radio label="男"></Radio>
                  <Radio label="女"></Radio>
                </RadioGroup>
              </div>
            </div>
            <div class="row">
              <div class="name">受教育程度：</div>
              <div class="inputs">
                <Select size="large" v-model="model5" class="select" style="width: 300px">
                  <Option v-for="item in eduList" :value="item.value" :key="item.value">{{ item.label }}</Option>
                </Select>
              </div>
            </div>
            <div class="row">
              <div class="name">现任职务：</div>
              <div class="inputs">
                <Input v-model="position" size="large" placeholder="请填写职务" style="width: 300px" />
              </div>
            </div>
            <div class="row">
              <div class="name">受党纪或政治处分情况：</div>
              <div class="inputs">
                <Input v-model="value7" type="textarea" :autosize="{minRows: 4,maxRows: 4}"  style="width: 300px" placeholder="请填写具体的相关内容" />
              </div>
            </div>
          </div>
          <div class="right">
            <div class="row">
              <div class="name">姓名：</div>
              <div class="inputs">
                <Input v-model="name" size="large" placeholder="请填写姓名" style="width: 400px" />
              </div>
            </div>
            <div class="row">
              <div class="name">证件编号：</div>
                <div class="inputs">
                  <Input v-model="num" size="large" placeholder="请填写证件编号" style="width: 300px" />
                </div>
              </div>
              <div class="row">
                <div class="name">政治面貌：</div>
                <div class="inputs">
                  <Input v-model="party" size="large" placeholder="请填写政治面貌" style="width: 300px" />
                </div>
              </div>
              <div class="row">
                <div class="name">所在单位：</div>
                <div class="inputs">
                  <Input v-model="company" size="large" placeholder="请填写所在单位" style="width: 300px" />
                </div>
              </div>
              <div class="row">
                <div class="name">执法岗位：</div>
                <div class="inputs">
                  <Input v-model="position" size="large" placeholder="请填写执法岗位" style="width: 300px" />
                </div>
              </div>
              <div class="row">
                <div class="name">公务员考核情况：</div>
                <div class="inputs">
                  <Input v-model="value8" type="textarea" :autosize="{minRows: 4,maxRows: 4}"  style="width: 300px" placeholder="请填写具体的相关内容" />
                </div>
              </div>
            </div>
        </div>
        <div v-if='isAdd' class="buttons">
          <Button size="large" class="cancle" @click="cancle">返回</Button>
          <Button size="large" class="confirm" @click="confirm">确定</Button>
        </div>
      </div>
      <div class="pages" v-if='!isAdd'>
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
    Tabs,
  },
  data: () => {
    return {
      num: '',
      party: '',
      company: '',
      value8: '',
      gender: '男',
      model4: '',
      model5: '',
      value7: '',
      position: '',
      personId: '',
      isAdd: false,
      columns1: [
          {
            title: '序号',
            key: 'id'
          },
          {
            title: '证件类型',
            key: 'type'
          },
          {
            title: '姓名',
            key: 'name'
          },
          {
            title: '身份证号',
            key: 'personId'
          },
          {
            title: '证件编号',
            key: 'num'
          },
          {
            title: '性别',
            key: 'gender'
          },
          {
            title: '政治面貌',
            key: 'party'
          },
          {
            title: '受教育程度',
            key: 'edu'
          },
          {
            title: '所在单位',
            key: 'company'
          },
          {
            title: '具体操作',
            key: 'action',
            render: (h) => {
              return h('Button', {
                        props: {
                          size: 'small'
                        }
                      }, '修改')
            }
          }
      ],
      data1: [
        {
          id: 1,
          type: '身份证',
          name: '王曦',
          personId: '身份证号',
          num: '412529198204031132',
          gender: '男',
          party: '中共党员',
          edu: '受教育程度',
          company: '所在单位'
        },
        {
          id: 2,
          type: '身份证',
          name: '王曦',
          personId: '身份证号',
          num: '412529198204031132',
          gender: '男',
          party: '中共党员',
          edu: '受教育程度',
          company: '所在单位'
        },
        {
          id: 3,
          type: '身份证',
          name: '王曦',
          personId: '身份证号',
          num: '412529198204031132',
          gender: '男',
          party: '中共党员',
          edu: '受教育程度',
          company: '所在单位'
        },
        {
          id: 4,
          type: '身份证',
          name: '王曦',
          personId: '身份证号',
          num: '412529198204031132',
          gender: '男',
          party: '中共党员',
          edu: '受教育程度',
          company: '所在单位'
        },
        {
          id: 5,
          type: '身份证',
          name: '王曦',
          personId: '身份证号',
          num: '412529198204031132',
          gender: '男',
          party: '中共党员',
          edu: '受教育程度',
          company: '所在单位'
        },
        {
          id: 6,
          type: '身份证',
          name: '王曦',
          personId: '身份证号',
          num: '412529198204031132',
          gender: '男',
          party: '中共党员',
          edu: '受教育程度',
          company: '所在单位'
        },
        {
          id: 7,
          type: '身份证',
          name: '王曦',
          personId: '身份证号',
          num: '412529198204031132',
          gender: '男',
          party: '中共党员',
          edu: '受教育程度',
          company: '所在单位'
        },
        {
          id: 8,
          type: '身份证',
          name: '王曦',
          personId: '身份证号',
          num: '412529198204031132',
          gender: '男',
          party: '中共党员',
          edu: '受教育程度',
          company: '所在单位'
        }
      ],
      name: '',
      work: '',
      single: 8,
      total: 386,
      typelist: [
        {
            value: 'personId',
            label: '身份证'
        },
        {
            value: 'passport',
            label: '护照'
        }
      ],
      eduList: [
        {
            value: 'college',
            label: '本科'
        },
        {
            value: 'master',
            label: '硕士'
        },
        {
            value: 'doc',
            label: '博士'
        }
      ],
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
    .add-new {
      padding: 50px 100px 0px 100px;
      display: flex;
      justify-content: space-around;
      .row {
        margin-bottom: 30px;
        &:last-child {
          margin-bottom: 50px;
        }
        .name {
          display: inline-block;
          font-size: 26px;
          color: #fff;
          width: 160px;
          text-align: end;
        }
        .inputs {
          display: inline-block;
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

.random {

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