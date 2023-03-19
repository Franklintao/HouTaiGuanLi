<template>
  <el-col>
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="1"
      text-color="#fff"
    >
      <el-menu-item index="1" @click="$router.push('userPage')">
        <span>用户管理页面</span>
      </el-menu-item>
      <el-menu-item index="2" @click="$router.push('/rolePage')">
        <span>角色管理页面</span>
      </el-menu-item>
      <el-menu-item index="3" @click="$router.push('/departmentPage')">
        <span>部门管理页面</span>
      </el-menu-item>
      <el-menu-item index="4" @click="$router.push('/menuPage')">
        <span>菜单管理页面</span>
      </el-menu-item>
    </el-menu>
  </el-col>
</template>
<style>
.el-menu-vertical-demo {
  height: 94vh;
}
.el-menu-item {
  text-align: center;
}
</style>