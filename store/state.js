const state = () => ({
  navList: [
    {
      name: '首页',
      path: '/home'
    },
    {
      name: '新闻咨询',
      path: '/article'
    },
    {
      name: '产品信息',
      path: '/resource'
    },
    {
      name: '关于我们',
      path: '/movie'
    },
    {
      name: '常见问题',
      path: '/ebook'
    }
  ],
  token: '',
  userInfo: null,
  showSignInModal: false,
  showSignUpModal: false,
  tagList: [],
  categoryList: [],
  blogResult: {},
  highLightIndex: 0, // markdown 目录高亮索引
  categoryIndex: 0,
  cacheArticleData: null
})

export default state
