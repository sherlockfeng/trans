<template>
  <div class="head">
    <p>四川省交通运输厅道路运输管理综合业务门户</p>
    <Avatar class="avatar" size="large" :src="require('../assets/user.png')" />

    <div class="nameInfo">
      欢迎<span class="name"> 彭局长 </span>！<span class="password">(修改密码)</span>
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
      select1: '0'
    }
  },
  methods: {
    exit() {
      document.location = './login.html';
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
</style>

