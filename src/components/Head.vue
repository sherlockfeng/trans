<template>
  <div class="head">
    <p>四川省交通运输厅道路运输管理综合业务门户</p>
    <Avatar class="avatar" size="large" :src="require('../assets/user.png')" />

    <div class="nameInfo">
      欢迎<span class="name"> 彭局长 </span>！<span class="password" @click="change">(修改密码)</span>
    </div>

    <div class="ring"></div>
 
    <div class="search">
      <Input v-model="value12">
        <Select v-model="select1" slot="prepend" placeholder="公示" style="width: 100px">
            <Option value="0">公示信息</Option>
            <Option value="1">专题</Option>
            <Option value="2">名单</Option>
        </Select>
        <Icon type="ios-search" slot="append" />
      <!-- eslint-disable-next-line -->
      </Input>
    </div>

    <Icon type="md-power" class="logout" @click="exit"/>
    <Modal v-model="personInfo" 
      :closable="false"
      class-name="person-center-modal"
    >
      <div class="modal-contant">
        <div class="person-change-title">
          修改个人信息
        </div>
        <div class="person-change-content">
          <div class="row">
            <div class="row-name">头像：</div>
            <div class="row-input">
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Icon type="ios-add-circle" />
              </Upload>
            </div>
          </div>
          <div class="row">
            <div class="row-name">姓名：</div>
            <div class="row-input">
              <Input v-model="name" type="text" style="width: 300px" placeholder="请填写姓名" />
            </div>
          </div>
          <div class="row">
            <div class="row-name">性别：</div>
            <div class="row-input">
              <RadioGroup v-model="gender">
                <Radio label="男"></Radio>
                <Radio label="女"></Radio>
              </RadioGroup>
            </div>
          </div>
          <div class="row">
            <div class="row-name">出生年月：</div>
            <div class="row-input">
              <DatePicker type="date" placeholder="请选择时间" size="large" placement="bottom" style="width: 300px"></DatePicker>
            </div>
          </div>
          <div class="row">
            <div class="row-name">职务：</div>
            <div class="row-input">
              <Input v-model="position" type="text" style="width: 300px" placeholder="请填写职务" />
            </div>
          </div>
          <div class="row">
            <button class="button cancle" @click="cancle">返回</button>
            <button class="button confirm" @click="confirm">确认</button>
          </div>
        </div>
      </div>
    </Modal>
  </div>
</template>

<script>

export default {
  name: 'Head',
  components: {
  },
  data: ()=> {
    return {
      value12: '公示',
      select1: '0',
      personInfo: false,
      gender: '男',
      position: '',
      name: ''
    }
  },
  methods: {
    exit() {
      document.location = './login.html';
    },
    change() {
      this.personInfo = true;
    },
    cancle() {
      this.personInfo = false;
    },
    confirm() {
      this.cancle();
    }
  }
}
</script>

<style lang="scss" scoped>
  $left: 40px;
  $right: 80px;
  .head {
    height: 80px;
    min-width: 50rem;
    width: 100%;
    background-image: url('../assets/title.png');
    background-size: 100% 100%;
    position: relative;

    p {
      color: #fff;
      text-align: center;
      line-height: 80px;
      font-size: 28px;
      padding-left: 45px;
    }

    .avatar {
      position: absolute;
      height: 45px;
      width: 45px;
      top: 50%;
      left: $left;
      transform: translate(0, -50%);
    }

    .nameInfo {
      position: absolute;
      font-size: 30px;
      color:#fff;
      top: 50%;
      left: $left + 70;
      transform: translate(0, -50%);
        .name {
          color: #02dfe4;
          font-size: 28px;
        }
        .password {
          font-size: 22px;
          color: #7e90c1;
          cursor: pointer;
        }
    }

    .ring {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      left: $left + 410;
      background-image: url('../assets/ring.png');
      width: 35px;
      height: 40px;
      background-size: 100% 100%;
      cursor: pointer;
    }

    .search {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: $right + 60;
    }

    .logout {
      position: absolute;
      top: 50%;
      transform: translate(0, -50%);
      right: $right;
      color: #00ffff;
      font-size: 35px;
      cursor: pointer;
    }

  }
  .person-center-modal {
    .modal-contant {
      min-height: 640px;
      padding: 35px 0 45px 40px;
      .person-change-title {
        color: #fff;
        font-size: 26px;
      }
      .person-change-content {
        margin-top: 55px;
        .row {
          display: flex;
          align-items: center;
          justify-content: flex-start;
          margin-bottom: 25px;
          height: 50px;
          .row-name {
            width: 125px;
            font-size: 22px;
            color: #85919c;
            text-align: end;
            margin-right: 30px;
          }
          .row-input {
            i {
              font-size: 50px;
              vertical-align: text-top;
              cursor: pointer;
            }
          }
          .button {
            width: 135px;
            height: 45px;
            color: #fff;
            font-size: 26px;
            background-color: #003e77;
            border-color: #003e77;
            border-radius: 10px;
            cursor: pointer;
            &:hover {
              border-color: #fff;
            }
            &.cancle { 
              background-color: #0b2439;
              margin-right: 70px;

            }
          }
          &:last-child {
            justify-content: center;
            margin-top: 40px;
          }
        }
      }
    }
  }
</style>
<style lang="scss">
  .search {
    .ivu-select {
      .ivu-select-selection {
        background-color: #0066ff;
        border-color: #0066ff;
        color: #fff;
      }
      .ivu-select-arrow {
        color: #fff;
      }
    }
    input {
      background-color: #2a4a98;
      border-color: #0066ff;
      color: #fff;
    }
    .ivu-input-group-append {
      background-color: #0066ff;
      border-color: #0066ff;
      color: #fff;
      cursor: pointer;
    }
  }
  .person-center-modal {
    .ivu-modal {
      width: 700px !important;
      .ivu-modal-content {
        background-color: #0b2439;
        border: 1px solid #4ec0c4;
        border-radius: 15px;
        .ivu-modal-body {
          padding: 0;
          .row-input {
            input {
              background-color: #091c2e;
              border-color: #09243a;
              color: #fff;
              height: 45px;
            }
            .ivu-radio-wrapper {
              font-size: 22px;
              color: #fff;
            }
            label:first-child {
              margin-right: 40px;
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

