import { toFixed } from './toFixed'

interface Fn {
  [key: string]: (value: string | number, ...arg: [string | number]) => string | number
}
export function filters({ Vue }: any) {
  const obj: Fn = {
    toFixed,
  }
  for (const i in obj) {
    Vue.filter(i, obj[i])
  }
  
Vue.prototype.$filters = obj
}

declare module "vue/types/vue" {
  interface Vue {
    /**
     * ### 工具包 (可扩展)
     * - `IECleanMemory` IE整理内容
     * - `pagination` 获取分页配置
     * - `textPHRP` 文本占位符{0}-{n}替换
     */
    $filters:any
   }
}