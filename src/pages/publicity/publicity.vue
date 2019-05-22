<template>
  <div id="app">
    <Head></Head>
    <div class=content>
      <Tabs select="publicity"></Tabs>
      <div class="content-all">
        <div class="top">
          公示 > {{text}}
        </div>
        <div class="content-bottom" v-if="type">
          <div class="row">
            <div class="title">公示标题：</div>
            <div class="inputs">
              <Input v-model="title" size="large" placeholder="请填写公示标题" style="width: 600px" />
            </div>
          </div>
          <div class="row">
            <div class="title">时间：</div>
            <div class="inputs">
              <DatePicker type="date" placeholder="请选择时间" size="large" placement="bottom" style="width: 300px"></DatePicker>
            </div>
          </div>
          <div class="row">
            <div class="title">作者：</div>
            <div class="inputs">
              <Input v-model="writer" size="large" placeholder="请填写作者" style="width: 300px" />
            </div>
          </div>
          <div class="row">
            <div class="title">附件：</div>
            <div class="inputs">
              <Upload action="//jsonplaceholder.typicode.com/posts/">
                <Button size="large">上传附件</Button>
            </Upload>
            </div>
          </div>
          <div class="row">
            <div class="title">内容：</div>
            <div class="inputs">
              <mavon-editor v-model="value" :subfield="false"/>
            </div>
          </div>
        </div>
        <div class="artic" v-if="!type">
          <div class="title">
            标题名称
          </div>
          <div class="time">
            <span>时间: 2019-04-11</span>
            <span>作者：莫北辰</span>
          </div>
          <div class="content">
            详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容

            详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容

            详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容 详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内容详细内
          </div>
          <Button size="large" class="download" @click="download">下载附件</Button>
        </div>
        <div class="submit">
          <Button size="large" @click="changeType">{{buttonText}}</Button>
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
      text: '发布公示信息',
      title: '',
      type: true,
      buttonText: '确定',
      writer: '',
      value: ''
    };
  },
  methods: {
    changeType() {
      this.type = !this.type;
      if (this.type) {
        this.text='发布公示信息';
        this.buttonText='确定';
      }
      else {
        this.text='公示信息详情';
        this.buttonText='返回';
      }
    },
    download() {
      window.alert('暂无附件');
    }
  }
}
</script>

<style lang="scss" scoped>

  .content-all {
    margin: 30px 45px;
    min-width: 1110px;
    background-color: #09243a;
    border: 1px solid #25616d;
    .top {
      font-size: 28px;
      color: #fff;
      margin: 35px 45px;
    }
    .content-bottom {
      margin-top: 45px;
      margin-left: 100px;
      .row {
        margin-bottom: 20px;
        &:last-child {
          margin-bottom: 50px;
        }
        .title {
          display: inline-block;
          font-size: 26px;
          color: #fff;
          width: 140px;
          text-align: end;
        }
        .inputs {
          display: inline-block;
          vertical-align: top;
          .markdown-body {
            min-height: 300px;
          }
        }
      }
    }

    .artic {
      text-align: center;
      color: #fff;
      margin-top: 70px;
      .title {
        font-size: 22px;
      }
      .time {
        margin-top: 23px;
        color: #536675;
        span:last-child {
          margin-left: 20px;
        }
      }
      .content {
        margin: 45px 118px;
        text-align: start;
        text-indent:2em
      }
      .download {
        margin-bottom: 60px;
        background: #0f1635;
        border: none;
        color: #6bfdfb;
        &:hover {
          background: #0f1635;
          border: none;
        }
      }
    }

    .submit {
      text-align: center;
      margin-bottom: 20px;
      button {
        width: 250px;
        background-color: #0f1635;
        font-size: 18px;
        color: #54c3c9;
        border: none;
      }
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

</style>