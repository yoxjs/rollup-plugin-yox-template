import fs from 'fs'
import Yox from 'yox'

export default function () {
  return {
    name: 'yox-template',
    load(id) {
      // 只处理 hbs 文件
      if (id.split('.').pop() === 'hbs') {
        let content = fs.readFileSync(id).toString()
        return `export default ${Yox.compile(content, true)}`
      }
    }
  }
}