<template>
<!--  <img alt="Vue logo" src="./assets/logo.png" />-->
<!--  <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />-->
  <router-view />
  <!--<van-tabbar v-model="active" v-if="isShowTabbar">-->
  <!--  <van-tabbar-item replace to="/" icon="home-o">标签</van-tabbar-item>-->
  <!--  <van-tabbar-item replace to="/customer" icon="search">标签</van-tabbar-item>-->
  <!--  <van-tabbar-item replace to="/application" icon="friends-o">标签</van-tabbar-item>-->
  <!--  <van-tabbar-item replace to="/user" icon="setting-o">标签</van-tabbar-item>-->
  <!--</van-tabbar>-->
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, reactive } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'App',
  components: {
    HelloWorld
  },
  setup: () => {
    const route = useRoute()
    const active = ref(0)
    let activePath = ref('')
    watch(() => route.name,(val) => {
      console.log(val);
      activePath.value = val;
    })
    const isShowTabbar = computed(() => {
      return activePath.value === 'home' || activePath.value === 'customer' || activePath.value === 'customer' || activePath.value === 'user'
    })
    console.log(import.meta.env)
    return {
      active,
      isShowTabbar
    }
  }
})
</script>
