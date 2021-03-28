
const Yox = require('yox')

Yox.config.uglifyCompiled = true
Yox.config.minifyCompiled = true

module.exports = function () {
  return {
    name: 'yox-template',
    transform(code, id) {
      if (id.split('.').pop() === 'hbs') {
        return {
          code: `export default ${Yox.compile(code, true)}`
        }
      }
    }
  }
}