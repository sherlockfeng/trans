<template>
  <div class="head">
    <div class="user">
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

      <Icon type="md-power" class="logout"/>
    </div>
  </div>
</template>

<script>
import {Avatar, Option, Select, Input, Icon} from 'iview';

export default {
  name: 'Head',
  components: {
    Avatar,
    Select,
    Option,
    Input,
    Icon
  },
  data: ()=> {
    return {
      value12: '公示',
      select1: '0'
    }
  }
}
</script>

<style scoped>
  .head {
    height: 80px;
    min-width: 1900px;
    /* position: fixed; */
    width: 100%;
    /* top: 0; */
    /* right: 0; */
    /* z-index: 1000; */
    background-image: url('../assets/title.png');
    background-size: cover;
  }

  .user {
    height: 80px;
    display: flex;
    align-items: center;
  }

  .avatar {
    margin-left: 40px;
  }

  .nameInfo {
    font-size: 30px;
    color:#fff;
    margin-left: 30px;
  }

  .name {
    color: #02dfe4;
    font-size: 28px;
  }

  .password {
    font-size: 22px;
    color: #7e90c1;
    cursor: pointer;
  }

  .ring {
    background-image: url('../assets/ring.png');
    width: 35px;
    height: 40px;
    background-size: cover;
    margin-left: 35px;
    cursor: pointer;
  }

  .search {
    margin-left: 895px;
  }

  .logout {
    margin-left: 150px;
    color: #00ffff;
    font-size: 35px;
    cursor: pointer;
  }
</style>
<style>
  .search .ivu-select .ivu-select-selection {
    background-color: #0066ff;
    border-color: #0066ff;
    color: #fff;
  }
  .search .ivu-select .ivu-select-arrow {
    color: #fff;
  }
  .search input {
    background-color: #2a4a98;
    border-color: #0066ff;
    color: #fff;
  }

  .search .ivu-input-group-append {
    background-color: #0066ff;
    border-color: #0066ff;
    color: #fff;
    cursor: pointer;
  }
</style>

