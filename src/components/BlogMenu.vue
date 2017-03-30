<template>
  <div id="blog-menu">
    <el-menu :default-active="activeMenu" class="el-menu-vertical-demo" router v-if="menus !== null">
      <el-menu-item v-for="(item, index) in menus" :key="index" :index="item.url" v-text="item.name"
                    :route="setPath(item.url)"></el-menu-item>
    </el-menu>
  </div>
</template>
<script>
  export default {
    name: 'blog-menu',
    props: ['menus'],
    computed: {
      activeMenu: function () {
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
<style scoped lang="sass">
  @import "../assets/sass/variable"

  .el-menu-vertical-demo
    padding-bottom: 20px
    background-color: white

  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item.is-active, .el-menu-item.is-active
    background-color: $primer-color
    color: $background-color
    border-bottom: dashed 1px $background-color

  .el-menu-item, .el-submenu__title
    @extend .el-menu-item
    color: $primer-color
    background-color: white
    border-bottom: dashed 1px $primer-color

  .el-menu--horizontal.el-menu--dark .el-submenu .el-menu-item:hover, .el-menu--horizontal.el-menu--dark .el-submenu .el-submenu-title:hover, .el-menu-item:hover
    @extend .el-menu-item.is-active

</style>
