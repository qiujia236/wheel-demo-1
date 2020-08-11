const requireComponent = require.context("./", true, /\.vue$/);
// 读取./路径下的.vue后缀的文件；true代表深层读取，false代表就读取一层路径

export default function install(_vue) {
  requireComponent.keys().forEach((item) => {
    const config = requireComponent(item);
    console.log(config.default);
    _vue.component(config.default.name, config.default);
  });
}
