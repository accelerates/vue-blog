<template>
  <div id="app">
    <el-row type="flex" justify="center" class="blog-background-color-primer" style="margin-bottom: 10px">
      <el-col :span="16">
        <blog-nav :menus="nav"></blog-nav>
      </el-col>
    </el-row>
    <router-view name="header"></router-view>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <router-view></router-view>
      </el-col>
      <el-col :span="4">
        <link-list :head="articles.header" v-if="articles !== null">
          <blog-menu :menus="articles.type"></blog-menu>
        </link-list>
        <link-list :head="last.header" v-if="last !== null">
          <ul v-for="article in last.articles" class="blog-last-articles-list">
            <router-link tag="li" :to="article.url" v-text="article.name" style=""></router-link>
          </ul>
        </link-list>
        <link-list :head="tags.header"  v-if="tags !== null">
          <div class="text item" style="padding:0 0 20px 20px">
            <blog-tag v-for="(tag,index) in tags.list" style="float: left;" :key="index" :tag="tag">
            </blog-tag>
          </div>
        </link-list>
        <link-list :head="friends.header" v-if="friends !== null">
          <ul class="blog-last-articles-list">
            <router-link tag="li" v-for="(people,index) in friends.person" :key="index" :to="people.url"
                         v-text="people.website" style="color: black !important;"></router-link>
          </ul>
        </link-list>
      </el-col>
    </el-row>
  </div>
</template>

<script>
  import LinkList from './components/LinkList.vue'
  import BlogNav from './components/BlogNav.vue'
  import BlogMenu from './components/BlogMenu.vue'
  import BlogTag from './components/BlogTag.vue'
  import Axios from 'axios'
  export default {
    name: 'app',
    components: {LinkList, BlogNav, BlogMenu, BlogTag},
    created () {
      Axios.get('/api/menu').then(response => {
        this.nav = response.data.nav
        this.articles = response.data.article
        this.last = response.data.last
        this.tags = response.data.tags
        this.friends = response.data.friends
      })
    },
    data () {
      return {
        nav: null,
        articles: null,
        last: null,
        tags: null,
        friends: null
      }
    }
  }
</script>

<style scoped lang="sass">
  @import "./assets/sass/variable"
  #app
    font-family: 'Avenir', Helvetica, Arial, sans-serif
    -webkit-font-smoothing: antialiased
    -moz-osx-font-smoothing: grayscale
    text-align: center
    color: #2c3e50

  .blog-last-articles-list
    list-style: disc inside
    li
      cursor: pointer
      padding: 5px 10px
      width: inherit
      color: black
      white-space: nowrap
      overflow: hidden
      text-overflow: ellipsis
      text-align: left


</style>
