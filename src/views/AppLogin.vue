<template>
  <el-card>
    <el-form :model="ruleForm" :rules="rules" ref="ruleForm" label-width="40px">
        <h3>后台管理系统</h3>
      <el-form-item label="账号" prop="username">
        <el-input v-model="ruleForm.username" autocomplete="off"></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input type="password" v-model="ruleForm.password" autocomplete="off"></el-input>
      </el-form-item>

      <el-button type="primary" @click="submit" style="margin:auto">提交</el-button>
    </el-form>
  </el-card>
</template>
<style scoped>
.el-card {
  width: 480px;
  height: 300px;
  display: flex;
  justify-content: center;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.text {
  font-size: 14px;
}
.el-button,
h2 {
  margin: auto;
}
.el-input{
  width: 250px;
}
.el-form-item {
  margin-top:30px;
  margin-bottom:30px;
}
</style>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: ""
      },
      rules: {
        username: [
          {
            validator: (rule, value, callback) =>{
              if(!value){
                callback(new Error("请输入用户名"))
              }else{
                callback()
              }
            },
            trigger: "blur",
          }
        ],
        password: [
          {
            validator: (rule, value, callback) =>{
              if(!value){
                callback(new Error("请输入密码"))
              }else{
                callback()
              }
            },
            trigger: "blur",
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      // 验证登录信息
      this.$refs.ruleForm.validate(valid => {
        if (valid) {
          if(this.ruleForm.username === "admin"&&this.ruleForm.password==="admin"){
            this.$router.push('./userPage')
          }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>