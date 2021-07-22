<template>
  <el-menu
    default-active="1-4-1"
    text-color="#222222"
    class="el-menu-vertical-demo"
    @open="handleOpen"
    @close="handleClose"
    :collapse="isCollapse"
  >
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
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, reactive } from 'vue'

export default defineComponent({
  name: "Sidebar",
  setup() {
    return {}
  }
})
</script>

<style scoped>

</style>
