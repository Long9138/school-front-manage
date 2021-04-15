import { Vue, Component } from "vue-property-decorator";

@Component({
  name: "page1",
  template: require("./index.html")
})
export default class Page1Component extends Vue {

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

  demo1() {
    console.log("这里是page1")
  }
  // 生命构造之前
  beforeCreate() { }

  // 生命构造时
  created() {
    this.demo1()
  }

  // 生命挂载之前
  beforeMount() { }

  // 生命挂载时
  mounted() { }

  // 生命销毁之前
  beforeDestroy() { }

  // 生命销毁时
  destroyed() { }
}