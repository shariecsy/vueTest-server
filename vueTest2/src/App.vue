<template>
  <div id="app">
    <img src="./assets/logo.png">
    <firstcomponent></firstcomponent>
    <h1>{{ msg }}</h1>
    <h2>Essential Links</h2>
    <ul>
      <li>
        <router-link to="/first">点我跳转到第一页</router-link>
        <router-link to="/second">点我跳转到第二页</router-link>
      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>
import firstcomponent from "./component/firstcomponent.vue";
export default {
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components:{ firstcomponent }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
