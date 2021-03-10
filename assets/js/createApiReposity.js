export default ($axios) => (resource) => {
  console.log(resource, 'resource')
  let api = {
    queryWmArticleList(payload){
      return $axios.$post(`${resource}/QueryWmArticleList`, payload)
    },
    create(payload) {
      return $axios.$post(resource, payload)
    },
    index(payload) {
      return $axios.$get(`${resource}`, {
        params: payload
      })
    },
    show(payload) {
      return $axios.$get(`${resource}/${payload.id}`)
    },
    update(payload) {
      return $axios.$put(`${resource}/${payload.id}`, payload)
    },
    delete(id) {
      return $axios.$delete(`${resource}/${id}`)
    }
  }

  return api
}
