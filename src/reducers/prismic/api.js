import Logger from 'utils/logger'

export default class API {
  static fetchData(ref, page) {
    API.debug(' Getting Data')
    return fetch(API.url + API.endpoint + `?page=${page || 1}&ref=${ref}` + API.parameters, {
      method: 'get',
    })
      .then(response => response.json())
      .then(json => json)
  }

  static fetchRef() {
    API.debug('Getting Ref')

    return fetch(API.url, {
      method: 'get',

    })
      .then(response => {
        return response.json()
      })
      .then(json => {
        const ref = json.refs && json.refs.find(item => item.id === 'master')
        return ref && ref.ref
      })
  }

  static debug(msg) {
    Logger.debug('Fetching information: ' + API.url + ' ' + msg)
  }

  static get parameters() {
    const params = {
      pageSize: '100',
      orderings: '[document.first_publication_date desc]',
    }
    let queryString = ''
    for (let key in params) {
      queryString += `&${key}=${params[key]}`
    }
    return queryString
  }

  static get endpoint() {
    return '/documents/search'
  }

  static get url() {
    // return 'http://adnormlteest.prismic.io/api/v2'
    return process.env.GATSBY_PRISMIC_URL
  }
}
