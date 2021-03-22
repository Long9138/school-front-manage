import { Vue, Component } from "vue-property-decorator";

@Component({
  name: 'layout',
  template: require("./index.html"),
  components: {
    LayoutMenu: () => import('src/layouts/menu'),
    LayoutHeader: () => import('src/layouts/header'),
    LayoutBody: () => import('src/layouts/body'),
  }
})
export default class Layout extends Vue {

  /** 常量 */
  // @Prop / @Inject / @State / @Getter ...


  /** 变量 */
  // @PropSync / @Ref ...


  // 构造器
  constructor() {
    super();
  }

  /** 私用方法 */
  // @Watch / @Emit ...


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
}