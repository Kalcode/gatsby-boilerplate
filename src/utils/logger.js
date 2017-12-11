export default class Logger {
  static debug(message) {
    if (Logger.isDevelopment) {
      console.log(message)
    }
  }

  static error(message) {
    console.error(message)
  }

  static log(message, alwaysLog = false) {
    if (alwaysLog || Logger.isDevelopment()) {
      console.log(message)
    }
  }

  static get isDevelopment() {
    return process.env.NODE_ENV === 'development'
  }

}
