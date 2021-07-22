<template>
  <router-view />
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  setup() {
    // 获取路由
    const route = useRoute()
    // getCurrentInstance()可以获取组件实例
    const instance = getCurrentInstance()
    console.log(instance);
    onMounted(()=>{
      // 组件实例的上下文才是我们熟悉的this
      console.log(instance.ctx.foo); // 'foo'
      console.log(instance.ctx.bar()); // '我是bar方法'
    })
    // 获取环境变量
    console.log(import.meta.env)
    return {
    }
  }
})
</script>
