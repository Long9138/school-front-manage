import TestComponent from '@/views/pages/page1';
import { boot } from 'quasar/wrappers';
export default boot((content) => {
  console.log(content)
  const { Vue, router } = content
})