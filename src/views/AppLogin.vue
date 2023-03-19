<template>
  <el-card>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
    >
      <el-form-item label="账号" prop="username">
        <el-input
          type="text"
          v-model="ruleForm.username"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item label="密码" prop="password">
        <el-input
          type="password"
          v-model="ruleForm.password"
          autocomplete="off"
        ></el-input>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >提交</el-button
        >
      </el-form-item>
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
.el-form-item {
  margin-top: 22px;
}
</style>
<script>
export default {
  data() {
    return {
      ruleForm: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ require: true, trigger: "blur", message: "123" }],
        password: [{ require: true, trigger: "blur", message: "1234" }],
      },
    };
  },
  methods: {
    submitForm(formName) {
      console.log(this.ruleForm);
      this.$refs[formName].validate((valid) => {
        if (valid) {
          alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  },
};
</script>