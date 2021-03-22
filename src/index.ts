import { Vue, Component } from "vue-property-decorator";
import { CreateElement } from 'vue';

@Component({
  name: 'app-enter'
})
export default class APPEnter extends Vue {

  /** 常量 */
  // @Prop / @Inject / @State / @Getter ...


  /** 变量 */
  // @PropSync / @Ref ...


  /** 私用方法 */
  // @Watch / @Emit ...
  render(h: CreateElement) {
    return h('div', { attrs: { id: 'q-app' } }, [h('router-view')])
  }

  /** 公共方法 */
  // @Provide / @Action / @Mutation ...


  // 生命构造之前
  beforeCreate() { }

  // 生命构造时
  created() { }

  // 生命挂载之前
  beforeMount() { }

  // 生命挂载时
  mounted() { }

  // 生命销毁之前
  beforeDestroy() { }

  // 生命销毁时
  destroyed() { }

  // 构造器
  constructor() { super() }
}