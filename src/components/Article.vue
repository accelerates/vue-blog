<template>
  <div id="article">
    <el-card >
      <slot name="header">
        <div style="padding: 10px;border-bottom: dashed 1px black">
          <h1 style="text-align: left">文章的标题</h1>
          <h5 style="text-align: left;">文章的创建时间</h5>
          <div style="text-align: left">
            <el-tag style="margin: 5px;">文章的标签</el-tag>
          </div>
        </div>
      </slot>
      <div class="item text">
        <p style="padding: 10px;text-align: left">
          文章的内容
        </p>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'article',
    data () {
      return {}
    }
  }
</script>
<style scoped lang="sass">

</style>
