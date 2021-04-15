import { Vue, Component } from "vue-property-decorator";
import { getCourese } from '@/api/course.js'
import { compileToFunctions } from "vue-template-compiler";
import { connect } from "http2";

@Component({
  name: 'login',
  template: require("./index.html"),
  components: {
    LayoutHeader: () => import('src/layouts/header'),
    Page1:()=> import('../page1'),
    Page2:()=> import('../page2')
  },
  filters: {
    
  }
})
export default class Login extends Vue {

  /** 常量 */
  // @Prop / @Inject / @State / @Getter ...


  /** 变量 */
  // @PropSync / @Ref ...
  test = ''

  // 构造器
  constructor() {
    super();
  }

  /** 私用方法 */
  // @Watch / @Emit ...


  /** 公共方法 */
  // @Provide / @Action / @Mutation ...

  testFunc() {
    return new Promise((resolve, resject) => {
      resject(123)
    })
  }
  method() {
    console.log('123')
  }

  // 生命构造之前
  beforeCreate() { }

  // 生命构造时
  async created() {
    // const courses = await getCourese()
    // console.log(courses)
    // let result = await this.testFunc()
    // console.log(result)
    // 创建构造器

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