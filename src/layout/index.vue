<template>
  <el-container class="layout">
    <el-header style="height: 40px;">
      <Header></Header>
    </el-header>
    <el-container>
      <el-aside width="200px">
        <el-menu default-active="1-4-1" text-color="#222222" class="el-menu-vertical-demo" @open="handleOpen" @close="handleClose" :collapse="isCollapse">
          <el-submenu index="1">
            <template #title>
              <i class="el-icon-menu"></i>
              <span>平台管理</span>
            </template>
            <el-menu-item index="1-1">功能组管理</el-menu-item>
            <el-menu-item index="1-2">客户管理</el-menu-item>
            <el-menu-item index="1-3">菜单管理</el-menu-item>
          </el-submenu>
        </el-menu>
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

export default defineComponent({
  name: "layout",
  components: {
    Header
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
