const actions = {
  async getCategoryList({ commit }) {
    const res = await this.$myApi.categories.index()
    commit('setCatgoryList', res && res.result ? res.result : [])
  },
  async getTagList({ commit }) {
    const res = await this.$myApi.tags.index()
    commit('setTagList', res && res.result ? res.result : [])
  },
  async getArticleList({ commit }) {
    const res = await this.$myApi.articleList.index()
    console.log( await this.$myApi.articleList,' await this.$myApi.articleList')
    commit('setArticleList', res && res.result ? res.result : [])
  },
  cacheArticleData({ commit }, data) {
    commit('setCacheArticleData', data)
  }
}
export default actions
