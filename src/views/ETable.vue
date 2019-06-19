<template>
  <div>
    <div>ETable</div>
    <el-table :data="tableData" border>
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" :label="$t('message.name')" width="180">
      </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      tableData: [
        // {
        //   date: '2016-05-02',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1518 弄'
        // },
        // {
        //   date: '2016-05-04',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1517 弄'
        // },
        // {
        //   date: '2016-05-01',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1519 弄'
        // },
        // {
        //   date: '2016-05-03',
        //   name: '王小虎',
        //   address: '上海市普陀区金沙江路 1516 弄'
        // }
      ]
    }
  },
  mounted() {
    window.a = this
    // this.getData()
  },
  methods: {
    getData() {
      this.$axios
        .get("posts")
        .then(response => {
          console.log("%c Response in callback", "color: blue", response);
          this.tableData = response.data
        })
        .catch(error => {
          console.error("%c Error in callback", "color: blue", error);
        });
    }
  },
}
</script>

<style lang="scss" scoped>
.el-table {
  width: 60%;
  margin-left: auto;
  margin-right: auto;
  margin-top: 20px;

  /deep/ th {
    text-align: center;
  }
  /deep/ td {
    text-align: center;
  }
}
</style>
