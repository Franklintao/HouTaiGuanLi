<template>
  <div>
    <el-button @click="dialogFormVisible = true">添加用户</el-button>
    <el-dialog title="新用户创建" v-model="dialogFormVisible">
      <el-form :model="addUserForm" :inline="true">
        <el-form-item label="姓名">
          <el-input type="text" v-model="addUserForm.user_name" />
        </el-form-item>
        <el-form-item label="昵称">
          <el-input type="text" v-model="addUserForm.user_nickname" />
        </el-form-item>
        <el-form-item label="性别">
          <el-select v-model="addUserForm.sex" placeholder="请选择">
            <el-option label="男" value="man"></el-option>
            <el-option label="女" value="woman"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="电话">
          <el-input type="text" v-model="addUserForm.user_phone" />
        </el-form-item>
        <el-form-item label="更新人">
          <el-input type="text" v-model="addUserForm.update_by" />
        </el-form-item>
        <el-form-item label="更新时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="addUserForm.update_time"></el-date-picker>
        </el-form-item>
        <el-form-item label="创建人">
          <el-input type="text" v-model="addUserForm.create_by" />
        </el-form-item>
        <el-form-item label="创建时间">
          <el-date-picker type="date" placeholder="选择日期" v-model="addUserForm.create_time"></el-date-picker>
        </el-form-item>
        <el-form-item style="text-align: center">
          <el-button type="primary">立即创建</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-table :data="userData" border>
      <el-table-column prop="user_name" label="姓名" />
      <el-table-column prop="user_nickname" label="昵称" />
      <el-table-column prop="user_sex" label="性别" />
      <el-table-column prop="user_phone" label="电话" />
      <el-table-column prop="update_by" label="更新人" />
      <el-table-column prop="update_time" label="更新时间" />
      <el-table-column prop="create_by" label="创建人" />
      <el-table-column prop="create_time" label="创建时间" />
      <el-table-column label="操作">
        <el-button>删除</el-button>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      userData: [
        {
          user_nickname: "xiaoyi",
          user_name: "小一",
          user_age: 20,
          user_sex: "男",
          user_phone: "12345678910",
          update_by: "小明",
          update_time: "2023-03-20",
          create_by: "小明",
          create_time: "2023-03-20"
        },
        {
          user_nickname: "xiaoyi",
          user_name: "小二",
          user_age: 20,
          user_sex: "男",
          user_phone: "12345678910",
          update_by: "小明",
          update_time: "2023-03-20",
          create_by: "小明",
          create_time: "2023-03-20"
        },
        {
          user_nickname: "xiaoyi",
          user_name: "小三",
          user_age: 20,
          user_sex: "男",
          user_phone: "12345678910",
          update_by: "小明",
          update_time: "2023-03-20",
          create_by: "小明",
          create_time: "2023-03-20"
        },
        {
          user_nickname: "xiaoyi",
          user_name: "小四",
          user_age: 20,
          user_sex: "男",
          user_phone: "12345678910",
          update_by: "小明",
          update_time: "2023-03-20",
          create_by: "小明",
          create_time: "2023-03-20"
        },
        {
          user_nickname: "xiaoyi",
          user_name: "小五",
          user_age: 20,
          user_sex: "男",
          user_phone: "12345678910",
          update_by: "小明",
          update_time: "2023-03-20",
          create_by: "小明",
          create_time: "2023-03-20"
        }
      ],
      addUserForm: {
        user_name: "",
        user_nickname: "",
        user_sex: "",
        user_phone: "",
        update_by: "",
        update_time: "",
        create_by: "",
        create_time: ""
      },
      dialogFormVisible: false
    };
  },
  methods: {
    addUser() {}
  }
};
</script>
<style>
.el-table {
  margin-top: 10px;
}
.cell {
  text-align: center;
}
.el-dialog {
  width: 650px;
}
</style>
