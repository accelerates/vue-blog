<template>
  <div id="blog-nav">
    <el-menu class="blog-nav" mode="horizontal" :router="true" :defaultActive="activePath">
      <el-menu-item v-for="(item, index) in menus" :key="index" :index="item.url" v-text="item.name"
                    :route="setPath(item.url)"></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'blog-nav',
    props: ['menus'],
    computed: {
      activePath: function () {
        return this.$route.path
      }
    },
    methods: {
      setPath (path) {
        return {
          path: path
        }
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "../assets/sass/variable"

  a
    display: block
    padding: 0 20px
    line-height: 55px
    color: $background-color !important

  .el-menu-item
    padding: 0

  .blog-nav
    border-radius: 0
    background-color: $primer-color
    float: right
    li
      padding: 0 20px
      color: $background-color

  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active
    color: $primer-color
    background-color: $background-color
    border-bottom: 5px solid $primer-color

  .el-menu--horizontal > .el-menu-item:hover, .el-menu--horizontal > .el-submenu.is-active .el-submenu__title, .el-menu--horizontal > .el-submenu:hover .el-submenu__title
    color: $primer-color
    background-color: $background-color
    border-bottom: 5px solid $primer-color
</style>
