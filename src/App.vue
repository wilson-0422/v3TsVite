<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, watch, watchEffect, computed, reactive, toRefs, getCurrentInstance, onMounted } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  // setup()执行的时间点是很早的，甚至早于created
  setup(props, ctx) {
    // props 组件传值
    // ctx 相当于之前的this
    // ctx.emit('ooxx')
    // 获取路由
    const route = useRoute()
    // getCurrentInstance()可以获取组件实例
    const instance = getCurrentInstance()
    console.log(instance);
    onMounted(()=>{
      // 组件实例的上下文才是我们熟悉的this
      // console.log(instance.ctx.foo); // 'foo'
      // console.log(instance.ctx.bar()); // '我是bar方法'
    })
    // 获取实例
    const { proxy, data } = getCurrentInstance()
    // 想要利用响应能力，就要使用proxy这个上下文
    watchEffect(() => {
      console.log(proxy.foo) // foo变化会有输出
      console.log(data.foo) // foo变化会有输出
    })
    // 获取环境变量
    console.log(import.meta.env)
    return {
    }
  }
})
</script>
