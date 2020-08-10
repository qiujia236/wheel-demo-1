const requireComponent = require.context("./", false, /\.vue$/);
// 读取./路径下的.vue后缀的文件；true代表深层读取，false代表就读取一层路径

export default function install(_vue) {
  requireComponent.keys().forEach((item) => {
    const config = requireComponent(item);
    console.log(config.default);
    _vue.component(config.default.name, config.default);
  });
}

// let basePx = 0.041666665;
// let colWidth = {};
// for (let i = 1; i <= 24; i++) {
//   let x = basePx * i * 100;
//   x = x.toFixed(6);
//   let str = `.col[data-span="${i}"] {width: ${x}%;}`;
//   colWidth[i] = str;
// }

// let colMarginLeft = {};
// for (let i = 1; i <= 24; i++) {
//   let x = basePx * i * 100;
//   x = x.toFixed(6);
//   let str = `.col[data-offset="${i}"] {margin-left: ${x}%;}`;
//   colMarginLeft[i] = str;
// }
