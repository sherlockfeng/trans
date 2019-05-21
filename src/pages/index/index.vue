<template>
  <div id="app">
    <img alt="Vue logo" src="../../assets/logo.png">
    <Icon type="ios-checkmark" />
    <Button type="primary">Primary</Button>
  </div>
</template>

<script>
import HelloWorld from '../../components/HelloWorld.vue'
import { Button, Icon } from 'iview'

export default {
  name: 'app',
  components: {
    // HelloWorld,
    Button,
    Icon
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
