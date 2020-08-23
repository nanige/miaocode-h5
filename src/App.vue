<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link>|
      <router-link to="/about">About</router-link>
    </div>
    <count-down
      
      :currentTime="1481450106"
      :startTime="1481450110"
      :endTime="1481450115"
      :tipText="'距离开始文字1'"
      :tipTextEnd="'距离结束文字1'"
      :endText="'结束自定义文字2'"
      :dayTxt="'天'"
      :hourTxt="'小时'"
      :minutesTxt="'分钟'"
      :secondsTxt="'秒'"
    ></count-down>
    <router-view />
  </div>
</template>
<script>
import CountDown from "vue2-countdown";
import moment from "moment";
export default {
  components: {
    CountDown,
  },
  mounted() {
    console.log(moment().format("MMMM Do YYYY, h:mm:ss a"));
    console.log(moment().format("dddd"));
    console.log(moment().format("MMM Do YY"));
    console.log(moment().format("YYYY [escaped] YYYY"));
    console.log(moment().format());
  },
};
</script>
<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
