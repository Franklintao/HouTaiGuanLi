<template>
  <div>
    <div class="common-layout">
      <el-container>
        <el-header>
          <div>用户权限管理系统</div>
          <div>
            <el-button type="info" round class="logout">退出登录</el-button>
            <el-avatar>user</el-avatar>
          </div>
        </el-header>
        <el-container>
          <el-aside width="200px">
            <AppAside />
          </el-aside>
          <el-main>
            <router-view></router-view>
          </el-main>
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import AppAside from "./AppAside.vue";
export default {
  name: "App",
  components: {
    AppAside,
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  position: relative;
}
.el-container {
  height: 100vh;
}
.el-header {
  display: flex;
  justify-content: space-between;
  align-items: center;

  background-color: #606266;
  color: #fff;
  height: 6vh;
}
.logout {
  margin-right: 20px;
}
</style>
