<template>
  <div id="saber">
    <el-row type="flex" justify="center" >
      <el-col :span="12">
        <h1 style="color: #A39384;display: inline-block;font-size: 2.5em;padding: 150px 20px 20px 20px; ">
          Programming is a belief</h1>
      </el-col>
      <el-col :span="4">
        <div class="blog-saber"></div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
  export default {
    name: 'saber'
  }
</script>
<style scoped lang="sass">

  .blog-saber
    width: 100%
    height: 400px
    float: right
    background-image: url('http://127.0.0.1:8080/static/saber.png')
    background-size: 100% 100%

</style>
