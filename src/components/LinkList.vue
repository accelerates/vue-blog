<template>
  <div id="link-list">
    <el-card class="blog-card">
      <div slot="header">
        <h3 class="router-link-list-header"><b v-text="head"></b></h3>
      </div>
      <div class="text">
        <slot></slot>
      </div>
    </el-card>
  </div>
</template>
<script>
  export default {
    name: 'link-list',
    props: ['head']
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "../assets/sass/variable"
  .blog-card
    border-radius: 0
    margin: 0 10px 20px 10px
    border: none
    border-left: 5px solid #A39384

  .router-link-list-header
    padding-top: 10px
    margin: 0 30px 10px 30px
    border-bottom: dashed 2px #A39384

</style>
