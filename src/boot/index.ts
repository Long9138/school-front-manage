import TestComponent from '@/views/pages/test';
import { boot } from 'quasar/wrappers';
import { filters } from '@/packages/filters'

interface obj {
  bind?: Function,
  inserted?: Function,
  update?: Function,
  componentUpdated?: Function,
  unbind?: Function,
}
interface directive {
  (name: string, obj: obj): void

}

export default boot((content) => {
  console.log(content)
  const { Vue, router } = content

  //  Vue.filter('capitalize', function (value:any) {
  //   console.log(1)
  //   if (!value) return ''
  //   value = value.toString()
  //   return value.charAt(0).toUpperCase() + value.slice(1)
  // })
  // console.log(2)
  filters(content)
})