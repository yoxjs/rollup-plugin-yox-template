
const Yox = require('yox')

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