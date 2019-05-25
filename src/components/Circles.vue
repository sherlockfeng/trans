<template>
  <div class="circle" :style="{width: width+'px', height: width+'px'}">
    <p class="percentage" :style="{color: textColor,fontSize: textFontSize + 'px'}">{{progress}}%</p>
    <svg
      style="transform: rotate(-90deg)"
      :width="width"
      :height="width"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle
        :r="(width-radiusInside)/2"
        :cy="width/2"
        :cx="width/2"
        :stroke-width="radiusInside"
        :stroke="backgroundColor"
        fill="none"
      ></circle>
      <circle
        ref="$bar"
        :r="(width-radiusOuter)/2"
        :cy="width/2"
        :cx="width/2"
        :stroke="barColor"
        :stroke-width="radiusOuter"
        :stroke-linecap="isRound ? 'round' : 'square'"
        :stroke-dasharray="(width-radiusOuter)*3.14"
        :stroke-dashoffset="isAnimation ? (width-radiusOuter) * 3.14 : (width - radiusOuter) * 3.14 * (100 - progress) / 100"
        fill="none"
      ></circle>
    </svg>
  </div>
</template>

<script>
export default {
  props: {
    width: [Number, String], // 圆的大小
    radiusInside: [Number, String], // 进度条厚度
    radiusOuter: [Number, String], // 进度条厚度
    progress: [Number, String], // 进度条百分比
    barColor: String, // 进度条颜色
    backgroundColor: String, // 背景颜色
    textFontSize: [Number, String], // 字体大小
    textColor: {
      type: String,
      default: '#fff'
    },
    isAnimation: {
      // 是否是动画效果
      type: Boolean,
      default: true
    },
    isRound: {
      // 是否是圆形画笔
      type: Boolean,
      default: true
    },
    id: {
      // 组件的id，多组件共存时使用
      type: [String, Number],
      default: 1
    },
    duration: {
      // 整个动画时长
      type: [String, Number],
      default: 1000
    },
    delay: {
      // 延迟多久执行
      type: [String, Number],
      default: 200
    },
    timeFunction: {
      // 动画缓动函数
      type: String,
      default: "cubic-bezier(0.99, 0.01, 0.22, 0.94)"
    }
  },
  data() {
    return {
      idStr: `circle_progress_keyframes_${this.id}`
    };
  },
  beforeDestroy() {
    // 清除旧组件的样式标签
    document.getElementById(this.idStr) &&
      document.getElementById(this.idStr).remove();
  },
  mounted() {
    if (this.isAnimation) {
      // 重复定义判断
      if (document.getElementById(this.idStr)) {
        document.getElementById(this.idStr).remove();
      }
      // 生成动画样式文件
      let style = document.createElement("style");
      style.id = this.idStr;
      style.type = "text/css";
      style.innerHTML = `
      @keyframes circle_progress_keyframes_name_${this.id} {
      from {stroke-dashoffset: ${(this.width - this.radiusOuter) * 3.14}px;}
      to {stroke-dashoffset: ${((this.width - this.radiusOuter) *
        3.14 *
        (100 - this.progress)) /
        100}px;}}
      .circle_progress_bar${
        this.id
      } {animation: circle_progress_keyframes_name_${this.id} ${
        this.duration
      }ms ${this.delay}ms ${this.timeFunction} forwards;}`;
      // 添加新样式文件
      document.getElementsByTagName("head")[0].appendChild(style);
      // 往svg元素中添加动画class
      this.$refs.$bar.classList.add(`circle_progress_bar${this.id}`);
    }
  }
};
</script>
<style lang="scss" scoped>
.circle {
  position: relative;
  .percentage {
    position: absolute;
    top: 50%;
    transform: translate(-50%, -50%);
    left: 50%;
  }
}
</style>
