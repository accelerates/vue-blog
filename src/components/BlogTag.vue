<template>
  <div id="blog-tag">
    <el-tag class="blog-tag">
      <router-link :to="articlePage(tag.id)" v-text="tag.name"></router-link>
    </el-tag>
  </div>
</template>
<script>
  export default {
    name: 'blog-tag',
    props: ['tag'],
    methods: {
      articlePage (id) {
        return {
          path: '/',
          query: {
            tag: id
          }
        }
      }
    }
  }
</script>
<style scoped lang="sass">
  .blog-tag
    margin: 5px
</style>

