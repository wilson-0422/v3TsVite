<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapse" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo">
      <span>E端</span>
    </div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            Hi,{{ username }}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item command="loginout">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, computed, reactive } from 'vue'
import { useRoute } from 'vue-router'

export default defineComponent({
  name: 'Header',
  setup: () => {
    let collapse: ref<boolean> = ref<boolean>(false)
    const collapseChage = () => {
      console.log(collapse);
      collapse.value = !collapse.value
    }
    return {
      username: '',
      collapse,
      collapseChage,
      messageList: [],
      handleCommand: () => {}
    }
  }
})
</script>

<style lang="scss" scoped>
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 40px;
  font-size: 22px;
  background-color: #3975C6;
  color: #fff;
  .collapse-btn {
    position: absolute;
    z-index: 9;
    float: left;
    padding: 0 21px;
    cursor: pointer;
    line-height: 40px;
  }
  .logo {
    position: absolute;
    height: 30px;
    top: 5px;
    left: 60px;
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: bolder;
  }
  .header-right {
    float: right;
    padding-right: 50px;
  }
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
