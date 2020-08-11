const requireComponent = require.context("./", true, /\.vue$/);
// 读取./路径下的.vue后缀的文件；true代表深层读取，false代表就读取一层路径
let arr = [];
export default function install(_vue) {
  requireComponent.keys().forEach((item) => {
    const config = requireComponent(item);
    arr.push(config.default.name);
    _vue.component(config.default.name, config.default);
  });
}
console.log(arr);
