<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import '@/assets/style/normalize.css'
import Header from '@/components/Header'
export default {
  name: 'App',
  components:{
    Header
  }
}
</script>

<style>
body{
  background: url(./assets/img/index-bg.jpg) no-repeat;
  background-color: rgb(34, 34, 34);
  background-position:60% 20%;
}
/* 设置背景色防止图片加载错误或无法加载 */
#app{
  background-position:60% 50%;
  color: #fff;
  font-size: 12px;
}
/* ~~~~~~~~~~~~~~~~~~通用样式~~~~~~~~~~~~~~~~~~ */
/* 居中 */
.container{
  width:7.5805rem;
  margin: 0 auto;
}
/* 通用h2样式 */
.main-h2{
  font-size: 2em;
  text-align: center;
  line-height: 3em;
}
/* 主体内容区域添加margin-top和动画 */
.main-content{
  margin-top: 10px;
  animation:moveMedia 1s;
}
@keyframes moveMedia{
  from{
    margin-top:200px;
  }
  to{
    margin-top:10px;
  }
}
</style>
