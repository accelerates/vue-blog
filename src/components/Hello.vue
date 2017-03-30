<template>
  <div class="hello">
    <el-card v-for="(article, index) in articles" :key="index" class="card-list">
      <slot name="header">
        <router-link class="title" :to="articlePage(article.id)" v-text="article.title" tag="h1"></router-link>
        <div class="tags">
          <span class="date" v-text="article.create_time"></span>
          <el-tag v-for="(tag, index) in article.tags" :key="index" v-text="tag.name"></el-tag>
        </div>
      </slot>
      <div class="text item">
        <p class="content" v-text="article.content">

        </p>
      </div>
    </el-card>
  </div>
</template>

<script>
  import Axios from 'axios'
  export default {
    name: 'hello',
    data () {
      return {
        articles: null
      }
    },
    beforeRouteEnter (to, from, next) {
      let url = 'http://localhost:9000/api/article'
      let query = to.query
      if (JSON.stringify(query) !== '{}') {
        let type = query.type
        let tag = query.tag
        console.log(query)
        url += '?'
        if (type) url = url + 'type=' + type
        if (tag) url = url + 'tag=' + tag
      }
      console.log(url)
      Axios.get(url).then(response => {
        next(vm => {
          vm.articles = response.data
        })
      })
    },
    methods: {
      articlePage (id) {
        return 'article/' + id
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="sass">
  @import "../assets/sass/variable"
  .card-list
    padding: 10px
    margin: 0 10px 20px 10px

  .el-card__body > .title
    display: inline-block
    width: 100%
    font-size: 2em
    font-weight: bold
    text-align: left
    color: $primer-color
    cursor: pointer

  .el-card__body > .title:hover
    @extend .title
    color: $second-color

  .el-card__body > .date
    float: left
    text-align: left

  .el-card__body > .tags
    text-align: left
    padding: 5px
    border-bottom: dashed 1px #A39384
    span
      margin: 5px

  .el-card__body .content
    text-align: left
    padding: 10px

</style>
