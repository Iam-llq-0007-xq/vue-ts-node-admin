# vue-svgicon

> 文档：
> https://github.com/MMF-FE/vue-svgicon

- 路径下所有的 `icons/components/*` 由 `vue-svgicon` 以 `icons/svg/*.svg` 生成，安装完 `vue-svgicon` 后，执行命令：
- 项目局部安装

```js
./node_modules/vue-svgicon/dist/lib/index.js -s ./src/app/icons/svg -t ./src/app/icons/components --ext ts --es6
```

> icons项目说明：
```js
icons
 |main.ts     入口文件
 |components  生成后的ext目标文件
 |style       初始化样式存放文件
 |svg         存放svg源文件
```
