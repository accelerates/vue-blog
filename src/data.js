/* eslint-disable no-useless-escape,quotes */
/**
 * Created by liqi on 2017/3/27.
 */
import Mock from 'mockjs'
let menu = {
  nav: [
    {name: '首页', url: '/'},
    {name: '关于', url: '/about'}
  ],
  article: {
    header: '文章分类',
    type: [
      {name: '开发日志', url: '/log', record: '1'},
      {name: '编程之路', url: '/way', record: '21'},
      {name: '分享', url: '/share', record: '99'},
      {name: 'CTF', url: '/ctf', record: '11'}
    ]
  },
  last: {
    header: '最新文章',
    articles: [
      {name: '@sentence', url: '/about'},
      {name: '@sentence', url: '/'},
      {name: '@sentence', url: '/'},
      {name: '@sentence', url: '/'},
      {name: '@sentence', url: '/'},
      {name: '@sentence', url: '/'}
    ]
  },
  tags: {
    header: '文章标签',
    list: [
      {name: 'rust', id: '1'},
      {name: 'rust', id: '2'},
      {name: 'rust', id: '3'},
      {name: 'rust', id: '4'},
      {name: 'rust', id: '5'}
    ]
  },
  friends: {
    header: '友情链接',
    person: [
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'},
      {website: '@name', url: '/'}
    ]
  }
}

let articles = [
  {
    'id|+1': 1, header: '@title', date: '@date', short: '@paragraph', 'tags|5-10': [{name: '@word'}]
  }
]
Mock.mock('/api/menu', 'get', menu)

Mock.mock('/api/articles', 'get', {'articles|5-10': articles})
Mock.mock('/api/articles?tag=1', 'get', {'articles|5-10': articles})

let article = {
  id: '1',
  header: '@sentence',
  date: '@date',
  content: '@paragraph',
  'tags|5-10': [{name: '@word'}]
}
Mock.mock(/\/api\/article\/[0-9]+/, 'get', article)
