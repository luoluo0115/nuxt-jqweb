import createApiReposity from '~/assets/js/createApiReposity'

export default ({ $axios }, inject) => {
  const repositoryWithAxios = createApiReposity($axios)

  const repositories = {
    JQCommonAccount: repositoryWithAxios('https://qjz.jiqiao.tech/api/JQCommonAccount'),
    
  }

  inject('myApi', repositories)
}
