import { map } from 'lodash'
import Logger from 'utils/logger'

export default class API {
  static newEntry(action) {
    const headers = {
      'Content-Type': 'application/json',
    }
    const body = {
      'hash': action.formId,
      'form': API.parseFields(action.data),
    }
    API.debug('/api/form?token=')

    return fetch(API.url + '/api/form?token=' + API.token, {
      body: JSON.stringify(body),
      mode: 'cors',
      method: 'post',
      headers,
    })
      .then(response => response.json())
      .then(json => json)
  }

  static parseFields(form) {
    return map(form.fields, (value, name) => {
      if (Array.isArray(value)) value = value.join(', ')
      return { name, value }
    })
  }

  static debug(endpoint, post = true) {
    const prefix = post ? 'Posting' : 'Fetching'
    Logger.debug(prefix + ' information: ' + API.url + endpoint)
  }

  static get token() {
    return process.env.GATSBY_API_TOKEN
  }

  static get url() {
    return process.env.GATSBY_API_URL
  }
}
