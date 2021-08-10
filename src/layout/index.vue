<template>
  <el-container class="layout">
    <el-header style="height: 40px;">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <Sidebar></Sidebar>
      </el-aside>
      <el-main>
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, reactive } from 'vue'
import Header from './Header.vue'
import Sidebar from './Sidebar.vue'

export default defineComponent({
  name: "layout",
  components: {
    Header,
    Sidebar
  },
  setup() {
    return {}
  }
})
</script>

<style lang="scss" scoped>
.layout {
  height: 100%;
  ::v-deep(.el-header) {
    padding: 0;
  }
  ::v-deep(.el-menu) {
    height: 100%;
  }
}
</style>
