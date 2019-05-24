<template>
  <div id="app" style="minWidth: 1200px">
    <Head></Head>
    <div class="login-content">
      <div class="login-type">
        <div class="login-type-item left" :class="{'active': type === 'ukey'}" @click="change('ukey')">
          ukey登录
        </div>
        <div class="login-type-item right" :class="{'active': type !== 'ukey'}" @click="change('password')">
          账号登录
        </div>
      </div>
      <div v-if="type === 'ukey'" class="ukey-select">
        <p class="identify">
          证书认证
        </p>
        <div class="ukey-name">
          <p>{{identify}}</p>
        </div>
      </div>
      <div v-if="type === 'password'" class="password-select">
        <div class="input">
          <Input v-model="username" size="large" placeholder="用户名" />
        </div>
        <div class="input">
          <Input v-model="password" size="large" placeholder="密码" />
        </div>
        <div class="input verify">
          <Input v-model="verify" size="large" placeholder="验证码" />
          <div class="verify-bg"></div>
        </div>
      </div>
      <div class="login-submit" @click="login">
        登录
      </div>
    </div>
  </div>
</template>

<script>
import Head from "../../components/HeadLogin.vue";
export default {
  name: "app",
  components: {
    Head
  },
  data: () => {
    return {
      type: 'ukey',
      identify: '省CA系统认真蓝牙KEY证书',
      verify: '',
      password: '',
      username: ''
    };
  },
  methods: {
    login() {
      document.location = './workBench.html';
    },
    change(value) {
      this.type = value;
    }
  },
  created() {
    this.axios
      .get('https://api.coindesk.com/v1/bpi/currentprice.json')
      .then(response => (console.log(response)))
  
  },
};
</script>

<style lang="scss" scoped>
#app {
  background-image: url("../../assets/login-body-bg.png");
  background-size: 100% 100%;
}
.login-content {
  background-image: url("../../assets/login-content.png");
  background-size: 100% 100%;
  width: 600px;
  height: 520px;
  margin: 150px auto;
  position: relative;
  .login-type {
    padding-top: 60px;
    width: 600px;
    display: flex;
    justify-content: center;
    align-items: center;
    .login-type-item {
      font-size: 24px;
      text-align: center;
      color: #63acdf;
      width: 220px;
      height: 60px;
      line-height: 60px;
      cursor: pointer;
      &.active {
        color: #fff;
      }
      &.left {
        background-image: url("../../assets/login-type-left-not.png");
        background-size: 100% 100%;
      }
      &.left.active {
        background-image: url("../../assets/login-type-left-active.png");
        background-size: 100% 100%;
      }
      &.right {
        background-image: url("../../assets/login-type-right-not.png");
        background-size: 100% 100%;
      }
      &.right.active {
        background-image: url("../../assets/login-type-right-active.png");
        background-size: 100% 100%;
      }
    }
  }
  .ukey-select {
    color: #a6d6ff;
    font-size: 24px;
    .identify {
      margin: 100px 0 30px 80px;
      padding-left: 20px;
    }
    .ukey-name {
      width: 400px;
      height: 60px;
      background-image: url("../../assets/ukey-bg.png");
      background-size: 100% 100%;
      margin: 0 auto 60px;
      line-height: 60px;
      p {
        padding-left: 30px;
      }
    }
  }
  .login-submit {
      width: 400px;
      height: 50px;
      position: absolute;
      background-image: url("../../assets/login-button-bg.png");
      background-size: 100% 100%;
      text-align: center;
      line-height: 50px;
      bottom: 50px;
      left: 100px;
      color: #fff;
      font-size: 24px;
  }
  .password-select {
    .input {
      margin-top: 40px; 
      text-align: center;
    }
    .verify {
      display: flex;
      justify-content: center;
      .verify-bg {
        margin-left: 60px;
        width: 100px;
        height: 50px;
        background-image: url("../../assets/verify.png");
        background-size: 100% 100%;
      }
    }
  }
}
</style>
<style lang="scss">
.login-content {
  .password-select {
    .input {
      input {
        width: 400px;
        height: 50px;
        background-image: url("../../assets/ukey-bg.png");
        background-size: 100% 100%;
        background-color: #032a67;
        color: #a6d6ff;
        border: none;
      }
    }
    .verify {
      .ivu-input-wrapper {
        width: inherit;
      }
      input {
        width: 240px;
        height: 50px;
        background-image: url("../../assets/ukey-bg.png");
        background-size: 100% 100%;
        background-color: #032a67;
        color: #a6d6ff;
        border: none;
      }
    }
  }
}
</style>

